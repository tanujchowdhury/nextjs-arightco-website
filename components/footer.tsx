import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer({}) {
  return (
    <>
      <div className="bg-blue-dark bottom-0 w-full lg:flex lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center items-center text-center text-white lg:basis-1/4 lg:justify-start lg:items-start lg:text-left">
          <div className="justify-center">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="ArightCo Logo"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div className="flex flex-row font-semibold justify-center hover:text-orange-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            &nbsp; (408) 837-0029
          </div>
          <div>
            Professional business consulting firm, providing integrated finance,
            accounting, and HR solutions since 2008
          </div>
          <div className="hover:text-orange">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
}
