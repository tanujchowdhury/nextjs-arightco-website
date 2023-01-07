import {
  faBullseye,
  faCircle,
  faLayerGroup,
  faPeopleGroup,
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
      x: "100vh",
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
        variants={sweepLeft}
      >
        <Section
          title1={"THE PROBLEM"}
          title2={"Employee Churn | Lack Of Expertise"}
          text={
            "As a business leader, creating, managing, and facilitating in-house teams is time-consuming and extremely expensive."
          }
        />
        <div className="flex flex-col items-center justify-center m-5 md:flex-row min-[1350px]:px-32">
          <Card
            title={"Retaining In-House Teams"}
            text={
              "Companies are faced with the task of recruiting, training and retaining in-house finance and accounting resources."
            }
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
          </Card>

          <Card
            title={"Best Practices"}
            text={
              "Many companies lack the expertise to ensure financial statements are being prepared in accordance with proper practices."
            }
          >
            <FontAwesomeIcon icon={faBullseye} />
          </Card>

          <Card
            title={"Reporting Packages"}
            text={
              "Most businesses do not have experience developing a comprehensive reporting package for investors."
            }
          >
            <FontAwesomeIcon icon={faLayerGroup} />
          </Card>
        </div>
      </motion.div>
      <Section
          title1={"THE SOLUTION"}
          title2={"What We Do"}
          text={
            "ArightCo integrates into your organization, aiding with operations and alleviating pressure points, allowing business owners to concentrate efforts on big-picture business development."
          }
        />
    </Layout>
  );
}
