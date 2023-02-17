import Image from "next/image";
import RecentCaseStudies from "../sections/recentposts";
import Head from "next/head";
import CaseStudyCard from "../cards/casestudycard";

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
        <Image
          src={imagesrc}
          alt={title + "case study"}
          height={600}
          width={800}
          className="mx-auto rounded-3xl my-10"
        ></Image>

      <iframe
        src={pdfsrc}
        width="100%"
        height="1000px"
        className="mx-auto p-3 lg:px-32"
      ></iframe>

      <div className="text-2xl lg:text-4xl lg:ml-32 mt-20 m-3 font-bold">
        Related Articles
      </div>
      <RecentCaseStudies>
        <CaseStudyCard
          src={"/case-studies/images/nex.png"}
          alt={"Nexient NTT Data"}
          title={"Nexient NTT Data"}
          href={"/case-studies/nexient-ntt-data"}
          date={"March 1, 2022"}
        />
        <CaseStudyCard
          src={"/case-studies/images/49ers.png"}
          alt={"49ers Academy"}
          title={"49ers Academy"}
          href={"/case-studies/49ers-academy"}
          date={"March 1, 2022"}
        />
        <CaseStudyCard
          src={"/case-studies/images/sage.png"}
          alt={"Sagetech"}
          title={"Sagetech"}
          href={"/case-studies/sagetech"}
          date={"March 1, 2022"}
        />
      </RecentCaseStudies>
    </>
  );
}
