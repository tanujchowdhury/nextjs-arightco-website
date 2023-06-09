import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PricingModal from "../modals/pricingmodal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PricingCard({
  title,
  price,
  modalTitle,
  value,
  services,
  delay,
}: {
  title: string;
  price: string;
  modalTitle: string;
  value: string;
  services: string[];
  delay: number;
}) {
  const [form, setForm] = useState(false);
  const closeForm = () => setForm(false);
  const openForm = () => setForm(true);

  const variants = {
    hidden: { opacity: 0, x: -50, y: -20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { delay: delay } },
  };

  return (
    <>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <div className="flex flex-col items-stretch bg-gray-lightest p-3 shadow w-full rounded-lg h-[500px] hover:shadow-xl hover:bg-white">
          <div className="text-lg font-bold text-white bg-blue-dark text-center py-2 rounded">
            {title}
          </div>
          <div className="text-xl font-semibold text-blue-dark text-center my-2">
            {price}
          </div>
          <div className="border-b border-gray-dark pb-2" />

          <div className="flex-grow overflow-auto gap-4 flex flex-col mt-5">
            {services.map((service: string) => (
              <div
                key={service}
                className="pl-4 text-gray-700 text-md flex items-start"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="w-6 h-6 block mr-2 flex-shrink-0"
                />{" "}
                <p>{service}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => (form ? closeForm() : openForm())}
            className="self-center mt-4 bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark rounded-full text-white font-bold text-sm h-10 w-32 transition-colors duration-200"
          >
            SELECT
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {form && (
          <PricingModal
            handleClose={closeForm}
            title={modalTitle}
            value={value}
          />
        )}
      </AnimatePresence>
    </>
  );
}
