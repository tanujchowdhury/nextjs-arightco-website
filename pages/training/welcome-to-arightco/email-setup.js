import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function EmailSetup() {
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
          <h3 className="text-3xl">Email Setup</h3>

          <ol>
            <li>1. Accept the link from IT (Charles).</li>
            <li>2. Follow the steps on the screen to set up your account.</li>
            <li>3. Use the account you created to sign in to Gmail.</li>
            <li>4. Select 2-step verification for better security.</li>
            <li>5. Add phone number to the 2-step verification.</li>
            <li>6. Add the OTP received in the phone number and verify.</li>
          </ol>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/welcome-to-arightco/financial-services-accounting"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/welcome-to-arightco/email-signature"
              className="text-xl mt-4"
            >
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
