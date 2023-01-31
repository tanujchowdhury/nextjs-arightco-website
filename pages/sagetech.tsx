import Head from "next/head";
import CaseStudyLayout from "../components/layouts/casestudylayout";
import Layout from "../components/layouts/layout";

export default function Sagetech() {
  return (
    <Layout>
      <Head>
        <title>Sagetech Avionics | Case Study | ArightCo</title>
      </Head>
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
