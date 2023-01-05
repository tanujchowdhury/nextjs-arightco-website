import Link from "next/link";

export default function SignUp({}) {
  return (
    <div className="bg-blue-lightest py-32">
      <div className="w-11/12 max-w-lg bg-[url('../public/typing.png')] bg-no-repeat bg-cover bg-center mx-auto rounded-lg flex flex-col justify-center items-center gap-5">
        <div className="font-bold text-white text-xl mt-10">
          NEWSLETTER SIGNUP
        </div>
        <div className="text-white text-medium">
          Stay up-to-date on industry news and ArightCo offerings
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="companyname"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Industry"
              type="text"
              placeholder="Industry"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="emailaddress"
              type="text"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="mb-10">
          <button className="h-10 w-40 rounded-full text-white font-bold bg-orange-dark hover:bg-blue-light" type="submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
