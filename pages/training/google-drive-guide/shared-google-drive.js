import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function SharedGoogleDrive() {
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
    return (
      <div></div>
    );
  }
  return (
    <>
      <Link
        className="absolute top-0 left-0 p-4"
        href="/training/google-drive-guide"
      >
        ← Back to Google Drive Guide
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Shared Google drive</h3>

          <p>
            When you start with Arightco, Inc. you will automatically be added
            to the below Shared Drives in Google Drive. This is where
            company-provided information is going to be stored and shared with
            team members.
          </p>
          <ul>
            <li className="font-bold">Arightco Client Mail And Filings</li>
            <li>⋅ 1099 Filings</li>
            <li>⋅ DE Annual Filings</li>
            <li>⋅ Client Scanned Mail</li>
          </ul>
          <ul>
            <li className="font-bold">
              Arightco Training, Templates, & Other Misc. Items
            </li>
            <li>⋅ Training Guides</li>
            <li>⋅ Templates</li>
            <li>⋅ Best Practices</li>
            <li>⋅ Team Call documents</li>
          </ul>
          <ul>
            <li className="font-bold">Arightco US & India HR Resources</li>
            <li>⋅ Labor Law Updates</li>
            <li>⋅ Labor Law Posters</li>
            <li>⋅ Arightco Employee HR Documents</li>
          </ul>
          <p>
            Arightco, Inc. Maintains shared drives for its clients. Your Client
            Partner will share any client drives with you when you start. If you
            have started and do not see the client drive that you need access
            to, please reach out to your manager or Client Partner to have them
            add you to the client drive.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/google-drive-guide/downloading-google-drive"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/google-drive-guide/adding-shared-google-drive"
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
