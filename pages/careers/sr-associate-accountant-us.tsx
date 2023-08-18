import Head from "next/head";
import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function SrAssociateAccountantUS() {
  return (
    <Layout>
      <Head>
        <title>Sr. Associate Accountant | Join Our Team | ArightCo</title>
      </Head>
      <JobPostLayout
        jobTitle={"Sr. Associate Accountant"}
        jobCategory={"Finance and Accounting"}
        jobType={"Full Time"}
        jobLocation={"US"}
        value={"New Sr. Associate Accountant US Job Application!"}
        pdf={
          "/careers/Accounting Associate- Job Profle-Senior-Level -2022.pdf#toolbar=0"
        }
        action={"https://formsubmit.co/71bf94915cca9b128e6c9fbb3de5f642"}
      />
    </Layout>
  );
}
