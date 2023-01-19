import { faAngleDown, faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ({ q, a }: { q: string; a: string }) {
  const [ans, setAns] = useState(false);
  const handleAns = () => setAns(!ans);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-5"
    >
      {!ans && (
        <motion.div
          onClick={handleAns}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-row items-center justify-between border-b p-5"
        >
          <div className="font-bold">{q}</div>
          <div>
            <FontAwesomeIcon icon={faArrowUpLong} className="w-6 h-6 block" />
          </div>
        </motion.div>
      )}

      {ans && (
        <motion.div
          onClick={handleAns}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-row items-center justify-between border-b p-5 bg-blue-dark text-white"
        >
          <div className="font-bold">{q}</div>
          <div>
            <FontAwesomeIcon icon={faArrowUpLong} className="w-6 h-6 block" />
          </div>
        </motion.div>
      )}
      <AnimatePresence>
        {ans && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5}}
            className="text-black p-5 bg-white"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
