import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { sweepRight } from "../animations";

export default function ArticleCard({
  src,
  href,
  title,
  date,
}: {
  src: string;
  href: string;
  title: string;
  date: string;
}) {
  //to make {title} wrap, add this to className: whitespace-nowrap text-ellipsis overflow-hidden
  return (
    <Link href={href}>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sweepRight}
       className="relative flex flex-col drop-shadow-sm transition duration-300 rounded-md hover:drop-shadow-xl bg-white group">
        <div className="w-full">
          <Image src={src} alt={title} width={500} height={281} className="rounded-t-md" />
        </div>
        <div className="absolute top-0 right-0 mt-2 mr-2 p-1 bg-orange rounded-full text-sm text-white">ARTICLE</div>
        <div className="basis-4/12 border-b-[1px]">
          <div className="text-xl font-bold text-blue p-3 pb-0 group-hover:text-orange-dark">{title}</div>
          <div className="text-sm font-bold text-orange-dark p-3">READ MORE...</div>
        </div>
        <div className="basis-1/12 text-sm p-2 pl-3">{date}</div>
      </motion.div>
    </Link>
  );
}