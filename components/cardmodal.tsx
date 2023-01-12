import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import InfoModal from "./infomodal";

export default function CardModal({
  icon,
  title,
  text,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  text: string[];
  children: React.ReactNode
}) {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl text-center p-5 m-3 gap-3 w-full h-full group bg-white md:-translate-y-32 md:h-96 drop-shadow-md hover:drop-shadow-xl">
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
      {children}
    </div>
  );
}
