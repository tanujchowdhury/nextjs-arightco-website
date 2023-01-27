import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function Accountant() {
  return (
    <Layout>
      <JobPostLayout
        jobTitle={"Accountant"}
        jobCategory={"Finance and Accounting"}
        jobType={"Freelance, Full Time, Part Time"}
        jobLocation={"San Jose"}
        value={"New Accountant Job Application!"}
      />
    </Layout>
  );
}
