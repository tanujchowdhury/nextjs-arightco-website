import { motion } from "framer-motion";
import { sweepLeft } from "../animations";

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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepLeft}
        className="flex flex-col items-center justify-center rounded-2xl shadow-md text-center p-5 m-5 gap-3 w-full bg-white"
      >
        <div className="w-[10vh] h-[10vh] text-orange-dark">{children}</div>
        <div className="text-blue-dark font-bold lg:text-2xl">{title}</div>
        <div className="text-sm lg:text-base">{text[0]}</div>
      </motion.div>
    );
  }
  if (type == 2) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepLeft}
        className="flex flex-col items-start justify-start rounded-2xl shadow-md p-5 m-5 w-full bg-white"
      >
        <div className="w-[8vh] h-[8vh] text-orange-dark pl-3">{children}</div>
        <div className="text-blue-dark font-bold lg:text-2xl pl-3 py-3">
          {title}
        </div>
        <div className="text-sm lg:text-base pl-3">{text[0]}</div>
      </motion.div>
    );
  }
  return <></>;
}
