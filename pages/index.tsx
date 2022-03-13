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
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

      </Head>
      <Header />
      <main className="page-wrapper">
      {/* <Intro /> */}
      <div className="blog-home-wrapper">
        {posts.map((post) => (
          <div>
            {/* justify-center cursor-pointer border rounded-md border-black max-w-md shadow-lg */}
            <div className='blog-wrapper'>
              <img src={urlFor(post.mainImage).url()!} alt={`Post image for ${post.title}`} />
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link key={post._id} href={`/posts/${post.slug.current}`}>
                <h4 style={{textAlign: "center", maxWidth: "150px"}} className="btn">Read More</h4>
              </Link>
            </div>
            </div>
            
          </div>
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