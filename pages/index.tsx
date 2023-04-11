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
import { motion } from "framer-motion";
import Head from "next/head";
import Card from "../components/cards/card";
import { InfoCard } from "../components/cards/infocard";
import Intro from "../components/sections/intro";
import Layout from "../components/layouts/layout";
import RecentArticles from "../components/sections/recentarticles";
import Section from "../components/sections/section";
import TestimonialCarousel from "../components/carousels/testimonialcarousel";
import { sweepDown, sweepLeft, sweepRight } from "../components/animations";
import Link from "next/link";
import CaseStudyCard from "../components/cards/casestudycard";
import ArticleCard from "../components/cards/articlecard";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ArightCo | Full Service Finance & Accounting Solutions</title>
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
          type={1}
        />
      </motion.div>

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
          type={1}
        />
      </motion.div>

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
      <div className="flex flex-col items-center justify-center mx-5 mt-0 md:flex-row min-[1350px]:px-32 md:h-[40vh] md:mt-10 mb-10">
        <Card
          title="Budget Creation"
          text={[
            "ArightCo's budget creation services will give your business predictability, tracking & monitoring your organization's progress",
          ]}
          type={2}
        >
          <FontAwesomeIcon icon={faScroll} />
        </Card>
        <Card
          title="Cash Flow Planning"
          text={[
            "Without a viable cash flow plan, it's easy to lose track of capital flows over time, which leads to investment mistakes. Identify future income, expenses, and major expenditures",
          ]}
          type={2}
        >
          <FontAwesomeIcon icon={faComputer} />
        </Card>
        <Card
          title="Controller Services"
          text={[
            "ArightCo controllers provide critical oversight and account management, ensuring policies and procedures are implemented and accurate financials are produced",
          ]}
          type={2}
        >
          <FontAwesomeIcon icon={faShieldHalved} />
        </Card>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepDown}
      >
        <Section
          title1={"OUR VALUE PROPOSITION"}
          title2={"Why You Need Us"}
          text={
            "ArightCo teams add shareholder value, while allowing business owners to focus on what matters most."
          }
          type={2}
        />
      </motion.div>
      <div className="flex flex-col items-center md:items-stretch justify-center m-5 md:flex-row min-[1350px]:px-32">
        <InfoCard
          icon={<FontAwesomeIcon icon={faSackDollar} />}
          title={"Minimize Cost and Overhead"}
          text={[
            "Cut expenses associated with hiring, managing, and retaining in-house teams. We provide better solutions at",
            "30-50% savings",
            "of what it would cost to maintain these resources internally.",
          ]}
          infoModalContent={[
            "Minimize Cost and Overhead",
            "By partnering with ArightCo, your business eliminates the time-consuming and expensive process of hiring, onboarding, training, and retaining employees. You can concentrate on core business areas and company growth, knowing you have a team of industry experts working with you and others in your organization",
          ]}
        />

        <InfoCard
          icon={<FontAwesomeIcon icon={faChartLine} />}
          title={"Streamlined Workflow"}
          text={[
            "You can concentrate on core business areas and company growth, knowing you have",
            "a team of industry experts working with you",
            "and others in your organization.",
          ]}
          infoModalContent={[
            "Streamlined Workflow",
            "Take advantage of ArightCo’s team of seasoned industry professionals, including CPAs, MBAs, and CAs. Our team has knowledge & experience ranging from transactional accounting and financial modeling to company incorporation and equity financing. As your trusted financial partner, we work with you every step of the way",
          ]}
        />

        <InfoCard
          icon={<FontAwesomeIcon icon={faFaceLaughBeam} />}
          title={"One Point of Contact"}
          text={[
            "Ensure ease of communication via our",
            "one point-of-contact",
            "communication model, connecting you with a dedicated client partner with direct knowledge of operating within your industry.",
          ]}
          infoModalContent={[
            "One Point of Contact",
            "Our team of professionals will craft and execute a back-office solution tailored to your unique business goals",
          ]}
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepRight}
      >
        <Section
          title1="TESTIMONIALS"
          title2="What They Say"
          text="A reputation for delivering"
          type={1}
        />
        <TestimonialCarousel />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepLeft}
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mx-10 mt-20 min-[1350px]:mx-32">
          <div className="text-center md:text-start">
            <div className="text-orange font-semibold">Blog Spot</div>
            <div className="text-blue-dark text-2xl py-3 md:text-4xl lg:text-5xl font-bold">
              Latest Posts
            </div>
          </div>
          <div className="mx-2">
            <Link href="/blog">
              <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">
                More Articles
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
      <RecentArticles>
        <ArticleCard
          src={"/blog/tech-startup-financial-services.png"}
          href={"/blog/tech-startup-financial-services"}
          title={"So, Your Tech Start-Up Needs Fractional Financial Services"}
          date={"April 11, 2023"}
        />
        <ArticleCard
          src={"/blog/from-risk-to-reward.png"}
          title={
            "From Risk to Reward: 4 Ways to Mitigate Your Start-Up's Financial Risks"
          }
          href={"/blog/from-risk-to-reward"}
          date={"April 6, 2023"}
        />
        <ArticleCard
          src={
            "/blog/you-should-leverage-outsourced-cfo-services-to-achieve-business-goals.jpg"
          }
          href={
            "/blog/you-should-leverage-outsourced-cfo-services-to-achieve-business-goals"
          }
          title={
            "You Should Leverage Outsourced CFO Services to Achieve Business Goals"
          }
          date={"February 3, 2023"}
        />
      </RecentArticles>
    </Layout>
  );
}
