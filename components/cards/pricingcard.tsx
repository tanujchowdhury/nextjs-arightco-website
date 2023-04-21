import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import PricingModal from "../modals/pricingmodal";

export default function PricingCard({
  title,
  price,
  modalTitle,
  value,
}: {
  title: string;
  price: string;
  modalTitle: string;
  value: string;
}) {
  const [form, setForm] = useState(false);
  const closeForm = () => setForm(false);
  const openForm = () => setForm(true);
  return (
    <div className="flex flex-col items-center justify-center bg-white p-5 m-3 shadow-lg w-full gap-3">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-gray-dark">{price}</div>
      <button
        onClick={() => (form ? closeForm() : openForm())}
        className="bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark rounded-full text-white font-bold text-sm h-10 w-20"
      >
        SELECT
      </button>
      <AnimatePresence>
        {form && (
          <PricingModal
            handleClose={closeForm}
            title={modalTitle}
            value={value}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
