import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import QuoteModal from "./quotemodal";
import PricingModal from "./pricingmodal";
import VideoModal from "./videomodal";

export default function Intro({}) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);

  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const closePricingModal = () => setPricingModalOpen(false);
  const openPricingModal = () => setPricingModalOpen(true);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const closeVideoModal = () => setVideoModalOpen(false);
  const openVideoModal = () => setVideoModalOpen(true);

  return (
    <>
      <div className="py-36 bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center lg:flex-row px-3 min-[1350px]:px-32">
        <motion.div
          className="text-center text-white lg:basis-1/2 lg:text-left"
          initial={{ x: "-100%", opacity: 0 }}
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
          initial={{ x: "122%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            mass: 0.5,
            damping: 10,
          }}
          className="cursor-pointer group"
          onClick={() =>
            videoModalOpen ? closeVideoModal() : openVideoModal()}
        >
          <Image
            src="/thumbnail.jpg"
            alt="ArightCo Thumbnail"
            width={800}
            height={800}
            className="object-cover rounded-3xl"
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-1/2 h-1/2 absolute top-1/4 right-1/4 text-orange-dark group-hover:text-orange"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 1.5}}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </motion.svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
        {pricingModalOpen && <PricingModal handleClose={closePricingModal} />}
        {videoModalOpen && <VideoModal handleClose={closeVideoModal} />}
      </AnimatePresence>
    </>
  );
}
