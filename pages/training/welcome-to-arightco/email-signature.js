import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function EmailSignature() {
  const { getSession } = useContext(AccountContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getSession()
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (!isAuthenticated) {
    return <div></div>;
  }
  return (
    <>
      <Link
        className="absolute top-0 left-0 p-4"
        href="/training/welcome-to-arightco"
      >
        ← Back to Welcome To ArightCo, Inc
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Email Signature</h3>
            <p>An email signature is a block of text that is automatically added to the end of an email message. It usually contains your name, job title, company name, and contact information. Creating an email signature is essential as it helps to convey a professional image of your business.</p>
            <p>When creating an email signature for your company, you should ensure that it includes all the necessary information such as your name, job title, company name, phone number, website, and social media links. You can also add a logo or a picture to make it more visually appealing.</p>
            <p>It is important to note that your email signature should be simple and easy to read. Avoid using too many colors or fonts as they can make it look cluttered and unprofessional. A well-designed email signature can help to build trust with your clients and make a positive impression on them.</p>
            <p className="font-bold">One of the easiest ways to set up an email signature is by using the signature feature in your email client. </p>
            <p className="font-bold">Most email clients such as Gmail, Outlook, and Apple Mail have this feature built-in. </p>
            <p className="font-bold">To set up an email signature, go to the settings or preferences section of your email client and look for the signature option. From there, you can create and customize your signature / (settings &rarr; more settings &rarr; signature)</p>
          <div className="flex flex-row justify-between">
            <Link
              href="/training/welcome-to-arightco/financial-services-accounting"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link disabled href="/training/day-1-training" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
