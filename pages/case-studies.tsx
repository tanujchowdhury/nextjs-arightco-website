import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layouts/layout";
import Image from "next/image";
import RecentArticles from "../components/sections/recentarticles";

export default function CaseStudies() {
  return (
    <Layout>
      <Head>
        <title>Case Studies | Solutions for IT and SaaS | ArightCo</title>
      </Head>
      <div className="text-center text-white bg-gradient-to-r from-blue to-blue-light px-3 py-32 lg:py-44 lg:text-xl lg:px-32">
        <div className="font-bold text-6xl">Case Studies</div>
        <div className="px-20 py-6">
          Access expert advice on startup accounting and bookkeeping, download
          key resources and checklists, and get a better grasp of your business
          finances.
        </div>
        <div className="flex flex-col items-center justify-center mt-16 mx-3 lg:flex-row lg:ml-32">
          <div className="lg:basis-1/2">
            <Link href="/nexient-ntt-data">
              <Image
                src="/casestudies/images/nex.png"
                height={500}
                width={600}
                alt={"Nexient NTT Data"}
                className="rounded-3xl"
              ></Image>
            </Link>
          </div>
          <div className="mt-5 lg:text-start lg:basis-1/2 ml-16">
            <div className="font-bold text-2xl lg:text-4xl">
              <Link href="/nexient-ntt-data">Nexient NTT Data</Link>
            </div>
            <div className="text-orange">March 1, 2022</div>
          </div>
        </div>
      </div>
      <div className="mt-20">

      <RecentArticles />
      </div>
    </Layout>
  );
}
