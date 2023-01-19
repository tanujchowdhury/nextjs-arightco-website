import { motion } from "framer-motion";
import Backdrop from "./backdrop";

export default function QuoteModal({
  handleClose,
}: {
  handleClose: React.MouseEventHandler;
}) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 1000,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 min-[763px]:w-[700px] min-[1400px]:w-1/2 min-h-1/2 max-h-full min m-auto px-0 py-8 rounded-xl bg-gradient-to-br from-blue to-blue-light overflow-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-row-reverse pr-8 text-white">
          <button onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:text-orange-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center text-center text-black">
          <div className="text-2xl font-bold text-white">Contact Us</div>
          <div className="pt-2 pb-5 px-3 text-white">
            Our Professionals Will Reach Out to Curate Your Tailored Solution
          </div>
          <form
            target="_blank"
            action="https://formsubmit.co/chowdhury.tanuj@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Quote Request!" />
            <div className="grid md:grid-cols-2 gap-4 md:pt-7">
              <input
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="fullname"
                type="text"
                placeholder="Name"
                name="Name"
              />

              <input
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="email"
                type="email"
                placeholder="Email"
                name="Email"
                required
              />

              <input
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="number"
                type="text"
                placeholder="Phone Number"
                name="Phone Number"
                required
              />

              <input
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="cname"
                type="text"
                placeholder="Company Name"
                name="Company Name"
              />

              <input
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest md:col-span-2"
                id="website"
                type="text"
                placeholder="Company Website Link"
                name="Company Website Link"
              />

              <input
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest md:col-span-2"
                id="subject"
                type="text"
                placeholder="Subject"
                name="Subject"
              />

              <textarea
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline resize-y bg-blue-lightest md:col-span-2"
                id="message"
                placeholder="Message"
                name="Message"
                rows={4}
              />

              <button
                className="h-10 mt-5 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange  hover:bg-blue-dark md:col-span-2"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </Backdrop>
  );
}
