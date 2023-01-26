import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { sweepDown } from "../animations";
import InfoModal from "../modals/infomodal";

export function InfoCard({
  icon,
  title,
  text,
  infoModalContent,
}: {
  icon: React.ReactNode;
  title: string;
  text: string[];
  infoModalContent: string[];
}) {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepDown}
        className="flex flex-col items-center justify-between rounded-2xl text-center bg-white p-5 m-3 shadow-md hover:shadow-xl w-full gap-3 group md:h-96"
      >
        <div className="w-[10vh] h-[10vh] text-blue group-hover:text-orange-dark">
          {icon}
        </div>
        <div className="text-blue-dark font-bold lg:text-2xl">{title}</div>
        <div className="text-sm lg:text-base">
          <p>
            {text[0]}
            <span className="text-orange-dark font-bold"> {text[1]} </span>
            {text[2]}
          </p>
        </div>
        <button
          className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-blue-dark hover:to-blue-light cursor-pointer"
          onClick={() => (modal ? closeModal() : openModal())}
        >
          LEARN MORE
        </button>
      </motion.div>
      <AnimatePresence>
        {modal && (
          <InfoModal handleClose={closeModal} content={infoModalContent} />
        )}
      </AnimatePresence>
    </>
  );
}
