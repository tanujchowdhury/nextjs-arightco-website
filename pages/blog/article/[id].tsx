import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import BlogLayout from "../../../components/blog/bloglayout";
import { BlogPostProps } from "../../../components/blog/blogpost";
import { prisma } from "../../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

const Post: React.FC<BlogPostProps> = (props) => {
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <BlogLayout>
      <div>
        <div className="text-5xl font-bold">{title}</div>
        <div className="text-lg pt-8 pb-16">
          By {props?.author?.name || "Unknown author"}
        </div>
        <ReactMarkdown children={props.content} />
      </div>
    </BlogLayout>
  );
};

export default Post;
