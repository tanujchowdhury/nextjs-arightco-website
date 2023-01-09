import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import QuoteModal from "./quotemodal";
import PricingModal from "./pricingmodal";

export default function Intro({}) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);

  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const closePricingModal = () => setPricingModalOpen(false);
  const openPricingModal = () => setPricingModalOpen(true);

  return (
    <>
      <div className="py-36 bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center lg:flex-row px-3 min-[1350px]:px-32 ">
        <motion.div
          className="text-center text-white lg:basis-1/2 lg:text-left"
          initial={{ x: "-100%", opacity: 1 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            mass: 0.5,
            damping: 10,
          }}
        >
          <div className="text-orange font-semibold p-3">
            WELCOME TO ARIGHTCO
          </div>
          <div className="text-3xl p-3 md:text-5xl">
            Full-Service
            <br /> Finance & Accounting Solutions
          </div>
          <div className="p-3 max-w-lg mx-auto lg:mx-0">
            Reduce costs and give your business predictability with ArightCo’s
            integrated Finance, Accounting, & Advisory teams.
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center py-5 lg:justify-start gap-5">
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
                LET&apos;S TALK
              </button>
            </div>
          </div>
          <div className="text-sm p-3">Business Optimization Starts Here</div>
        </motion.div>
        <motion.div
          initial={{ x: "122%", opacity: 1 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            mass: 0.5,
            damping: 10,
          }}
          className="mx-5 w-[50vh] h-[25vh] sm:w-[80vh] sm:h-[50vh] mt-20 lg:mt-5 lg:w-[60vh] lg:h-[60vh] lg:basis-1/2 py-10 relative"
        >
          <Image
            src="/thumbnail.jpg"
            alt="ArightCo Thumbnail"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
        {pricingModalOpen && <PricingModal handleClose={closePricingModal} />}
      </AnimatePresence>
    </>
  );
}
