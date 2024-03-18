import Head from "next/head";
import JobCard from "../../components/cards/jobcard";
import Layout from "../../components/layouts/layout";
import Section from "../../components/sections/section";

export default function Careers() {
  return (
    <Layout>
      <Head>
        <title>Careers | Join Our Team | ArightCo</title>
      </Head>
      <Section
        type={3}
        title1={"Careers"}
        title2={"Interested in Joining Our Team?"}
        text={"Reach out to "}
        linktext={"hr@arightco.com"}
        href={"mailto:hr@arightco.com"}
      />
      <div className="flex flex-col items-start justify-start bg-white my-20 mx-3 xl:mx-32 p-8 rounded-3xl">
        <div className="border-b border-gray-light w-full text-5xl py-4 font-bold">
          Job Postings
        </div>
        <div className="pt-8 grid md:grid-cols-3 gap-4 w-full">
          <JobCard
            jobTitle={"Controller"}
            jobCategory={"Finance & Accounting"}
            jobType={"Full Time"}
            jobLocation={"US"}
            href={"/careers/controller-us"}
          />

          <JobCard
            jobTitle={"Associate Accountant"}
            jobCategory={"Finance & Accounting"}
            jobType={"Full Time"}
            jobLocation={"US"}
            href={"/careers/sr-associate-accountant-us"}
          />

          <JobCard
            jobTitle={"Sr. Associate Accountant"}
            jobCategory={"Finance & Accounting"}
            jobType={"Full Time"}
            jobLocation={"US"}
            href={"/careers/sr-associate-accountant-us"}
          />

          <JobCard
            jobTitle={"Associate Accountant"}
            jobCategory={"Finance & Accounting"}
            jobType={"Full Time"}
            jobLocation={"India"}
            href={"/careers/associate-accountant-india"}
          />

          <JobCard
            jobTitle={"Sr. Associate Accountant"}
            jobCategory={"Finance & Accounting"}
            jobType={"Full Time"}
            jobLocation={"India"}
            href={"/careers/sr-associate-accountant-india"}
          />
        </div>
      </div>
    </Layout>
  );
}
