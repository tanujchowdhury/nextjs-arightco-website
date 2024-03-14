export type Variant = {
  [key: string]: {
    [key: string]:
      | string
      | number
      | {
          type: string;
          stiffness?: number;
          mass?: number;
          damping?: number;
          delay?: number;
          duration?: number;
        };
  };
};

export interface FrontMatter {
  title: string;
  date: string;
  industry: string;
  cover_image: string;
  placeholder: string;
  show_date?: string;
}

export interface Post {
  slug: string;
  frontmatter: FrontMatter;
}
