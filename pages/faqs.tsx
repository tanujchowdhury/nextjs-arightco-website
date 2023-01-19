import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function FAQs() {
  return (
    <Layout>
      <Head>
        <title>FAQ&apos;s</title>
      </Head>
      <div className="py-32 lg:py-44 xl:py-52  bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center justify-center text-white lg:flex-row px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center justify-center lg:basis-1/2 lg:items-start">
          <div className="flex flex-row items-center justify-center font-bold">
            <div className="pr-2 hover:text-orange-dark">
              <Link href="/">Home</Link>
            </div>
            <div className="w-3 h-5">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="pl-2 hover:text-orange-dark">FAQ&apos;s</div>
          </div>

          <div className="text-6xl font-bold pt-6">FAQ&apos;s</div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10 lg:basis-1/2 lg:items-start">
          <div className="pt-5 text-center lg:text-start lg:text-lg">
            FInd answers to some of the most common questions regarding our
            offerings and service model
          </div>
        </div>
      </div>
    </Layout>
  );
}
