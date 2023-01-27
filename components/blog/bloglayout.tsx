import React, { ReactNode } from "react";
import BlogHeader from "./blogheader";

type Props = {
  children: ReactNode;
};

const BlogLayout: React.FC<Props> = (props) => (
  <div>
    <BlogHeader />
    <div className="px-8">{props.children}</div>
  </div>
);

export default BlogLayout;