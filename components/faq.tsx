import { faAngleDown, faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ({ q, a }: { q: string; a: string }) {
  const [ans, setAns] = useState(false);
  const handleAns = () => setAns(!ans);

  return (
    <motion.div className="p-5">
      <div
        onClick={handleAns}
        className={
          ans
            ? "flex flex-row items-center justify-between border-b cursor-pointer rounded-t-xl p-5 md:text-xl bg-blue-dark text-white"
            : "flex flex-row items-center justify-between border-b cursor-pointer rounded-t-xl p-5 md:text-xl"
        }
      >
        <div className="font-bold">{q}</div>
        <div>
          {ans ? (
            <FontAwesomeIcon icon={faArrowUpLong} className="w-6 h-6 block" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} className="w-6 h-6 block" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {ans && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="text-black bg-white rounded-b-xl overflow-hidden px-5 md:text-lg"
          >
            <div className="pt-5"></div>
            {a}
            <div className="pb-5"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
