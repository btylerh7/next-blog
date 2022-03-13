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
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="page-wrapper">
      {/* <Intro /> */}
      <div className="blog-home-wrapper">
        {posts.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug.current}`}>
            {/* justify-center cursor-pointer border rounded-md border-black max-w-md shadow-lg */}
            <div className='blog-wrapper'>
              <img style={{maxWidth: "200px"}} src={urlFor(post.mainImage).url()!} alt={`Post image for ${post.title}`} />
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div><hr />
            </div>
            
          </Link>
        ))}
      </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] | order(publishedAt desc) {
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