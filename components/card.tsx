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
  text: string[];
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
          {text[0]}
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
          {text[0]}
        </div>
      </motion.div>
    );
  }
  if (type == 3) {
    return (
      <motion.div
        transition={{
          duration: 0.2,
        }}
        className="flex flex-col items-center justify-center rounded-lg shadow-md text-center p-5 m-1 gap-3 w-full h-full group bg-white md:-translate-y-32 md:h-96"
      >
        <div className="w-[10vh] h-[10vh] text-blue group-hover:text-orange-dark">
          {children}
        </div>
        <div className="text-blue-dark font-bold lg:text-2xl">{title}</div>
        <div className="text-sm lg:text-base">
          <p>
            {text[0]}
            <span className="text-orange-dark font-bold">{text[1]}</span>
            {text[2]}
          </p>
        </div>
        <button className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-blue-dark hover:to-blue-light cursor-pointer">
          LEARN MORE
        </button>
      </motion.div>
    );
  }
  return <></>;
}
