import { motion } from "framer-motion";
import Link from "next/link";
import Backdrop from "./backdrop";
import { dropIn } from "../animations";

export default function InfoModal({
  handleClose,
  content,
}: {
  handleClose: React.MouseEventHandler;
  content: string[];
}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 min-[763px]:w-[700px] min-[1400px]:w-1/2 min-h-1/2 min m-auto px-0 py-8 rounded-xl bg-gradient-to-br from-blue to-blue-light overflow-auto"
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
          <div className="pt-5 text-2xl font-bold text-white">{content[0]}</div>
          <div className="pt-2 pb-5 px-10 md:px-32 text-white">
            {content[1]}
          </div>
          <div>
            <Link href="/pricing">
              <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">
                PRICING
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}
