import Link from "next/link";
import Image from "next/image";
import { ComponentType, useState } from "react";
import QuoteModal from "./getaquote";
import AnimatePresence from "framer-motion";

export default function Navbar({}) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);

  return (
    <>
      <div className="h-20 flex justify-between items-center bg-off-white font-medium text-blue-dark sticky top-0 left-0">
        <div className="ml-3 shrink-0 min-[1350px]:ml-32">
          <Link href="/">
            <Image
              src="/logo-blue.png"
              alt="ArightCo Logo"
              width={200}
              height={100}
            />
          </Link>
        </div>

        <div className="hidden lg:flex text-lg">
          <div className="group px-3">
            <div className="hover:text-orange-dark flex items-center cursor-pointer max-[1100px]:text-sm">
              About Us&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div className="scale-0 group-hover:scale-100 absolute flex flex-col justify-around bg-white shadow rounded-lg transition-all">
              <Link
                className="pt-2 px-4 pb-2 rounded-t-lg hover:bg-orange-dark"
                href="/company-overview"
              >
                Company Overview
              </Link>
              <Link
                className="pt-2 px-4 pb-2 rounded-b-lg hover:bg-orange-dark"
                href="/meet-our-team"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          <div className="group px-3">
            <div className="hover:text-orange-dark flex items-center cursor-pointer max-[1100px]:text-sm">
              Success Stories&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div className="scale-0 group-hover:scale-100 absolute flex flex-col justify-around bg-white shadow rounded-lg transition-all">
              <Link
                className="pt-2 px-4 pb-2 rounded-t-lg hover:bg-orange-dark"
                href="/case-studies"
              >
                Case Studies
              </Link>
              <Link
                className="pt-2 px-4 pb-2 rounded-b-lg hover:bg-orange-dark"
                href="/testimonials"
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div className="mx-2 group px-3">
            <div className="hover:text-orange-dark flex items-center cursor-pointer max-[1100px]:text-sm">
              Contact&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="scale-0 group-hover:scale-100 absolute flex flex-col justify-around bg-white shadow rounded-lg transition-all">
              <Link
                className="pt-2 px-4 pb-2 rounded-t-lg hover:bg-orange-dark"
                href="/contact-us"
              >
                Contact Us
              </Link>
              <Link
                className="pt-2 px-4 pb-2 rounded-b-lg hover:bg-orange-dark"
                href="/faqs"
              >
                FAQ's
              </Link>
            </div>
          </div>

          <div className="mx-2 px-3 max-[1100px]:text-sm">
            <Link className="hover:text-orange-dark" href="/careers">
              Careers
            </Link>
          </div>
        </div>

        <div className="hidden md:flex min-[1350px]:mr-32">
          <div className="mx-2">
            <button className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark">
              <Link href="/pricing">PRICING</Link>
            </button>
          </div>

          <div className="mx-2">
            <button
              className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-blue-dark to-blue-light hover:from-blue-light hover:to-blue-dark cursor-pointer"
              onClick={() =>
                quoteModalOpen ? closeQuoteModal() : openQuoteModal()
              }
            >
              LET'S TALK
            </button>
          </div>
        </div>

        {/* Mobile Button*/}
        <div onClick={handleNav} className="block lg:hidden mr-3">
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? "sticky top-20 left-0 transition-all lg:scale-0" : "scale-0"
        }
      >
        <div className="flex-col justify-center items-center w-full text-center bg-white font-medium text-blue-dark drop-shadow-lg rounded-b-lg">
          <Link href="/company-overview">
            <div className="p-3 hover:bg-orange-dark">Company Overview</div>
          </Link>

          <Link href="/meet-our-team">
            <div className="p-3 hover:bg-orange-dark">Meet Our Team</div>
          </Link>

          <Link href="/case-studies">
            <div className="p-3 hover:bg-orange-dark">Case Studies</div>
          </Link>

          <Link href="/testimonials">
            <div className="p-3 hover:bg-orange-dark">Testimonials</div>
          </Link>

          <Link href="/contact-us">
            <div className="p-3 hover:bg-orange-dark">Contact Us</div>
          </Link>

          <Link href="/faqs">
            <div className="p-3 hover:bg-orange-dark">FAQ's</div>
          </Link>

          <Link href="/careers">
            <div className="p-3 hover:bg-orange-dark md:rounded-b-lg">
              Careers
            </div>
          </Link>

          <Link href="/pricing">
            <div className="block md:hidden p-3 hover:bg-orange-dark rounded-b-lg">
              Pricing
            </div>
          </Link>
        </div>
      </div>

      {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
    </>
  );
}
