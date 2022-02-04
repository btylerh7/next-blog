import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Intro from '../components/Intro'
import {sanityClient, urlFor} from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}


export default function Home({ posts }: Props) {
  return (
    <div className="app">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Intro />
      <div className="posts py-10 mx-auto max-w-7xl">
        {posts.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug.current}`}>
            <div className='post-card'>
              <img src={urlFor(post.mainImage).url()!} alt={`Post image for ${post.title}`} />
            <div>
              <h3>{post.title} by {post.author.name}</h3>
              <p>{post.description}</p>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    description,
    slug,
    author -> {
    name,
    image,
  },
    mainImage,
  }`;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
}