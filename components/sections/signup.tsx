import { motion } from "framer-motion";
import Image from "next/image";
import { sweepUp } from "../animations";

export default function SignUp() {
  return (
    <div className="bg-blue-lightest py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sweepUp}
        className="w-11/12 max-w-lg mx-auto rounded-lg flex flex-col justify-center items-center gap-5 relative overflow-hidden"
      >
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
          action="https://formsubmit.co/3ae90ad237ce2eaf204d4b7c8779b16c"
          method="POST"
          className="z-10"
        >
          <input
            type="hidden"
            name="_next"
            value="https://arightco.vercel.app/thanks"
          />
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
      </motion.div>
    </div>
  );
}
