import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Backdrop from "./backdrop";

export default function QuoteModal({
  handleClose,
}: {
  handleClose: React.MouseEventHandler;
}) {

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 1000,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 min-[763px]:w-[700px] min-[1400px]:w-1/2 min-h-[50%] min m-auto px-0 py-8 rounded-xl bg-gradient-to-br from-blue to-blue-light"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-row-reverse pr-8 text-white hover:text-orange-dark">
          <button onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center text-center text-black">
          <div className="pt-5 text-2xl font-bold text-white">
            Get A Quote
          </div>
          <div className="pt-2 pb-5 px-3 text-white">
            Our Professionals Will Reach Out to Curate Your Tailored Solution
          </div>
          <form
            target="_blank"
            action="https://formsubmit.co/chowdhury.tanuj@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Quote Request!" />
            <div className="flex flex-col justify-center items-center gap-3">
              <div>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="fname"
                  type="text"
                  placeholder="Full Name"
                  name="fname"
                />
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  name="Email Address"
                  required
                />
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="Contact Number"
                  name="Contact Number"
                  required
                />
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="cname"
                  type="text"
                  placeholder="Company Name"
                  name="Company Name"
                />
              </div>
              <div>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="website"
                  type="text"
                  placeholder="Company Website"
                  name="Company Website"
                />
              </div>
              <div>
                <textarea
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  id="specs"
                  placeholder="Project Specifications"
                  name="Project Specifications"
                />
              </div>
              <button
                className="h-10 w-40 mt-5 rounded-full text-white font-bold bg-orange-dark hover:bg-blue-dark"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </Backdrop>
  );
}
