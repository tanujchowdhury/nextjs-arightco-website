import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Backdrop from "./backdrop";

export default function PricingModal({
  handleClose,
}: {
  handleClose: React.MouseEventHandler;
}) {
  const [transactions, setTransactions] = useState("200");

  console.log("Transactions: ", transactions);

  const result = Math.max(
    Math.trunc(3.0225 * parseInt(transactions) + 465),
    750
  );

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
            Pricing Estimate
          </div>
          <div className="pt-2 pb-5 px-3 text-white">Get a Quote Now</div>
          <div className="pt-2 pb-5 px-3 text-white">
            Get a quote based on the number of your monthly transactions. <br />
            Our minimum price is $750.
          </div>
          <form>
            <div className="flex flex-col justify-center items-center gap-3">
              <div>
                <label
                  className="text-gray-light self-start"
                  htmlFor="transactions"
                >
                  Transactions:&nbsp;&nbsp;
                </label>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="transactions"
                  type="number"
                  placeholder="1000"
                  name="transactions"
                  value={transactions}
                  onChange={({ target }) => setTransactions(target.value)}
                />
              </div>
              {result ? (
                <div className="m-5 p-3 text-xl text-white border-4 border-orange-dark rounded-xl">
                  Estimated Monthly Payment: ${result}
                </div>
              ) : (
                <div className="m-5 p-3 text-xl text-white border-4 border-orange-light rounded-xl">
                  Please enter a number
                </div>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </Backdrop>
  );
}
