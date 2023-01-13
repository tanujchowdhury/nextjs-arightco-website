import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout";
import QuoteModal from "../components/quotemodal";
import TeamCard from "../components/teamcard";

export default function MeetOurTeam() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);
  return (
    <Layout>
      <Head>
        <title>Meet Our Team | Solutions for IT and SaaS | ArightCo</title>
      </Head>
      <div className="py-36 bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center lg:flex-row px-3 min-[1350px]:px-32">
        <div className="text-center text-white lg:basis-1/2 lg:text-left">
          <div className="text-orange font-semibold">OUR TEAM</div>
          <div className="text-white text-4xl py-3 md:py-10 md:text-5xl lg:text-6xl font-bold">
            Meet our Founders
          </div>
          <div className="text-white md:text-lg max-w-2xl">
            Sushama and Tanmoy Chowdhury founded ArightCo, Inc. in 2008 with a
            mission to provide outstanding customer service and professional
            quality finance & accounting solutiuons to small & medium sized
            businesses.
          </div>
          <div className="my-10">
            <button
              className="h-12 w-52 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer"
              onClick={() =>
                quoteModalOpen ? closeQuoteModal() : openQuoteModal()
              }
            >
              GET STARTED
            </button>
          </div>
        </div>
        <div className="lg:basis-1/4">
          <TeamCard
            src={"/team/Sushama-Chowdhury.png"}
            name={"Sushama Chowdhury"}
            title={"Co-Founder"}
            href={"https://www.linkedin.com/in/sushama-chowdhury-b7748b159/"}
          />
        </div>
        <div className="lg:basis-1/4">
          <TeamCard
            src={"/team/Tanmoy-Chowdhury.png"}
            name={"Tanmoy Chowdhury"}
            title={"Co-Founder"}
            href={"https://www.linkedin.com/in/tanmoychowdhury/"}
          />
        </div>
      </div>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
      </AnimatePresence>
    </Layout>
  );
}
