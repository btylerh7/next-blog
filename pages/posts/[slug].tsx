import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import PortableText from "react-portable-text";




interface Props {
  post: Post;
}

function Post({ post }: Props) {
  return (
    <div className="px-6">
      <Header />
      <main>
        <img
          className="w-full h-40 object-cover"
          src={urlFor(post.mainImage).url()!}
          alt={`Post image for ${post.title}`}
        />
        <article className="mx-auto p-5 max-w-5xl">
          <h1>{post.title}</h1>
          <div className="flex items-center">
            <img
              className="h-10 w-10 object-cover rounded-full mr-3"
              src={urlFor(post.author.image).url()!}
              alt={`${post.author.name}, post author`}
            />
            <p className="font-extralight text sm">
              Blog post by {post.author.name}
            </p>
          </div>
          <br />
          <div className="article mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
              serializers={{
                h1: ({children}:any) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
                h2: ({children}:any) => <h2 className="text-3xl font-bold my-4">{children}</h2>,
                normal: ({children}:any) => <p className="text-xl py-2">{children}</p>
              }}
            />
          </div>
        </article>
        <hr className="max-w-lg mx-auto border border-black my-5" />
      </main>
    </div>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == 'post']{
        _id,
        slug {
        current
      },
      }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
        _id,
        createdAt,
        title,
        author -> {
        name,
        image
      },
        description,
        mainImage,
        slug,
        body
      }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
