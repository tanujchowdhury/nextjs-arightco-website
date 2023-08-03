import Head from "next/head";
import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function AssociateAccountantIndia() {
  return (
    <Layout>
      <Head>
        <title>Associate Accountant | Join Our Team | ArightCo</title>
      </Head>
      <JobPostLayout
        jobTitle={"Associate Accountant"}
        jobCategory={"Finance and Accounting"}
        jobType={"Full Time"}
        jobLocation={"India"}
        value={"New Associate Accountant India Job Application!"}
        pdf={
          "/careers/Accounting Associate- Job Profle-Mid-Level -2022.pdf#toolbar=0"
        }
        action={"https://formsubmit.co/e5eac80f0877bf70742016af4e851c09"}
        cc={"dipanwita@arightco.com"}
      />
    </Layout>
  );
}
