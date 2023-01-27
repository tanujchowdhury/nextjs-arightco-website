import Head from "next/head";
import JobCard from "../components/cards/jobcard";
import Layout from "../components/layout";
import Section from "../components/sections/section";

export default function Careers() {
  return (
    <Layout>
      <Head>
        <title>Careers</title>
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
        <div className="border-b border-gray-light w-full text-5xl py-4 font-bold">Job Postings</div>
        <div>
          <JobCard jobTitle={"Accountant"} jobCategory={"Finance & Accounting"} jobType={"Freelance, Full Time, Part Time"} jobLocation={"San Jose"} href={"/jobs/accountant"} />
          <JobCard jobTitle={"Human Resources"} jobCategory={"Human Resources"} jobType={"Freelance, Full Time, Part Time"} jobLocation={"San Jose"} href={"/jobs/human-resources"} />
        </div>
      </div>
    </Layout>
  );
}
