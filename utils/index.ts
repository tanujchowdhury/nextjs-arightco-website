import { Post } from "../types";

export const sortByDate = (a: Post, b: Post) => {
  const dateA = new Date(Date.parse(a.frontmatter.date));
  const dateB = new Date(Date.parse(b.frontmatter.date));
  return dateB.getTime() - dateA.getTime();
};
