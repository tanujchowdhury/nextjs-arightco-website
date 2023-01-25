import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTopButton() {
  const [button, setButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setButton(true);
      } else {
        setButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {button && (
        <div
          onClick={scrollUp}
          className="fixed bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-4 md:bottom-4 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-12 flex flex-row items-center justify-center text-xl text-orange bg-white hover:text-blue-light hover:bg-orange-light z-10 border border-orange rounded p-1 cursor-pointer"
        >
          <div className="hidden md:block">Top</div>
          <FontAwesomeIcon icon={faTurnUp} className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
