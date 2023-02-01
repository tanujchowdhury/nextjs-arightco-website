import Head from "next/head";
import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function ControllerUS() {
  return (
    <Layout>
      <Head>
        <title>Controller | Join Our Team | ArightCo</title>
      </Head>
      <JobPostLayout
        jobTitle={"Controller"}
        jobCategory={"Finance and Accounting"}
        jobType={"Full Time"}
        jobLocation={"US"}
        value={"New Controller US Job Application!"}
      />
    </Layout>
  );
}