import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/sections/section";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <Section title1={"THANK YOU"} text={"Thanks for filling out our form. Our team will get back to you ASAP."} type={0} />
    </Layout>
  );
}
