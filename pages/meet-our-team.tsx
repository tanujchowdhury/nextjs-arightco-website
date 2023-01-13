import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout";
import QuoteModal from "../components/quotemodal";
import TeamCard from "../components/teamcard";
import TeamModal from "../components/teammodal";
import PricingModal from "../components/pricingmodal";

export default function MeetOurTeam() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);

  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const closePricingModal = () => setPricingModalOpen(false);
  const openPricingModal = () => setPricingModalOpen(true);

  const [sushamaModalOpen, setSushamaModalOpen] = useState(false);
  const closeSushamaModal = () => setSushamaModalOpen(false);
  const openSushamaModal = () => setSushamaModalOpen(true);

  const [tanmoyModalOpen, setTanmoyModalOpen] = useState(false);
  const closeTanmoyModal = () => setTanmoyModalOpen(false);
  const openTanmoyModal = () => setTanmoyModalOpen(true);

  return (
    <Layout>
      <Head>
        <title>Meet Our Team | Solutions for IT and SaaS | ArightCo</title>
      </Head>
      <div className="py-36 bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center justify-center lg:flex-row px-3 min-[1350px]:px-32">
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
        <div
          className="lg:basis-1/4 lg:ml-10 cursor-pointer"
          onClick={() =>
            sushamaModalOpen ? closeSushamaModal() : openSushamaModal()
          }
        >
          <TeamCard
            src={"/team/Sushama-Chowdhury.png"}
            name={"Sushama Chowdhury"}
            title={"Co-Founder"}
            href={"https://www.linkedin.com/in/sushama-chowdhury-b7748b159/"}
            type={1}
          />
        </div>
        <div
          className="lg:basis-1/4 cursor-pointer"
          onClick={() =>
            tanmoyModalOpen ? closeTanmoyModal() : openTanmoyModal()
          }
        >
          <TeamCard
            src={"/team/Tanmoy-Chowdhury.png"}
            name={"Tanmoy Chowdhury"}
            title={"Co-Founder"}
            href={"https://www.linkedin.com/in/tanmoychowdhury/"}
            type={1}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row xl:mx-24 my-24">
        <div className="text-center p-10 lg:basis-2/5 lg:text-start lg:order-4">
          <div className="text-orange font-semibold">LEADERSHIP</div>
          <div className="text-blue-dark text-2xl py-3 md:py-5 md:text-4xl lg:text-5xl font-bold">
            Meet The Team
          </div>
          <div className="text-gray-dark md:text-lg max-w-2xl mx-auto">
            ArightCo’s leadership team combines decades of experience to deliver
            financial expertise to our clients, with fluency in every aspect of
            back-office operations.
          </div>
        </div>
        <div className="lg:basis-1/5">
          <TeamCard
            src={"/team/Katie-Nelson.png"}
            name={"Katie Nelson"}
            title={"Sr Vice President"}
            href={"https://www.linkedin.com/in/katie-nelson-finance/"}
            type={1}
          />
        </div>
        <div className="lg:basis-1/5">
          <TeamCard
            src={"/team/Biju-Mathew.png"}
            name={"Biju Mathew"}
            title={"Sr Client Partner"}
            href={"https://www.linkedin.com/in/biju-mathew-b9988639/"}
            type={1}
          />
        </div>
        <div className="lg:basis-1/5">
          <TeamCard
            src={"/team/Thomas-Stier.png"}
            name={"Thomas Stier"}
            title={"Sr Client Partner and Executive Consultant"}
            href={"https://www.linkedin.com/in/thomas-stier-cpa-cgma-b32626/"}
            type={2}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-white bg-gradient-to-r from-blue-dark to-blue-light m-3 px-3 py-6 rounded-xl gap-6 sm:mx-16 sm:mx-24 lg:mx-32 xl:mx-44">
        <div className="text-3xl font-bold">Let's Find a Solution</div>
        <div className="mx-1">
          Have any questions for us? Reach out here and you will receive a
          prompt response from an ArightCo team member.
        </div>
        <div className="flex flex-row">
          <div className="mx-2">
            <button
              className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer"
              onClick={() =>
                pricingModalOpen ? closePricingModal() : openPricingModal()
              }
            >
              PRICING
            </button>
          </div>

          <div className="mx-2">
            <button
              className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-blue-dark to-blue-light hover:from-blue-light hover:to-blue-dark cursor-pointer"
              onClick={() =>
                quoteModalOpen ? closeQuoteModal() : openQuoteModal()
              }
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
        {pricingModalOpen && <PricingModal handleClose={closePricingModal} />}
        {sushamaModalOpen && (
          <TeamModal
            handleClose={closeSushamaModal}
            name={"Sushama Chowdhury"}
            title={"CO-FOUNDER"}
            src={"/team/Sushama-Chowdhury.png"}
            text={
              "Sushama Chowdhury has 20+ years experience in finance and accounting functions, mainly in a Controller position. She is conversant with every area of Accounting, from company set up to dissolution. Sushama founded ArightCo in 2009 and has since expanded the company to around 50 employees, maintaining consistent profits while growing every year."
            }
            href={"https://www.linkedin.com/in/sushama-chowdhury-b7748b159/"}
          />
        )}
        {tanmoyModalOpen && (
          <TeamModal
            handleClose={closeTanmoyModal}
            name={"Tanmoy Chowdhury"}
            title={"CO-FOUNDER"}
            src={"/team/Tanmoy-Chowdhury.png"}
            text={
              "Tanmoy Chowdhury is a seasoned Finance Executive with 25+ years experience in providing financial expertise to a wide variety of companies in technology and related sectors. Tanmoy has been involved in multiple M&A activities and is an advisor to several clients. He is the co-founder of ArightCo, along with Sushama Chowdhury."
            }
            href={"https://www.linkedin.com/in/tanmoychowdhury/"}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
