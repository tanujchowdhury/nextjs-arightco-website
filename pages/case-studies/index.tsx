import { motion } from "framer-motion";
import Head from "next/head";
import { sweepRight } from "../../components/animations";
import CaseStudyCard from "../../components/cards/casestudycard";
import Layout from "../../components/layouts/layout";
import RecentCaseStudies from "../../components/sections/recentposts";

export default function CaseStudies() {
  return (
    <Layout>
      <Head>
        <title>Case Studies | Finance & Accounting Solutions | ArightCo</title>
      </Head>
      <div className="text-center text-white bg-gradient-to-r from-blue to-blue-light px-3 py-32 lg:py-44 lg:text-xl lg:px-32">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepRight}
        >

        <div className="font-bold text-6xl">Case Studies</div>
        <div className="px-20 py-6">
          Access expert advice on startup accounting and bookkeeping, download
          key resources and checklists, and get a better grasp of your business
          finances.
        </div>
        </motion.div>
      </div>
      <div className="mt-20">
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
      </div>
    </Layout>
  );
}
