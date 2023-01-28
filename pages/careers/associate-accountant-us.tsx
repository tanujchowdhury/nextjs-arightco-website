import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function AssociateAccountantUS() {
  return (
    <Layout>
      <JobPostLayout
        jobTitle={"Associate Accountant"}
        jobCategory={"Finance and Accounting"}
        jobType={"Full Time"}
        jobLocation={"US"}
        value={"New Associate Accountant US Job Application!"}
      />
    </Layout>
  );
}
