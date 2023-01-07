import { motion } from "framer-motion";
import internal from "stream";

export default function Card({
  children,
  title,
  text,
  type,
}: {
  children: React.ReactNode;
  title: string;
  text: string;
  type: number;
}) {
  if (type == 1) {
    return (
      <motion.div
        whileHover={{
          y: -20,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-col items-center justify-center rounded-lg shadow-md text-center p-5 m-5 gap-3 w-full h-full group hover:bg-gradient-to-r hover:from-blue hover:to-blue-light"
      >
        <div className="w-[10vh] h-[10vh] text-orange-dark group-hover:text-orange">
          {children}
        </div>
        <div className="text-blue-dark font-bold lg:text-2xl group-hover:text-white">
          {title}
        </div>
        <div className="text-sm lg:text-base group-hover:text-white">
          {text}
        </div>
      </motion.div>
    );
  }
  if (type == 2) {
    return (
      <motion.div
        whileHover={{
          y: -20,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-col items-start justify-start rounded-lg shadow-md p-5 m-5 w-full h-full group hover:bg-gradient-to-r hover:from-blue hover:to-blue-light"
      >
        <div className="w-[8vh] h-[8vh] text-orange-dark group-hover:text-orange pl-3">
          {children}
        </div>
        <div className="text-blue-dark font-bold lg:text-2xl group-hover:text-white pl-3 py-3">
          {title}
        </div>
        <div className="text-sm lg:text-base group-hover:text-white pl-3">
          {text}
        </div>
      </motion.div>
    );
  }
  if (type == 3) {
    return (
      <motion.div
        whileHover={{
          y: -20,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-col items-start justify-start rounded-lg shadow-md p-5 m-5 w-full h-full group hover:bg-gradient-to-r hover:from-blue hover:to-blue-light"
      >
        <div className="w-[8vh] h-[8vh] text-orange-dark group-hover:text-orange pl-3">
          {children}
        </div>
        <div className="text-blue-dark font-bold lg:text-2xl group-hover:text-white pl-3 py-3">
          {title}
        </div>
        <div className="text-sm lg:text-base group-hover:text-white pl-3">
          {text}
        </div>
        <div>
            <button ></button>
        </div>
      </motion.div>
    );
  }
  return <></>;
}
