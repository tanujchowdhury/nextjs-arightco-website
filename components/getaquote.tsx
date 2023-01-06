import { motion, AnimatePresence } from "framer-motion";
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
        stiffness: 500,
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
        className="w-11/12 min-[763px]:w-[700px] min-[1400px]:w-1/2 min-h-[50%] min m-auto px-0 py-8 rounded-xl flex flex-col items-center bg-gradient-to-br from-blue to-blue-light"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 absolute top-5 right-5 text-white hover:text-orange-dark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col justify-center items-center text-center gap-3 text-black">
          <div className="pt-5 text-2xl font-bold text-white">Get A Quote</div>
          <div className="pt-2 pb-5 text-white">
            Our Professionals Will Reach Out to Curate Your Tailored Solution
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fname"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="text"
              placeholder="Contact Number"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cname"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="website"
              type="text"
              placeholder="Company Website"
            />
          </div>
          <div>
            <textarea
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="specs"
              placeholder="Project Specifications"
            />
          </div>
        </div>
        <button
          className="h-10 w-40 mt-5 rounded-full text-white font-bold bg-orange-dark hover:bg-blue-dark"
          type="submit"
        >
          SUBMIT
        </button>
      </motion.div>
    </Backdrop>
  );
}
