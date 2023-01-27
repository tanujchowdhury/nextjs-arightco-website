import JobPostLayout from "../../components/layouts/jobpostlayout";
import Layout from "../../components/layouts/layout";

export default function HumanResources() {
  return (
    <Layout>
      <JobPostLayout
        jobTitle={"Human Resources"}
        jobCategory={"Human Resources"}
        jobType={"Freelance, Full Time, Part Time"}
        jobLocation={"San Jose"}
        value={"New HR Job Application!"}
      />
    </Layout>
  );
}
