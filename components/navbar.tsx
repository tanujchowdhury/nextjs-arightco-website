import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({}) {
  const [nav, setNav] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleAbout = () => {
    setAbout(!about);
  };
  const handleContact = () => {
    setContact(!contact);
  };

  return (
    <>
      <div className="h-20 flex justify-between items-center bg-off-white font-medium text-blue-dark sticky top-0 left-0">
        <div className="ml-3 xl:ml-32">
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
            <div className="hover:text-orange-dark flex items-center cursor-pointer">
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

          <div className="mx-2 px-3">
            <Link className="hover:text-orange-dark" href="/blog">
              Blog
            </Link>
          </div>

          <div className="mx-2 px-3">
            <Link className="hover:text-orange-dark" href="/testimonials">
              Testimonials
            </Link>
          </div>

          <div className="mx-2 group px-3">
            <div className="hover:text-orange-dark flex items-center cursor-pointer">
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

          <div className="mx-2 px-3">
            <Link className="hover:text-orange-dark" href="/careers">
              Careers
            </Link>
          </div>
        </div>

        <div className="hidden md:flex xl:mr-32">
          <div className="mx-2">
            <button className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark">
              <Link href="/pricing">PRICING</Link>
            </button>
          </div>

          <div className="mx-2">
            <button className="h-12 w-40 rounded-full text-white font-bold bg-gradient-to-r from-blue-dark to-blue-light hover:from-blue-light hover:to-blue-dark">
              <Link href="">LET'S TALK</Link>
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
      <div className={nav ? "sticky top-20 left-0 transition-all lg:scale-0" : "scale-0"}>
        <div className="flex-col justify-center items-center w-full text-center bg-white font-medium text-blue-dark drop-shadow-lg rounded-b-lg">
          <div
            className="flex justify-center items-center p-3 hover:bg-orange-dark cursor-pointer"
            onClick={handleAbout}
          >
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

          <Link href="/company-overview">
            <div
              className={about ? "block p-3 hover:bg-orange-dark" : "hidden"}
            >
              Company Overview
            </div>
          </Link>

          <Link href="/meet-our-team">
            <div
              className={about ? "block p-3 hover:bg-orange-dark" : "hidden"}
            >
              Meet Our Team
            </div>
          </Link>

          <Link href="/blog">
            <div className="p-3 hover:bg-orange-dark">Blog</div>
          </Link>

          <Link href="/testimonials">
            <div className="p-3 hover:bg-orange-dark">Testimonials</div>
          </Link>

          <div
            className="flex justify-center items-center p-3 hover:bg-orange-dark cursor-pointer"
            onClick={handleContact}
          >
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

          <Link href="/contact-us">
            <div
              className={contact ? "block p-3 hover:bg-orange-dark" : "hidden"}
            >
              Contact Us
            </div>
          </Link>

          <Link href="/faqs">
            <div
              className={contact ? "block p-3 hover:bg-orange-dark" : "hidden"}
            >
              FAQ's
            </div>
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
    </>
  );
}
