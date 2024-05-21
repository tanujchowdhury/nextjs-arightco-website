import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import QuoteModal from "../modals/quotemodal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ArticleFooterLink from "./articlefooterlink";

export default function Footer() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const closeQuoteModal = () => setQuoteModalOpen(false);
  const openQuoteModal = () => setQuoteModalOpen(true);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-blue-dark">
        <div className="bottom-0 w-11/12 lg:flex lg:flex-row lg:justify-center lg:pb-5">
          <div className="flex flex-col justify-center items-center text-center text-white py-3 lg:pl-10 lg:basis-1/4 lg:justify-start lg:items-start lg:text-left">
            <div className="justify-center">
              <Link href="/">
                <Image
                  src="/logo-white.png"
                  alt="ArightCo Logo"
                  width={230}
                  height={200}
                />
              </Link>
            </div>
            <div className="flex flex-row font-semibold justify-center hover:text-orange-dark py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              &nbsp;
              <Link href="tel:+1(408)8370029">(408) 837-0029</Link>
            </div>
            <div className="py-3">
              Professional business consulting firm, providing integrated
              finance, accounting, and HR solutions since 2008
            </div>
            <div className="hover:text-orange py-3 hover:-translate-y-2 duration-300 w-6 h-6">
              <Link
                href="https://www.linkedin.com/company/arightco-inc./"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-white text-center lg:pl-20 lg:basis-1/4 lg:justify-start lg:items-start lg:text-left lg:pt-5">
            <div className="font-bold py-3 lg:text-2xl">Useful Links</div>
            <div className="text-sm py-1 lg:text-base">
              <Link href="/contact-us" className="hover:text-orange">
                Contact
              </Link>
            </div>
            <div className="text-sm py-1 lg:text-base">
              <Link href="/careers" className="hover:text-orange">
                Careers
              </Link>
            </div>
            <div className="text-sm py-1 lg:text-base">
              <p
                className="hover:text-orange cursor-pointer"
                onClick={() =>
                  quoteModalOpen ? closeQuoteModal() : openQuoteModal()
                }
              >
                Get A Quote
              </p>
            </div>

            <div className="text-sm py-1 lg:text-base">
              <Link href="/faqs" className="hover:text-orange">
                FAQ&apos;s
              </Link>
            </div>
            <div className="text-sm py-1 lg:text-base">
              <Link href="/privacy-policy" className="hover:text-orange">
                Privacy Policy
              </Link>
            </div>
          </div>  
          <div className="flex flex-col text-white text-center pt-8 pb-5 lg:pl-10 lg:basis-1/4 lg:justify-start lg:items-start lg:text-left lg:pt-5">
            <div className="font-bold py-3 lg:text-2xl">Company</div>
            <div className="text-sm py-1 lg:text-base">
              <Link href="/company-overview" className="hover:text-orange">
                Company Overview
              </Link>
            </div>
            <div className="text-sm py-1 lg:text-base">
              <Link href="/meet-our-team" className="hover:text-orange">
                Meet Our Team
              </Link>
            </div>
            <div className="text-sm py-1 lg:text-base">
              <Link href="/case-studies" className="hover:text-orange">
                Case Studies
              </Link>
            </div>
            <div className="text-sm py-1 lg:text-base">
              <Link href="/testimonials" className="hover:text-orange">
                Testimonials
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white pt-4 pb-5 border-t border-gray-dark/50 w-11/12">
          <div className="text-sm">
            Copyright © 2024 ArightCo. All Rights Reserved.
          </div>
        </div>
      </div>
      <AnimatePresence>
        {quoteModalOpen && <QuoteModal handleClose={closeQuoteModal} />}
      </AnimatePresence>
    </>
  );
}
