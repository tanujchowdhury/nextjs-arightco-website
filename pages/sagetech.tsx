import CaseStudyLayout from "../components/casestudylayout";
import Layout from "../components/layout";

export default function Sagetech() {
  return (
    <Layout>
      <CaseStudyLayout
        title={"Sagetech Avionics"}
        industry={"MANUFACTURING"}
        date={"March 1, 2022"}
        imagesrc={"/casestudies/images/sage.png"}
        pdfsrc={"/casestudies/pdfs/sage.pdf"}
      />
    </Layout>
  );
}
