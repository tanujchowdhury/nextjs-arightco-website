import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import QuoteModal from "./modals/quotemodal";
import { Variant } from "../types";

export default function QuoteButton({
  className,
  buttonText,
  variants,
}: {
  className: string;
  buttonText: string;
  variants: Variant;
}) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);
  return (
    <>
      <motion.button
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={className}
        onClick={() => (quoteModalOpen ? closeQuoteModal() : openQuoteModal())}
      >
        {buttonText}
      </motion.button>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
      </AnimatePresence>
    </>
  );
}
