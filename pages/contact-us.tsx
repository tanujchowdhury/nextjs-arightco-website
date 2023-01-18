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
import IconGroup from "../components/icongroup";
import USOfficeMap from "../components/usofficemap";

export default function ContactUs() {
  

  
  return (
    <Layout>
      <Head>
        <title>Contact Us | Finance and Accounting Solutions | ArightCo</title>
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
      <div className="flex flex-col lg:flex-row min-[1350px]:mx-28">
        <div className="pt-10 px-10 lg:basis-1/2 lg:order-2">
          <div className="text-sm md:text-base text-orange font-bold">
            VISIT US
          </div>
          <div className="text-2xl md:text-4xl text-blue font-bold pt-5">
            Office Support
          </div>
          <div className="md:text-lg text-gray-dark py-5 border-b border-blue-light">
            Have any questions for us? Reach out here and you will receive a
            prompt response from an ArightCo team member.
          </div>

          <IconGroup
            icon={<FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />}
            title={"Visit Us"}
            text={
              "US office: 1754 Technology Drive Suite 212, San Jose, CA 95110"
            }
          />

          <IconGroup
            icon={<FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />}
            title={"Email Us"}
            text={"info@arightco.com"}
          />

          <IconGroup
            icon={<FontAwesomeIcon icon={faPhone} className="w-6 h-6" />}
            title={"Call Us"}
            text={"(408) 837-0029"}
          />
        </div>
        <div className="mt-10 mx-5 p-5 bg-white rounded-3xl shadow-lg lg:basis-1/2 lg:order-1 lg:shadow-2xl">
          <div className="text-sm md:text-base text-orange font-bold">
            SEND US A MESSAGE
          </div>
          <div className="text-2xl md:text-4xl text-blue font-bold pt-5">
            Can't find the answer you're looking for?
          </div>
          <div className="md:text-lg text-gray-dark py-5 border-b border-blue-light">
            Tell us a little bit about your company and we will reach out to
            curate your custom back-office solution.
          </div>
          <form
            target="_blank"
            action="https://formsubmit.co/chowdhury.tanuj@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Quote Request!" />
            <div className="grid md:grid-cols-2 gap-4 pt-7">
              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="fullname"
                type="text"
                placeholder="Name"
                name="Name"
              />

              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="email"
                type="email"
                placeholder="Email"
                name="Email"
                required
              />

              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="number"
                type="text"
                placeholder="Phone Number"
                name="Phone Number"
                required
              />

              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="cname"
                type="text"
                placeholder="Company Name"
                name="Company Name"
              />

              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest md:col-span-2"
                id="website"
                type="text"
                placeholder="Company Website Link"
                name="Company Website Link"
              />

              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest md:col-span-2"
                id="subject"
                type="text"
                placeholder="Subject"
                name="Subject"
              />

              <textarea
                className="shadow appearance-none border rounded-3xl p-3 leading-tight focus:outline-none focus:shadow-outline resize-y bg-blue-lightest md:col-span-2"
                id="message"
                placeholder="Message"
                name="Message"
                rows={4}
              />

              <button
                className="h-10 mt-5 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange  hover:bg-blue-dark md:col-span-2"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    
      <USOfficeMap />
    </Layout>
  );
}
