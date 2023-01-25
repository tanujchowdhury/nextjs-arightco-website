import { motion } from "framer-motion";
import Image from "next/image";

export default function SignUp({}) {
  const sweepUp = {
    hidden: {
      y: "10vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5,
        damping: 10,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sweepUp}
      className="bg-blue-lightest py-32"
    >
      <div className="w-11/12 max-w-lg mx-auto rounded-lg flex flex-col justify-center items-center gap-5 relative overflow-hidden">
        <Image
          src={"/typing.png"}
          alt={"Typing image"}
          fill
          className="object-cover"
          priority
        />
        <div className="font-bold text-white text-xl mt-10 z-10">
          NEWSLETTER SIGNUP
        </div>
        <div className="text-white text-medium text-center px-3 z-10">
          Stay up-to-date on industry news and ArightCo offerings
        </div>
        <form
          target="_blank"
          action="https://formsubmit.co/chowdhury.tanuj@gmail.com"
          method="POST"
          className="z-10"
        >
          <input type="hidden" name="_subject" value="New Subscriber!" />
          <div className="flex flex-col justify-center items-center gap-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full Name"
              name="Full Name"
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="companyname"
              type="text"
              placeholder="Company Name"
              name="Company Name"
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="industry"
              type="text"
              placeholder="Industry"
              name="Industry"
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="emailaddress"
              type="email"
              placeholder="Email Address"
              name="Email Address"
              required
            />

            <button
              className="h-10 w-40 rounded-full text-white font-bold bg-orange-dark hover:bg-blue-light my-5"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
