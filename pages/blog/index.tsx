import Head from "next/head";
import ArticleCard from "../../components/cards/articlecard";
import Layout from "../../components/layouts/layout";
import RecentArticles from "../../components/sections/recentposts";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog | Finance & Accounting Solutions | ArightCo</title>
      </Head>
      <div className="text-center text-white bg-gradient-to-r from-blue to-blue-light px-3 py-32 lg:py-44 lg:text-xl lg:px-32">
        <div className="font-bold text-6xl">Blog</div>
        <div className="px-20 py-6">
          Access expert advice on startup accounting and bookkeeping, download
          key resources and checklists, and get a better grasp of your business
          finances.
        </div>
      </div>
      <div className="mt-20">
        <RecentArticles>
          <ArticleCard
            src={"/blog/leverage-outsourced-cfo-services-to-achieve-business-goals.jpg"}
            alt={"Leverage Outsourced CFO Services to Achieve Business Goals"}
            title={"Leverage Outsourced CFO Services to Achieve Business Goals"}
            href={"/blog/leverage-outsourced-cfo-services-to-achieve-business-goals"}
            date={"February 3, 2023"}
          />
        </RecentArticles>
      </div>
    </Layout>
  );
}
