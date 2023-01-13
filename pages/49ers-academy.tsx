import CaseStudyLayout from "../components/casestudylayout";
import Layout from "../components/layout";

export default function FortyNinersAcademy() {
  return (
    <Layout>
      <CaseStudyLayout
        title={"49ers Academy"}
        industry={"NON-PROFIT"}
        date={"March 1, 2022"}
        imagesrc={"/casestudies/images/49ers.png"}
        pdfsrc={"/casestudies/pdfs/49ers.pdf"}
      />
    </Layout>
  );
}
