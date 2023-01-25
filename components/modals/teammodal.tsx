import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function TeamModal({
  handleClose,
  name,
  title,
  src,
  text,
  href,
}: {
  handleClose: React.MouseEventHandler;
  name: string;
  title: string;
  src: string;
  text: string;
  href: string;
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
        className="w-11/12 min-[763px]:w-[700px] min-[1400px]:w-1/2 min-h-[50%] min m-auto p-3 rounded-xl bg-gradient-to-br from-blue to-blue-light"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-row-reverse text-white">
          <button onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:text-orange-dark"
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
          <div className="text-2xl font-bold text-white">{name}</div>
          <div className="py-5 px-3 text-gray-light">{title}</div>
          <Image
            src={src}
            alt={name + " profile pic"}
            height={200}
            width={200}
            className="object-cover rounded-full"
          />
          <div className="py-5 px-3 text-white">{text}</div>
          <motion.div className="text-white hover:text-orange hover:-translate-y-2 duration-300 w-6 h-6">
            <Link href={href} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Backdrop>
  );
}
