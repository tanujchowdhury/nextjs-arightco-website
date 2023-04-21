import Head from "next/head";
import Layout from "../components/layouts/layout";
import Section from "../components/sections/section";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>404 Page Not Found | ArightCo</title>
      </Head>
      <Section
        title1={"404"}
        text={"We couldn't find the page you were looking for."}
        type={3}
      />
    </Layout>
  );
}
