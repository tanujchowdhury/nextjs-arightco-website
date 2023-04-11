import RecentArticles from "../sections/recentarticles";
import Head from "next/head";
import ArticleCard from "../cards/articlecard";

export default function ArticleLayout({
  title,
  industry,
  date,
  content,
  src,
}: {
  title: string;
  industry: string;
  date: string;
  content: React.ReactNode;
  src: string;
}) {
  return (
    <>
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

      <div className="px-3 lg:px-32">{content}</div>

      <div className="text-2xl lg:text-4xl lg:ml-32 mt-20 m-3 font-bold">
        Related Articles
      </div>
      <RecentArticles>
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
    </>
  );
}
