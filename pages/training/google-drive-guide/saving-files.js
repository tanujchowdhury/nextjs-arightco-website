import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function SavingFiles() {
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
          <h3 className="text-3xl">Saving files</h3>

            <p>When saving files, it is Arightco, Inc. policy that <span className="font-bold text-red-600">nothing</span> is saved directly to the company laptop or computer. All documents should be saved to your Google Drive whether it is in your personal Drive or a Client Drive folder. To save a file in Google Drive you will select the folder in the respective Google Drive when using the save feature in programs like Adobe, Word, Excel, PowerPoint, downloading files, etc.</p>


          <div className="flex flex-row justify-between">
            <Link
              href="/training/google-drive-guide/adding-or-removing-user"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/google-drive-guide/google-drive-faqs"
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
