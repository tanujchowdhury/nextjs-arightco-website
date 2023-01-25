import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/sections/section";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <Section title1={"Thank You"} text={"Thanks for filling out our form. Our team will get back to you ASAP."} type={3} />
    </Layout>
  );
}
