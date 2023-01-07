import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import QuoteModal from "./getaquote";
import Section from "./section";

export default function Intro({}) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);

  const sweepRight = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        type: "spring",
        damping: "25",
        stiffness: "100",
        delay: 0.4,
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    },
  };
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
        damping: "25",
        stiffness: "100",
        delay: 0.4,
      },
    },
  };
  return (
    <>
      <div className="py-32 bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center lg:flex-row px-3 min-[1350px]:px-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sweepRight}
          className="text-center text-white basis-1/2 lg:text-left"
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
          <div className="flex flex-row justify-center items-center py-5 lg:justify-start">
            <div className="mx-2">
              <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark">
                <Link href="/pricing">PRICING</Link>
              </button>
            </div>

            <div className="mx-2">
              <button
                className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-blue-dark to-blue-light hover:from-blue-light hover:to-blue-dark cursor-pointer"
                onClick={() =>
                  quoteModalOpen ? closeQuoteModal() : openQuoteModal()
                }
              >
                LET'S TALK
              </button>
            </div>
          </div>
          <div className="text-sm p-3">Business Optimization Starts Here</div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sweepLeft}
          className="mx-auto h-[60vh] flex flex-col basis-1/2 items-center py-10"
        >
          <iframe
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/f_i_1Stcocs"
            title="ArightCo Welcome Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </motion.div>
      </div>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
      </AnimatePresence>
    </>
  );
}
