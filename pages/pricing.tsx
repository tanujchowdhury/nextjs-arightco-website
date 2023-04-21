import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layouts/layout";
import PricingModel from "../components/sections/pricingmodel";
import EstimateModal from "../components/modals/estimatemodal";
import { AnimatePresence, motion } from "framer-motion";
import ServiceCard from "../components/cards/servicecard";
import { sweepLeft, sweepRight } from "../components/animations";

export default function Pricing() {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const closeEstimateModal = () => setEstimateModalOpen(false);
  const openEstimateModal = () => setEstimateModalOpen(true);

  return (
    <Layout backToTopButtonStartPosition={700} backToTopButtonTarget={400}>
      <Head>
        <title>Pricing | Finance & Accounting Solutions | ArightCo</title>
      </Head>
      <div className="py-32 lg:py-44 xl:py-52  bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center justify-center text-white lg:flex-row px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
          className="flex flex-col items-center justify-center lg:basis-1/2 lg:items-start"
        >
          <div className="flex flex-row items-center justify-center font-bold">
            <div className="pr-2 hover:text-orange-dark">
              <Link href="/">Home</Link>
            </div>
            <div className="w-3 h-5">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="pl-2 hover:text-orange-dark">Pricing</div>
          </div>

          <div className="text-6xl font-bold pt-6">Pricing</div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepLeft}
          className="flex flex-col items-center justify-center pt-10 lg:basis-1/2 lg:items-start"
        >
          <div className="pt-5 text-center lg:text-start lg:text-lg">
            Our pricing models are based on the industry in which you operate
            and the stage of growth your business is currently in. Each tier
            offers access to higher-level resources and increased manhours to
            ensure your specific needs are met. Our services offer endless
            scalability, growing with you
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-20 lg:flex-row">
        <Link href="#SAAS" scroll={false}>
          <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">
            SAAS
          </button>
        </Link>
        <Link href="#IT" scroll={false}>
          <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">
            IT
          </button>
        </Link>
        <Link href="#Manufacturing" scroll={false}>
          <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">
            MANUFACTURING
          </button>
        </Link>
        <Link href="#Non-Profit" scroll={false}>
          <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">
            NON-PROFIT
          </button>
        </Link>
        <button
          onClick={() =>
            estimateModalOpen ? closeEstimateModal() : openEstimateModal()
          }
          className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer"
        >
          OTHERS
        </button>
      </div>
      <PricingModel
        title={"SAAS"}
        services={[
          "Transactional Entry",
          "Monthly Financial Statement & KPI Preparation",
          "Client Invoicing",
          "Vendor Payments",
          "Budget Creation",
          "Cash Flow Planning",
          "Controller Services",
        ]}
        plans={3}
        planinfo={[
          ["Seed Round", "$3,000+/month"],
          ["Series A", "$5,000+/month"],
          ["Series B", "Custom Pricing"],
        ]}
      />

      <PricingModel
        title={"IT"}
        services={[
          "Transactional Entry",
          "Monthly Financial Statement & KPI Preparation",
          "Client Invoicing",
          "Vendor Payments",
          "Budget Creation",
          "Cash Flow Planning",
          "Controller Services",
        ]}
        plans={4}
        planinfo={[
          ["Headcount 0-9", "$2,500+/month"],
          ["Headcount 10-19", "$3,500+/month"],
          ["Headcount 20-49", "$5,000+/month"],
          ["Headcount 50+", "Custom Pricing"],
        ]}
      />
      <PricingModel
        title={"Manufacturing"}
        services={[
          "Transactional Entry",
          "Financial Statements & KPI Prep",
          "Budget Creation | Cash Flow Planning",
          "Invoicing | Vendor Payments",
          "Controller Services",
          "Payroll Services",
          "Inventory Reconciliation",
        ]}
        plans={3}
        planinfo={[
          ["Base", "$2,500+/month"],
          ["Pro", "$5,000+/month"],
          ["Premium", "Custom Pricing"],
        ]}
      />

      <PricingModel
        title={"Non-Profit"}
        services={[
          "Transactional Entry",
          "Payroll",
          "Cash Flow Planning",
          "Invoicing | Vendor Payments",
          "990 Prep",
          "Audit Assistance",
          "Functional Areas Tracking | Grant Tracking",
        ]}
        plans={3}
        planinfo={[
          ["Starter", "$2,500+/month"],
          ["Starter Plus", "$5,000+/month"],
          ["Complex", "$8,000+/month"],
        ]}
      />

      <div className="flex flex-col items-center justify-center gap-4 pt-20">
        <div className="text-sm text-orange-dark font-bold">SERVICES</div>
        <div className="text-2xl md:text-4xl lg:text-5xl text-blue font-bold">
          Additional Services
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4 px-3 xl:px-10">
          <ServiceCard
            title={"Financial Services"}
            content={[
              "Financial Scenario Modeling",
              "Cash Flow Forecasting",
              "Audit Preparation Services",
              "Custom Solutions",
            ]}
          />
          <ServiceCard
            title={"Human Resources"}
            content={[
              "Employee Handbook",
              "Sexual Harassment Training",
              "Compliance & State Posters",
              "Benefits Management",
            ]}
          />
          <ServiceCard
            title={"Operational Services"}
            content={[
              "Business Support",
              "System Implementation",
              "Process flow mapping",
              "International Services",
            ]}
          />
          <ServiceCard
            title={"Strategic Advisory (CFO Services)"}
            content={[
              "Investor Financial Advisement",
              "Cap Table Modeling",
              "Board Level Deck Creation/Participation",
              "Due Diligence Preparation",
            ]}
          />
        </div>
      </div>

      <AnimatePresence>
        {estimateModalOpen && (
          <EstimateModal handleClose={closeEstimateModal} />
        )}
      </AnimatePresence>
    </Layout>
  );
}
