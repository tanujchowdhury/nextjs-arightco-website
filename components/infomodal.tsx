import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./backdrop";

export default function InfoModal({
  handleClose,
  content,
}: {
  handleClose: React.MouseEventHandler;
  content: string[]
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
        <div className="flex flex-row-reverse pr-8 text-white">
          <button onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10  hover:text-orange-dark"
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
            {content[0]}
          </div>
          <div className="pt-2 pb-5 px-10 md:px-32 text-white">
            {content[1]}
          </div>
          <div>
            <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">PRICING</button>
          </div>
          
        </div>
      </motion.div>
    </Backdrop>
  );
}