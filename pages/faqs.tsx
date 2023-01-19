import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Section from "../components/section";

export default function FAQs() {
  return (
    <Layout>
      <Head>
        <title>FAQ&apos;s</title>
      </Head>
      <Section title1={"FAQ's"} text={"Find answers to some of the most common questions regarding our offerings and service model"} type={3} />
    </Layout>
  );
}
