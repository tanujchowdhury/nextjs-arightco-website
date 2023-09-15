import { motion } from "framer-motion";
import Head from "next/head";
import { sweepRight } from "../../components/animations";
import ArticleCard from "../../components/cards/articlecard";
import Layout from "../../components/layouts/layout";
import RecentArticles from "../../components/sections/recentarticles";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FrontMatter, Post } from "../../types";
import { sortByDate } from "../../utils";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Finance & Accounting Solutions | ArightCo</title>
      </Head>
      <div className="text-center text-white bg-gradient-to-r from-blue to-blue-light px-3 py-32 lg:py-44 lg:text-xl lg:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
        >
          
          <div className="font-bold text-6xl">Blog</div>
          <div className="px-20 py-6">
            Explore insightful articles on startup finance, delve into tips and
            best practices, and stay updated with the latest trends in
            accounting and bookkeeping. Enhance your knowledge and empower your
            business decisions.
          </div>
        </motion.div>
      </div>
      <div className="mt-20">
        <RecentArticles>
          {posts.map((post: Post, index: number) => (
            <ArticleCard key={index} post={post}></ArticleCard>
          ))}
        </RecentArticles>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts: Post[] = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter: frontmatter as FrontMatter, // type assertion
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
