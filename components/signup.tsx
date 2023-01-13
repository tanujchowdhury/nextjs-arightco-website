import Image from "next/image";

export default function SignUp({}) {
  return (
    <div className="bg-blue-lightest py-32">
      <div className="w-11/12 max-w-lg mx-auto rounded-lg flex flex-col justify-center items-center gap-5 relative overflow-hidden">
        <Image src={"/typing.png"}
        alt={"Typing image"}
        fill
        className="object-cover"
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
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                type="text"
                placeholder="Full Name"
                name="Full Name"
              />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="companyname"
                type="text"
                placeholder="Company Name"
                name="Company Name"
              />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="industry"
                type="text"
                placeholder="Industry"
                name="Industry"
              />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="emailaddress"
                type="email"
                placeholder="Email Address"
                name="Email Address"
                required
              />
            </div>
            <div className="my-10">
              <button
                className="h-10 w-40 rounded-full text-white font-bold bg-orange-dark hover:bg-blue-light"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
