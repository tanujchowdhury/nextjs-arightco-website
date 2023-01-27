import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type BlogPostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const BlogPost: React.FC<{ post: BlogPostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/blog/article/[id]", `/blog/article/${post.id}`)} className="p-8">
      <div className="text-2xl font-bold">{post.title}</div>
      <div className="text-sm pt-4">By {authorName}</div>
      <ReactMarkdown children={post.content} />
    </div>
  );
};

export default BlogPost;