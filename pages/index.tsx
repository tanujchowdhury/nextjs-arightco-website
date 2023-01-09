import {
  faBullseye,
  faChartPie,
  faChartSimple,
  faCircle,
  faComputer,
  faCreditCard,
  faLayerGroup,
  faPeopleGroup,
  faScroll,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Head from "next/head";
import Card from "../components/card";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Section from "../components/section";

export default function Home() {
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
        damping: "50",
        stiffness: "200",
        duration: 2,
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
        damping: "50",
        stiffness: "200",
        duration: 2,
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
        damping: "50",
        stiffness: "200",
        duration: 2,
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
        damping: "50",
        stiffness: "200",
        duration: 2,
        delay: .5,
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
            text={
              "Companies are faced with the task of recruiting, training and retaining in-house finance and accounting resources."
            }
            type={1}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
          </Card>

          <Card
            title={"Best Practices"}
            text={
              "Many companies lack the expertise to ensure financial statements are being prepared in accordance with proper practices."
            }
            type={1}
          >
            <FontAwesomeIcon icon={faBullseye} />
          </Card>

          <Card
            title={"Reporting Packages"}
            text={
              "Most businesses do not have experience developing a comprehensive reporting package for investors."
            }
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
            text="Partner with an experienced company that has processed thousands of transactions for their clients while providing greater operational efficiency"
            type={2}
          >
            <FontAwesomeIcon icon={faCreditCard} />
          </Card>
          <Card
            title="KPI Preparation"
            text="Create a KPI-driven culture and boost financial literacy across all of your teams"
            type={2}
          >
            <FontAwesomeIcon icon={faChartSimple} />
          </Card>
          <Card
            title="Client Invoicing"
            text="If you don't invoice clients, how are you going to get paid? ArightCo ensures you can manage projects, bill clients, send invoices, and get paid"
            type={2}
          >
            <FontAwesomeIcon icon={faChartPie} />
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center m-5 mt-0 md:flex-row min-[1350px]:px-32 md:h-[40vh] md:mt-10">
          <Card
            title="Budget Creation"
            text="Partner with an experienced company that has processed thousands of transactions for their clients while providing greater operational efficiency"
            type={2}
          >
            <FontAwesomeIcon icon={faScroll} />
          </Card>
          <Card
            title="Cash Flow Planning"
            text="Create a KPI-driven culture and boost financial literacy across all of your teams"
            type={2}
          >
            <FontAwesomeIcon icon={faComputer} />
          </Card>
          <Card
            title="Controller Services"
            text="If you don't invoice clients, how are you going to get paid? ArightCo ensures you can manage projects, bill clients, send invoices, and get paid"
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
        <motion.div></motion.div>
      </motion.div>
    </Layout>
  );
}
