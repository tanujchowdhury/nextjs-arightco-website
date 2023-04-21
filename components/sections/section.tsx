import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { sweepLeft, sweepRight } from "../animations";

export default function Section({
  title1,
  title2,
  text,
  linktext,
  type,
  href,
}: {
  title1: string;
  title2?: string;
  text?: string;
  type: number;
  linktext?: string;
  href?: string;
}) {
  if (type == 1)
    return (
      <div className="text-center py-10 px-2">
        <div className="text-orange font-semibold">{title1}</div>
        <div className="text-blue-dark text-2xl py-3 md:py-5 md:text-4xl lg:text-5xl font-bold">
          {title2}
        </div>
        <div className="text-gray-dark md:text-lg max-w-2xl mx-auto">
          {text}
        </div>
      </div>
    );

  if (type == 2)
    return (
      <div className="text-center py-10 px-2 bg-gradient-to-r from-blue to-blue-light md:py-32 lg:py-44">
        <div className="text-orange font-semibold">{title1}</div>
        <div className="text-white text-2xl py-3 md:py-5 md:text-4xl lg:text-5xl font-bold">
          {title2}
        </div>
        <div className="text-white md:text-lg max-w-2xl mx-auto">{text}</div>
      </div>
    );

  if (type == 3)
    return (
      <div className="py-32 lg:py-44 xl:py-52 bg-gradient-to-r from-blue-dark to-blue-light flex flex-col items-center justify-center text-white lg:flex-row px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
          className="flex flex-col items-center justify-center lg:basis-1/2 lg:items-start"
        >
          <div className="flex flex-row items-center justify-center font-bold">
            <div className="pr-2 hover:text-orange-dark">
              <Link href="/">Home</Link>
            </div>
            <div className="w-3 h-5">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="pl-2 hover:text-orange-dark">{title1}</div>
          </div>
          <div className="text-6xl font-bold pt-6 text-center">{title1}</div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepLeft}
          className="flex flex-col items-center justify-center pt-10 lg:basis-1/2 lg:items-start"
        >
          <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {title2}
          </div>
          <div className="pt-5 text-center lg:text-start lg:text-lg">
            {text}
            <Link href={href ? href : ""} className="hover:text-orange">
              <span>{linktext}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    );

  return <></>;
}
