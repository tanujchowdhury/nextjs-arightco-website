import React from "react";
import { GetStaticProps } from "next";
import BlogLayout from "../../components/blog/bloglayout";
import BlogPost, { BlogPostProps } from "../../components/blog/blogpost";
import { prisma } from "../../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: BlogPostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <BlogLayout>
      <div>
        <div className="text-4xl font-bold">Public Feed</div>
        <main>
          {props.feed.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow hover:shadow-xl mt-8 cursor-pointer"
            >
              <BlogPost post={post} />
            </div>
          ))}
        </main>
      </div>
    </BlogLayout>
  );
};

export default Blog;
