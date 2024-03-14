import Layout from "../../components/layouts/layout";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import RecentArticles from "../../components/sections/recentarticles";
import ArticleCard from "../../components/cards/articlecard";
import { Post, FrontMatter } from "../../types";
import { sortByDate } from "../../utils";

export default function PostPage({
  posts,
  frontmatter: { title, date, industry, cover_image, placeholder, show_date },
  content,
}: {
  posts: Post[];
  frontmatter: FrontMatter;
  content: string;
  slug: string;
}) {
  return (
    <Layout>
      <Head>
        <title>{title + " | Article | ArightCo"}</title>
      </Head>
      <div className="bg-gray-lighter p-8 pt-32 lg:pt-44 lg:text-xl lg:px-32 font-bold">
        <div className="basis-1/2">
          <div className="text-sm">{"Article | " + industry}</div>
          <div className="text-6xl">{title}</div>
          {!show_date && (
            <div className="text-sm font-normal">{"Published on " + date}</div>
          )}
        </div>
      </div>
      <div className="px-3 lg:px-32 flex flex-col place-items-center">
        <div
          className="my-3 w-[500px] h-[281px] flex items-center justify-center rounded-lg"
          style={{ backgroundColor: placeholder }}
        >
          <Image
            src={cover_image}
            alt={title}
            width={500}
            height={281}
            className="rounded-lg object-cover"
          />
        </div>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></article>
      </div>
      <div className="text-2xl lg:text-4xl lg:ml-32 mt-20 m-3 font-bold">
        Related Articles
      </div>
      <RecentArticles>
        {posts.slice(0, 3).map((post: Post, index: number) => (
          <ArticleCard key={index} post={post}></ArticleCard>
        ))}
      </RecentArticles>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

type ParamsType = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params: { slug } }: ParamsType) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const postFilePaths = fs.readdirSync(postsDirectory);

  const posts: Post[] = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postsDirectory, filePath), "utf8");
    const { data } = matter(source);

    return {
      slug: filePath.replace(".md", ""),
      frontmatter: data as FrontMatter, // type assertion
    };
  });

  const postFilePath = path.join(postsDirectory, `${slug}.md`);
  const source = fs.readFileSync(postFilePath, "utf8");
  const { data: frontmatter, content } = matter(source);

  // Remove the current article from the list of related articles
  const filteredPosts = posts.filter((post) => post.slug !== slug);

  return {
    props: {
      posts: filteredPosts.sort(sortByDate),
      frontmatter,
      slug,
      content,
    },
  };
}
