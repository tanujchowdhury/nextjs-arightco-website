import Head from "next/head";
import CaseStudyLayout from "../components/layouts/casestudylayout";
import Layout from "../components/layouts/layout";

export default function FortyNinersAcademy() {
  return (
    <Layout>
      <Head>
        <title>49ers Academy | Case Study | ArightCo</title>
      </Head>
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
