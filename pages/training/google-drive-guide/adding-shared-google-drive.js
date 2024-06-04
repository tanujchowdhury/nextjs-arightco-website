import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function AddingSharedGoogleDrive() {
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
          <h3 className="text-3xl">Adding Shared google drive</h3>

          <p>
            If a shared drive has not been created for a client yet, the Client
            Partner will create it following the below steps. These steps can be
            used to create any type of shared drive. Before creating a new
            shared drive for a client please check with your Client Partner or
            manager as it might be that they just need to add you to an existing
            one.
          </p>
          <p>
            First, you will access your Google Drive through a web browser
            (Chrome, Firefox, Explorer, etc.) by clicking on the boxes by your
            Profile in the browser. Next, Click on the{" "}
            <span className="font-bold">Google Drive Button</span>
          </p>
          <p>
            Next, right-click on "Shared Drives". Next, click on "New Shared
            Drives".
          </p>
          <p>
            On the next screen, you will type in the Name of the new shared
            drive. Next, click "Create"
          </p>
          <p>
            This will create a new shared drive and you will see it in the list
            of shared drives.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/google-drive-guide/shared-google-drive"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/google-drive-guide/adding-or-removing-user"
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
