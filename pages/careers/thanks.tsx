import Head from "next/head";
import Layout from "../../components/layouts/layout";
import Section from "../../components/sections/section";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>Thank You! | Join Our Team | ArightCo</title>
      </Head>
      <Section
        title1={"Thank You"}
        text={
          "Thanks for filling out an application. Our team will get back to you ASAP."
        }
        type={3}
      />
    </Layout>
  );
}
