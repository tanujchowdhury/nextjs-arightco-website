import Layout from "../components/layouts/layout";

import CaseStudyLayout from "../components/layouts/casestudylayout";

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
