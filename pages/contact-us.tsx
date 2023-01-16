import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
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
            <div className="pl-2 hover:text-orange-dark">Contact Us</div>
          </div>

          <div className="text-6xl font-bold pt-6">Contact Us</div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10 lg:basis-1/2 lg:items-start">
          <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            We're here to help you.
          </div>
          <div className="pt-5 text-center lg:text-start lg:text-lg">
            Have any questions for us? Reach out here and you will receive a
            prompt response from an ArightCo team member.
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="pt-10">
          <div className="text-sm text-orange font-bold">VISIT US</div>
          <div className="text-xl text-blue font-bold pt-5">Office Support</div>
          <div className="text-sm text-gray-dark py-5 border-b border-blue-light">
            Have any questions for us? Reach out here and you will receive a
            prompt response from an ArightCo team member.
          </div>
          <div className="flex flex-row items-center pt-5">
            <span className="bg-blue rounded-full p-2 text-white">
              <FontAwesomeIcon icon={faLocationDot} className="w-10 h-10" />
            </span>
            <div className="pl-3">
              <div className="text-2xl text-blue font-bold">Visit Us</div>
              <div className="text-gray-dark">
                US office: 1754 Technology Drive Suite 212, San Jose, CA 95110
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center pt-5">
            <div className="bg-blue rounded-full p-2 text-white">
              <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10" />
            </div>
            <div className="pl-3">
              <div className="text-2xl text-blue font-bold">Email Us</div>
              <div className="text-gray-dark">info@arightco.com</div>
            </div>
          </div>
          <div className="flex flex-row items-center pt-5">
            <div className="bg-blue rounded-full p-2 text-white">
              <FontAwesomeIcon icon={faPhone} className="w-10 h-10" />
            </div>
            <div className="pl-3">
              <div className="text-2xl text-blue font-bold">Call Us</div>
              <div className="text-gray-dark">(408) 837-0029</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
