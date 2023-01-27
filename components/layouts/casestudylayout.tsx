import Image from "next/image";
import RecentArticles from "../sections/recentarticles";
import Head from "next/head";

export default function CaseStudyLayout({
  title,
  industry,
  date,
  imagesrc,
  pdfsrc,
}: {
    title: string;
    industry: string;
    date: string;
    imagesrc: string;
    pdfsrc: string;
}) {
  return (
    <>
        <Head>
            <title>{title + " | Case Study | ArightCo"}</title>
        </Head>
      <div className="text-center bg-gray-lighter px-3 py-32 lg:py-44 lg:text-xl lg:px-32 font-bold">
        <div className="text-sm">{"CASE STUDY | " + industry}</div>
        <div className="text-6xl">{title}</div>
        <div className="text-sm font-normal">{"Published on " + date}</div>
      </div>
      <div className="m-3">
        <Image
          src={imagesrc}
          alt={title + "case study"}
          height={600}
          width={800}
          className="mx-auto rounded-3xl my-10"
        ></Image>
      </div>

      <iframe
        src={pdfsrc}
        width="80%"
        height="1000px"
        className="mx-auto p-3"
      ></iframe>

      <div className="text-2xl lg:text-4xl lg:ml-32 mt-20 m-3 font-bold">
        Related Articles
      </div>
      <RecentArticles />
    </>
  );
}
