import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function ControllerUS() {
  return (
    <Layout>
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
