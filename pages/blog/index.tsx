import { motion } from "framer-motion";
import Head from "next/head";
import { sweepRight } from "../../components/animations";
import ArticleCard from "../../components/cards/articlecard";
import Layout from "../../components/layouts/layout";
import RecentArticles from "../../components/sections/recentarticles";

export default function Blog() {
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
            Access expert advice on startup accounting and bookkeeping, download
            key resources and checklists, and get a better grasp of your
            business finances.
          </div>
        </motion.div>
      </div>
      <div className="mt-20">
        <RecentArticles>
          <ArticleCard
            src={"/blog/cfo-boost-financial-health.png"}
            href={"/blog/cfo-boost-financial-health"}
            title={
              "Your Start-up's at  Risk! How A CFO Can Boost Your Company's Financial Health"
            }
            date={"April 13, 2023"}
          />
          <ArticleCard
            src={"/blog/tech-startup-financial-services.png"}
            href={"/blog/tech-startup-financial-services"}
            title={"So, Your Tech Start-Up Needs Fractional Financial Services"}
            date={"April 11, 2023"}
          />
          <ArticleCard
            src={"/blog/from-risk-to-reward.png"}
            title={
              "From Risk to Reward: 4 Ways to Mitigate Your Start-Up's Financial Risks"
            }
            href={"/blog/from-risk-to-reward"}
            date={"April 6, 2023"}
          />
          <ArticleCard
            src={
              "/blog/you-should-leverage-outsourced-cfo-services-to-achieve-business-goals.jpg"
            }
            title={
              "You Should Leverage Outsourced CFO Services to Achieve Business Goals"
            }
            href={
              "/blog/you-should-leverage-outsourced-cfo-services-to-achieve-business-goals"
            }
            date={"February 3, 2023"}
          />
        </RecentArticles>
      </div>
    </Layout>
  );
}
