import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { iconVariant, nameVariant, titleVariant } from "../animations";

export default function TeamCard({
  src,
  name,
  title,
  href,
  type,
}: {
  src: string;
  name: string;
  title: string;
  href: string;
  type: number;
}) {

  if (type == 1) {
    return (
      <motion.div
        initial="initial"
        whileHover="hover"
        className="mx-3 relative flex flex-col items-center justify-center rounded-3xl m-5"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b-white-transparent rounded-3xl" />
        <Image
          src={src}
          alt={name + " profile picture"}
          width={300}
          height={300}
          className="object-cover rounded-3xl"
          quality={100}
        ></Image>
        <motion.div
          variants={nameVariant}
          className="absolute text-white font-bold bottom-12"
        >
          {name}
        </motion.div>
        <motion.div
          variants={titleVariant}
          className="absolute text-gray-light bottom-6 text-center"
        >
          {title}
        </motion.div>
        <motion.div
          variants={iconVariant}
          className="absolute text-white bottom-1 w-6 h-6 hover:text-blue-light"
        >
          <Link href={href} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </motion.div>
      </motion.div>
    );
  }
  if (type == 2) {
    return (
      <motion.div
        initial="initial"
        whileHover="hover"
        className="mx-3 relative flex flex-col items-center justify-center rounded-3xl overflow-hidden m-5"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b-white-transparent rounded-3xl" />
        <Image
          src={src}
          alt={name + " profile picture"}
          width={300}
          height={300}
          className="object-cover rounded-3xl"
          quality={100}
        ></Image>
        <motion.div
          variants={nameVariant}
          className="absolute text-white font-bold bottom-12"
        >
          {name}
        </motion.div>
        <motion.div
          variants={titleVariant}
          className="absolute text-gray-light bottom-3 text-center text-sm"
        >
          {title}
        </motion.div>
        <motion.div
          variants={iconVariant}
          className="absolute text-white bottom-1 w-6 h-6 hover:text-blue-light"
        >
          <Link href={href} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </motion.div>
      </motion.div>
    );
  }
  return <></>;
}
