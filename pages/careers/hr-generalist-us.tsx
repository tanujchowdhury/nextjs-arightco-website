import Head from "next/head";
import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function HRGeneralistUS() {
  return (
    <Layout>
      <Head>
        <title>HR Generalist | Join Our Team | ArightCo</title>
      </Head>
      <JobPostLayout
        jobTitle={"HR Generalist"}
        jobCategory={"Human Resources"}
        jobType={"Full Time"}
        jobLocation={"US"}
        value={"New HR Generalist US Job Application!"}
      />
    </Layout>
  );
}
