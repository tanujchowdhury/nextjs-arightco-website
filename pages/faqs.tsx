import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/section";
import FAQ from "../components/faq";

export default function FAQs() {
  return (
    <Layout>
      <Head>
        <title>FAQ&apos;s</title>
      </Head>
      <Section title1={"FAQ's"} text={"Find answers to some of the most common questions regarding our offerings and service model"} type={3} />
      <div className="m-3 xl:mx-32">

      <FAQ q={"Will ArightCo provide temporary staffing?"} a={"ArightCo does not offer temporary staffing solutions. Arightco, Inc. is a professional business consulting firm that provides integrated services for small to medium size businesses for back-of-the house support in Finance and Human Resources services. Our professionals can step in and quickly integrate into your organization as a client partner and long-term solution."} />
      <FAQ q={"Do you offer billing on a per invoice basis?"} a={"ArightCo closely partners with clients and integrates with your business to provide a seamless solution for immediate needs in the area of Finance or Human Resources Services. ArightCo does not charge clients on a per invoice basis for individual services. We are not an AI accounting solution business."} />
      <FAQ q={"How will ArightCo save my business money?"} a={"ArightCo has many ways to help small to medium sized businesses leverage their budgets. Check out our brand video to learn more about our workflow"} />
      <FAQ q={"How will ArightCo alleviate my work load?"} a={"When ArightCo is on board, business owners can shift their focus from day-to-day Finance and HR Operations to strategic leadership to grow their business. We have several services packages to fit the needs of all tiers of small to medium size businesses. Be sure to check out and view our “How We Work” model to learn more about our workflow processes and how ArightCo, Inc. may be the workforce solution you are seeking for your business"} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />
      <FAQ q={""} a={""} />

      </div>
    </Layout>
  );
}
