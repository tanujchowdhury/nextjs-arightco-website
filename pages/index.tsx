import {
  faBullseye,
  faChartLine,
  faChartPie,
  faChartSimple,
  faComputer,
  faCreditCard,
  faFaceLaughBeam,
  faLayerGroup,
  faPeopleGroup,
  faSackDollar,
  faScroll,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Card from "../components/card";
import InfoModal from "../components/infomodal";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Section from "../components/section";

export default function Home() {
  const [modal1, setModal1] = useState(false);
  const closeModal1 = () => setModal1(false);
  const openModal1 = () => setModal1(true);

  const [modal2, setModal2] = useState(false);
  const closeModal2 = () => setModal2(false);
  const openModal2 = () => setModal2(true);

  const [modal3, setModal3] = useState(false);
  const closeModal3 = () => setModal3(false);
  const openModal3 = () => setModal3(true);

  const sweepLeft = {
    hidden: {
      x: "50vh",
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
      x: "-50vh",
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
  const sweepUp = {
    hidden: {
      y: "50vh",
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
        delay: 0.2,
      },
    },
  };
  const sweepDown = {
    hidden: {
      y: "-100vh",
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
        <title>ArightCo</title>
      </Head>
      <Intro />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepRight}
      >
        <Section
          title1={"THE PROBLEM"}
          title2={"Employee Churn | Lack Of Expertise"}
          text={
            "As a business leader, creating, managing, and facilitating in-house teams is time-consuming and extremely expensive."
          }
          blueBackground={false}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepLeft}
      >
        <div className="flex flex-col items-center md:items-stretch justify-center m-5 md:flex-row min-[1350px]:px-32 md:h-[40vh]">
          <Card
            title={"Retaining In-House Teams"}
            text={[
              "Companies are faced with the task of recruiting, training and retaining in-house finance and accounting resources.",
            ]}
            type={1}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
          </Card>

          <Card
            title={"Best Practices"}
            text={[
              "Many companies lack the expertise to ensure financial statements are being prepared in accordance with proper practices.",
            ]}
            type={1}
          >
            <FontAwesomeIcon icon={faBullseye} />
          </Card>

          <Card
            title={"Reporting Packages"}
            text={[
              "Most businesses do not have experience developing a comprehensive reporting package for investors.",
            ]}
            type={1}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
          </Card>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepRight}
      >
        <Section
          title1={"THE SOLUTION"}
          title2={"What We Do"}
          text={
            "ArightCo integrates into your organization, aiding with operations and alleviating pressure points, allowing business owners to concentrate efforts on big-picture business development."
          }
          blueBackground={false}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepLeft}
      >
        <div className="flex flex-col items-center justify-center m-5 mb-0 md:flex-row min-[1350px]:px-32 md:h-[40vh]">
          <Card
            title="Transactional Entry"
            text={[
              "Partner with an experienced company that has processed thousands of transactions for their clients while providing greater operational efficiency",
            ]}
            type={2}
          >
            <FontAwesomeIcon icon={faCreditCard} />
          </Card>
          <Card
            title="KPI Preparation"
            text={[
              "Create a KPI-driven culture and boost financial literacy across all of your teams",
            ]}
            type={2}
          >
            <FontAwesomeIcon icon={faChartSimple} />
          </Card>
          <Card
            title="Client Invoicing"
            text={[
              "If you don't invoice clients, how are you going to get paid? ArightCo ensures you can manage projects, bill clients, send invoices, and get paid",
            ]}
            type={2}
          >
            <FontAwesomeIcon icon={faChartPie} />
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center m-5 mt-0 md:flex-row min-[1350px]:px-32 md:h-[40vh] md:mt-10">
          <Card
            title="Budget Creation"
            text={[
              "Partner with an experienced company that has processed thousands of transactions for their clients while providing greater operational efficiency",
            ]}
            type={2}
          >
            <FontAwesomeIcon icon={faScroll} />
          </Card>
          <Card
            title="Cash Flow Planning"
            text={[
              "Create a KPI-driven culture and boost financial literacy across all of your teams",
            ]}
            type={2}
          >
            <FontAwesomeIcon icon={faComputer} />
          </Card>
          <Card
            title="Controller Services"
            text={[
              "If you don't invoice clients, how are you going to get paid? ArightCo ensures you can manage projects, bill clients, send invoices, and get paid",
            ]}
            type={2}
          >
            <FontAwesomeIcon icon={faShieldHalved} />
          </Card>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "700px 0px -700px 0px" }}
        variants={sweepDown}
      >
        <Section
          title1={"OUR VALUE PROPOSITION"}
          title2={"Why You Need Us"}
          text={
            "ArightCo teams add shareholder value, while allowing business owners to focus on what matters most."
          }
          blueBackground={true}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "700px 0px -700px 0px" }}
        variants={sweepDown}
        className="flex flex-col items-center md:items-stretch justify-center m-5 md:flex-row min-[1350px]:px-32 md:h-[40vh]"
      >
        <div className="flex flex-col items-center justify-center rounded-2xl shadow-md text-center p-5 m-3 gap-3 w-full h-full group bg-white md:-translate-y-32 md:h-96">
          <div className="w-[10vh] h-[10vh] text-blue group-hover:text-orange-dark">
            <FontAwesomeIcon icon={faSackDollar} />
          </div>
          <div className="text-blue-dark font-bold lg:text-2xl">
            Minimize Cost and Overhead
          </div>
          <div className="text-sm lg:text-base">
            <p>
              Cut expenses associated with hiring, managing, and retaining
              in-house teams. We provide better solutions at
              <span className="text-orange-dark font-bold">
                {" "}
                30-50% savings{" "}
              </span>
              of what it would cost to maintain these resources internally.
            </p>
          </div>
          <button
            className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-blue-dark hover:to-blue-light cursor-pointer"
            onClick={() => (modal1 ? closeModal1() : openModal1())}
          >
            LEARN MORE
          </button>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl shadow-md text-center p-5 m-3 gap-3 w-full h-full group bg-white md:-translate-y-32 md:h-96">
          <div className="w-[10vh] h-[10vh] text-blue group-hover:text-orange-dark">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="text-blue-dark font-bold lg:text-2xl">
            Streamlined Workflow
          </div>
          <div className="text-sm lg:text-base">
            <p>
              You can concentrate on core business areas and company growth,
              knowing you have
              <span className="text-orange-dark font-bold">
                {" "}
                a team of industry experts working with you{" "}
              </span>
              and others in your organization.
            </p>
          </div>
          <button
            className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-blue-dark hover:to-blue-light cursor-pointer"
            onClick={() => (modal2 ? closeModal2() : openModal2())}
          >
            LEARN MORE
          </button>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl shadow-md text-center p-5 m-3 gap-3 w-full h-full group bg-white md:-translate-y-32 md:h-96">
          <div className="w-[10vh] h-[10vh] text-blue group-hover:text-orange-dark">
            <FontAwesomeIcon icon={faFaceLaughBeam} />
          </div>
          <div className="text-blue-dark font-bold lg:text-2xl">
            One Point of Contact
          </div>
          <div className="text-sm lg:text-base">
            <p>
              Ensure ease of communication via our
              <span className="text-orange-dark font-bold">
                {" "}
                one point-of-contact{" "}
              </span>
              communication model, connecting you with a dedicated client
              partner with direct knowledge of operating within your industry.
            </p>
          </div>
          <button
            className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-blue-dark hover:to-blue-light cursor-pointer"
            onClick={() => (modal3 ? closeModal3() : openModal3())}
          >
            LEARN MORE
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {modal1 && (
          <InfoModal
            handleClose={closeModal1}
            content={[
              "Minimize Cost and Overhead",
              "By partnering with ArightCo, your business eliminates the time-consuming and expensive process of hiring, onboarding, training, and retaining employees. You can concentrate on core business areas and company growth, knowing you have a team of industry experts working with you and others in your organization",
            ]}
          />
        )}
        {modal2 && (
          <InfoModal
            handleClose={closeModal2}
            content={[
              "Streamlined Workflow",
              "Take advantage of ArightCo’s team of seasoned industry professionals, including CPAs, MBAs, and CAs. Our team has knowledge & experience ranging from transactional accounting and financial modeling to company incorporation and equity financing. As your trusted financial partner, we work with you every step of the way",
            ]}
          />
        )}
        {modal3 && (
          <InfoModal
            handleClose={closeModal3}
            content={[
              "One Point of Contact",
              "Our team of professionals will craft and execute a back-office solution tailored to your unique business goals",
            ]}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
