import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  iconVariant,
  nameVariant,
  sweepRight,
  titleVariant,
} from "../animations";
import { useState } from "react";
import TeamModal from "../modals/teammodal";

export default function TeamCard({
  src,
  name,
  title,
  href,
  text,
}: {
  src: string;
  name: string;
  title: string;
  href: string;
  text?: string;
}) {
  const [bio, setBio] = useState(false);
  const closeBio = () => setBio(false);
  const openBio = () => setBio(true);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepRight}
      >
        <motion.div
          initial="initial"
          whileHover="hover"
          className="mx-3 relative flex flex-col items-center justify-center rounded-3xl m-5 cursor-pointer"
          onClick={() => (bio ? closeBio() : openBio())}
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
            className="absolute text-gray-light bottom-3 text-sm text-center"
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
      </motion.div>
      <AnimatePresence>
        {bio && (
          <TeamModal
            handleClose={closeBio}
            name={name}
            title={title}
            src={src}
            text={text}
            href={href}
          />
        )}
      </AnimatePresence>
    </>
  );
}
