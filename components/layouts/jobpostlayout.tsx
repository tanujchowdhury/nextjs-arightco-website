import {
  faAngleRight,
  faBriefcase,
  faBullhorn,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function JobPostLayout({
  jobTitle,
  jobCategory,
  jobType,
  jobLocation,
  value,
  pdf,
  action,
  cc,
}: {
  jobTitle: string;
  jobCategory: string;
  jobType: string;
  jobLocation: string;
  value: string;
  pdf?: string;
  action: string;
  cc?: string;
}) {
  return (
    <>
      <div className="py-24 lg:py-36 xl:py-44 bg-gray-lighter flex flex-col items-center justify-center lg:flex-row px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center justify-center lg:basis-1/2 lg:items-start">
          <div className="flex flex-row items-center justify-center font-bold">
            <div className="pr-2 hover:text-orange-dark">
              <Link href="/">Home</Link>
            </div>
            <div className="w-3 h-5">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="pr-2 hover:text-orange-dark">
              <Link href="/careers">&nbsp;Careers</Link>
            </div>
            <div className="w-3 h-5">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="pl-2 hover:text-orange-dark">{jobTitle}</div>
          </div>

          <div className="text-4xl font-bold pt-6">{jobTitle}</div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10 lg:basis-1/2 lg:items-start">
          <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Interested in Joining Our Team?
          </div>
          <div className="pt-5 text-center lg:text-start lg:text-lg">
            Reach out to&nbsp;
            <Link href="mailto:hr@arightco.com" className="hover:text-orange">
              <span>hr@arightco.com</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-start items-center pt-8 mx-3 xl:mx-32">
        <div className="flex flex-col p-4 gap-2 text-lg md:basis-1/2">
          <div className="flex flex-row items-center gap-1 font-bold flex-wrap">
            <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6" />
            Job Category:&nbsp;
            <div className="font-normal">{jobCategory}</div>
          </div>
          <div className="flex flex-row items-center gap-1 font-bold flex-wrap">
            <FontAwesomeIcon icon={faBullhorn} className="w-6 h-6" />
            Job Type:&nbsp;
            <div className="font-normal">{jobType}</div>
          </div>
          <div className="flex flex-row items-center gap-1 font-bold flex-wrap">
            <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
            Job Location:&nbsp;
            <div className="font-normal">{jobLocation}</div>
          </div>
          <iframe src={pdf} width="100%" height="719px"></iframe>
        </div>
        <div className="flex flex-col text-black border p-8 bg-white w-full md:basis-1/2 mt-8 md:mt-0">
          <div className="text-2xl font-bold">Apply for this position</div>
          <div className="text-sm text-gray mb-4 md:mb-0">
            All fields are required
          </div>
          <form
            target="_blank"
            action={action}
            method="POST"
            encType="multipart/form-data"
          >
            {cc && <input type="hidden" name="_cc" value={cc} />}
            <input
              type="hidden"
              name="_next"
              value="https://arightco.vercel.app/thanks"
            />
            <input type="hidden" name="_subject" value={value} />
            <div className="flex flex-col md:pt-8">
              <label className="text-xl font-bold" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest mb-4"
                id="fullname"
                type="text"
                name="Name"
                required
              />

              <label className="text-xl font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest mb-4"
                id="email"
                type="email"
                name="Email"
                required
              />

              <label className="text-xl font-bold" htmlFor="phone">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest mb-4"
                id="phone"
                type="tel"
                name="Phone"
                required
              />

              <label className="text-xl font-bold" htmlFor="experience">
                Select Experience
              </label>
              <select
                id="experience"
                name="Experience"
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest mb-4"
                required
              >
                <option value="0-3 Years">0-3 Years</option>
                <option value="3-6 Years">3-6 Years</option>
                <option value="6-9 Years">6-9 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>

              <label className="text-xl font-bold" htmlFor="coverletter">
                Cover Letter
              </label>
              <textarea
                className="shadow appearance-none border rounded-xl p-1 md:p-3 leading-tight focus:outline-none focus:shadow-outline resize-y bg-blue-lightest mb-4"
                id="coverletter"
                name="Cover Letter"
                rows={5}
              />

              <label className="text-xl font-bold" htmlFor="resume">
                Upload CV/Resume
              </label>
              <input
                className="shadow appearance-none border rounded-full p-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-lightest"
                id="resume"
                type="file"
                name="CV/Resume"
                accept=".pdf,.doc,.docx"
                required
              />
              <label className="text-gray" htmlFor="resume">
                Allowed Types: .pdf, .doc, .docx
              </label>

              <button
                className="h-10 mt-5 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange  hover:bg-blue-dark md:col-span-2"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
