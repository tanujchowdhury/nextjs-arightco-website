import Layout from "../components/layout";

import CaseStudyLayout from "../components/casestudylayout";

export default function NexientNTTData() {
  return (
    <Layout>
      <CaseStudyLayout
        title={"Nexient NTT Data"}
        industry={"IT AND SAAS"}
        date={"March 1, 2022"}
        imagesrc={"/casestudies/images/nex.png"}
        pdfsrc={"/casestudies/pdfs/nex.pdf"}
      />
    </Layout>
  );
}
