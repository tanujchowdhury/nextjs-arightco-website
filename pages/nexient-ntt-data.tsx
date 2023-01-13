import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import RecentArticles from "../components/recentarticles";

export default function NexientNTTData() {
  return (
    <Layout>
      <Head>
        <title>Nexient NTT Data</title>
      </Head>
      <div className="text-center bg-gray-lighter px-3 py-32 lg:py-44 lg:text-xl lg:px-32 font-bold">
        <div className="text-sm">CASE STUDY | IT AND SAAS CASE STUDY</div>
        <div className="text-6xl">Nexient NTT Data</div>
        <div className="text-sm font-normal">Published on March 1, 2022</div>
      </div>
      <div className="m-3">
        <Image
          src="/casestudies/images/nex.png"
          alt="Nexient Case Study"
          height={600}
          width={800}
          className="mx-auto rounded-3xl my-10"
        ></Image>
      </div>

      <iframe
        src="/casestudies/pdfs/nexient-case-study.pdf"
        width="80%"
        height="1000px"
        className="mx-auto p-3"
      ></iframe>

      <div className="text-2xl lg:text-4xl lg:ml-32 mt-20 m-3 font-bold">
        Related Articles
      </div>
      <RecentArticles />
    </Layout>
  );
}
