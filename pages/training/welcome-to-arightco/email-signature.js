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
            <p>To set up an email signature follow this <Link href="https://docs.google.com/document/d/1iPRwhxUjRbvVeP8jWajmyaM5O6PKG8Rrw3EcVXoP9HU/edit?usp=sharing" className="text-blue-500">link</Link>. Go to the settings or preferences section of your email client and look for the signature option. From there, you can create and customize your signature / (settings &rarr; more settings &rarr; signature)</p>
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
