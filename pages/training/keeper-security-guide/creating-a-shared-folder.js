import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function CreatingASharedFolder() {
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
        href="/training/keeper-security-guide"
      >
        ← Back to Keeper Security Guide
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Creating a shared folder</h3>
          <p>
            Keeper Security is the password-sharing system Arightco, Inc. uses
            to securely share login information with all team members. Keeper
            can also be used to save client payment details for credit cards.
          </p>
          <p>
            Login information should not be stored in any other location i.e.,
            excel file, word document, email, etc. All records should be in the
            Shared folder for the client.
          </p>
          <p>
            The entire client folder should be shared. Individual records should{" "}
            <span className="font-bold text-red-600">NOT</span> be shared.
          </p>
          <p className="font-bold text-red-600">
            Please note that your keeper account can NOT be reset if you lose
            your password. An entirely new account will need to be created if
            you are unable to remember your login.
          </p>
          <p>
            To create a shared folder, click on Create New, then click on Shared
            Folder.
          </p>
          <p>
            Next, name the folder and select the appropriate settings. Finally,
            click "Create".
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/keeper-security-guide"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/keeper-security-guide/sharing-a-folder"
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
