import Layout from "../../components/layouts/layout";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import RecentArticles from "../../components/sections/recentarticles";
import ArticleCard from "../../components/cards/articlecard";

export default function PostPage({
  posts,
  frontmatter: { title, date, industry, cover_image },
  content,
  slug,
}: {
  posts: any;
  frontmatter: any;
  content: any;
  slug: any;
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
          <div className="text-sm font-normal">{"Published on " + date}</div>
        </div>
      </div>
      <div className="px-3 lg:px-32 flex flex-col place-items-center">
        <Image
          src={cover_image}
          alt={title}
          width={500}
          height={281}
          className="my-3 rounded-lg"
        />

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></article>
      </div>
      <div className="text-2xl lg:text-4xl lg:ml-32 mt-20 m-3 font-bold">
        Related Articles
      </div>
      <RecentArticles>
        {posts.reverse().slice(0,3).map((post: any, index: any) => (
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

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
      frontmatter,
      slug,
      content,
    },
  };
}
