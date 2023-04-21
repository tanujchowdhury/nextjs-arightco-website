export interface FrontMatter {
  title: string;
  date: string;
  industry: string;
  cover_image: string;
}

export interface Post {
  slug: string;
  frontmatter: FrontMatter;
}
