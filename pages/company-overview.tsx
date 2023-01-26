import { faCrosshairs, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Card from "../components/cards/card";
import ExitCarousel from "../components/carousels/exitcarousel";
import Layout from "../components/layout";
import QuoteModal from "../components/modals/quotemodal";
import Section from "../components/sections/section";
import Image from "next/image";

export default function CompanyOverview() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);
  const sweepLeft = {
    hidden: {
      x: "10vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5,
        damping: 10,
        delay: 0.2,
      },
    },
  };
  const sweepRight = {
    hidden: {
      x: "-10vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5,
        damping: 10,
        delay: 0.2,
      },
    },
  };
  const sweepDown = {
    hidden: {
      y: "-10vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5,
        damping: 10,
        delay: 0.5,
      },
    },
  };
  const sweepUp = {
    hidden: {
      y: "10vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <Layout>
      <Head>
        <title>Company Overview | Solutions for IT and SaaS</title>
      </Head>
      <div className="text-center px-2 bg-gradient-to-r from-blue to-blue-light py-32 lg:py-44">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
        >
          <div className="text-orange font-semibold">ABOUT US</div>
          <div className="text-white text-2xl py-3 md:py-10 md:text-4xl lg:text-5xl font-bold">
            Brand Story
          </div>
          <div className="text-white md:text-lg max-w-2xl mx-auto px-5">
            Founded in 2008, ArightCo provides expert Finance, Accounting, &
            Strategic Advisory solutions for IT and SaaS organizations. We offer
            endless scalability, allowing our services to grow with you from
            inception to exit.
          </div>
          <div className="m-10">
            <button
              className="h-12 w-52 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer"
              onClick={() =>
                quoteModalOpen ? closeQuoteModal() : openQuoteModal()
              }
            >
              GET STARTED
            </button>
          </div>
        </motion.div>
      </div>
      <div className="py-10 px-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepLeft}
        >
          <div className="text-blue text-2xl py-3 md:py-5 md:text-4xl lg:text-5xl font-bold text-center">
            Our Values
          </div>
          <div className="text-blue font-bold text-center pb-5 px-5">
            Our values of integrity, adaptability, and dependability are what
            drive us in our vision and mission of supporting our clients
          </div>
          <div className="px-5 md:px-32 text-sm md:text-lg">
            <div className="pb-8">
              <span className="font-bold">Integrity: </span>
              We strive to maintain the highest integrity in our workforce, and
              this not only includes the work we do but the culture we foster.
              With integrity being at the forefront of our values, we know that
              the services we provide will always be above board and honest.
            </div>
            <div className="pb-8">
              <span className="font-bold">Adaptability: </span>
              Our adaptability is not only where we work, but how we work as
              well. Being adaptable allows us to integrate new workflows and
              technology that help our clients in streamlining their back-office
              work.
            </div>
            <div className="pb-8">
              <span className="font-bold">Dependability: </span>
              We are driven by our strong desire to be dependable, accurate, and
              responsive. Being as efficient as possible provides our clients
              with better services and more accurate reports detail-oriented.
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepUp}
        className="flex flex-col items-center md:items-stretch justify-center m-5 md:flex-row min-[1350px]:px-32 md:h-[40vh]"
      >
        <Card
          title={"Our Mission"}
          text={[
            "Our mission is to provide outstanding customer service with quality accounting, HR, and back-office solutions for small to mid-size companies.",
          ]}
          type={1}
        >
          <FontAwesomeIcon icon={faCrosshairs} />
        </Card>
        <Card
          title={"Our Vision"}
          text={[
            "Our vision is to create a dynamic and technologically driven culture where our employees become an extension of our clients’ workforce. This ensures that processes are streamlined and efficient.",
          ]}
          type={1}
        >
          <FontAwesomeIcon icon={faEye} />
        </Card>
      </motion.div>
      <div className="pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepDown}
        >
          <Section
            title1={"FEATHERS IN OUR CAP"}
            title2={"Successful Exits"}
            text={
              "ArightCo’s team of industry experts provides comprehensive strategic support in fundraising, merger dealings, acquisitions, equity financing, and more."
            }
            type={2}
          />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepDown}
      >
        <ExitCarousel />
      </motion.div>
      <div className="text-center pt-24 px-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
        >
          <div className="text-orange font-semibold">TRUSTED BY</div>
          <div className="text-blue-dark text-2xl py-3 md:py-5 md:text-4xl lg:text-5xl font-bold">
            Over 85 Clients
          </div>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepLeft}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mx-3 xl:mx-32 py-10">
          <Image
            src={"/clientlogos/nex.png"}
            alt={"Nexient logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/truss.png"}
            alt={"Truss logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/bungee.png"}
            alt={"Bungee logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/punchh.png"}
            alt={"Punchh logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/cloudapp.png"}
            alt={"CloudApp logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/ark.png"}
            alt={"Arkestro logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/blink.png"}
            alt={"Blink logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/armor.png"}
            alt={"ArmorCode logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/aifi.png"}
            alt={"Aifi logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/metadata.png"}
            alt={"Metadata.io logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/sv.png"}
            alt={"SV Academy logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
          <Image
            src={"/clientlogos/unfold.png"}
            alt={"Unfold logo"}
            width={200}
            height={100}
            className="rounded-xl justify-self-center"
          />
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepRight}
         className="text-gray-dark md:text-lg max-w-2xl mx-auto">
          Although ArightCo specializes in serving companies in the Technology &
          IT sectors, we have the capability and significant experience in
          operating across a multitude of other industries, including
          Manufacturing, Non-Profit, Retail, and more
        </motion.div>
      </div>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
      </AnimatePresence>
    </Layout>
  );
}
