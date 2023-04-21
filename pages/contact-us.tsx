import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Layout from "../components/layouts/layout";
import Link from "next/link";
import IconGroup from "../components/icongroup";
import OfficeMap from "../components/sections/officemap";
import Section from "../components/sections/section";
import { motion } from "framer-motion";
import { sweepLeft, sweepRight } from "../components/animations";

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | Finance & Accounting Solutions | ArightCo</title>
      </Head>
      <Section
        type={3}
        title1={"Contact Us"}
        title2={"We're here to help you."}
        text={
          "Have any questions for us? Reach out here and you will receive a prompt response from an ArightCo team member."
        }
      />

      <div className="flex flex-col lg:flex-row min-[1350px]:mx-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepLeft}
          className="pt-10 px-10 lg:basis-1/2 lg:order-2"
        >
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
            text={[
              "US office: 1754 Technology Drive Suite 212, San Jose, CA 95110",
              "India office: 47C, Lake Ave, Bhowanipore, Lake Range, Kalighat, Kolkata, West Bengal 700026, India",
            ]}
            href1={
              "https://www.google.com/maps/place/ArightCo/@37.3695398,-121.9211659,17z/data=!3m2!4b1!5s0x808fcbec56ce0a17:0x49bd60e17e4449e0!4m5!3m4!1s0x808fcbeb54749acd:0xdd0086331fe01848!8m2!3d37.3695398!4d-121.9189772"
            }
            href2={
              "https://www.google.com/maps/place/Arightco+Consulting+Pvt.+Ltd/@22.5125761,88.3475871,17z/data=!3m1!4b1!4m5!3m4!1s0x3a027193452a1a17:0xe14825aec46e79fe!8m2!3d22.5125679!4d88.349863"
            }
          />

          <IconGroup
            icon={<FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />}
            title={"Email Us"}
            text={["info@arightco.com"]}
            href1={"mailto:info@arightco.com"}
          />

          <IconGroup
            icon={<FontAwesomeIcon icon={faPhone} className="w-6 h-6" />}
            title={"Call Us"}
            text={["(408) 837-0029"]}
            href1={"tel:+1(408)8370029"}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
          className="mt-10 mx-5 p-5 bg-white rounded-3xl shadow-lg lg:basis-1/2 lg:order-1 lg:shadow-2xl"
        >
          <div className="text-sm md:text-base text-orange font-bold">
            SEND US A MESSAGE
          </div>
          <div className="text-2xl md:text-4xl text-blue font-bold pt-5">
            Can&apos;t find the answer you&apos;re looking for?
          </div>
          <div className="md:text-lg text-gray-dark py-5 border-b border-blue-light">
            Tell us a little bit about your company and we will reach out to
            curate your custom back-office solution.
          </div>
          <form
            target="_blank"
            action="https://formsubmit.co/62490fb5a4309c0a244d0936b1752f3a"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://arightco.vercel.app/thanks"
            />
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
                type="tel"
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
        </motion.div>
      </div>
      <div className="text-xl md:text-2xl text-blue font-bold mx-5 xl:mx-32 mt-20">
        <Link
          className="hover:text-orange-dark"
          target="_blank"
          href="https://www.google.com/maps/place/ArightCo/@37.3695398,-121.9211659,17z/data=!3m2!4b1!5s0x808fcbec56ce0a17:0x49bd60e17e4449e0!4m5!3m4!1s0x808fcbeb54749acd:0xdd0086331fe01848!8m2!3d37.3695398!4d-121.9189772"
        >
          US: 1754 Technology Drive Suite 212, San Jose, CA 95110
        </Link>
      </div>
      <OfficeMap lat={37.369616519260816} lng={-121.91899865996622} />
      <div className="text-xl md:text-2xl text-blue font-bold mx-5 xl:mx-32 mt-20">
        <Link
          className="hover:text-orange-dark"
          target="_blank"
          href="https://www.google.com/maps/place/Arightco+Consulting+Pvt.+Ltd/@22.5125761,88.3497758,17z/data=!3m1!4b1!4m5!3m4!1s0x3a027193452a1a17:0xe14825aec46e79fe!8m2!3d22.5125679!4d88.349863"
        >
          India: 47C, Lake Ave, Bhowanipore, Lake Range, Kalighat, Kolkata, West
          Bengal 700026, India
        </Link>
      </div>
      <OfficeMap lat={22.51274457636822} lng={88.34985089918365} />
    </Layout>
  );
}
