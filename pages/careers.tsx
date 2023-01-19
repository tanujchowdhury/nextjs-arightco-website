import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/section";

export default function Careers() {
  return (
    <Layout>
      <Head>
        <title>Careers</title>
      </Head>
      <Section
        type={3}
        title1={"Careers"}
        title2={"Interested in Joining Our Team?"}
        text={"Reach out to "}
        linktext={"hr@atarightco.com"}
        href={"mailto:hr@arightco.com"}
      />
    </Layout>
  );
}
