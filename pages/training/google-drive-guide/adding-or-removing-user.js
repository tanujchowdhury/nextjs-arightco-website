import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function AddingOrRemovingUser() {
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
          <h3 className="text-3xl">Adding or removing user</h3>

          <p>
            A person or client can be added to any shared Google Drive; however,
            they need to have a Google account to access the shared drive. The
            Google account can either be a personal or business account.
          </p>
          <p className="font-bold text-red-600">
            Before adding people outside of Arightco, Inc. to a shared drive
            please check with your Manager or Client Partner.
          </p>
          <p className="font-bold text-red-600">
            When adding a new user to a shared drive you can set different
            permissions for them.
          </p>
          <p>Below are the permissions that can be selected.</p>
          <ul>
            <li>⋅ Managers – Can add and remove users.</li>
            <li>⋅ Content Managers – Can add, edit, and delete files.</li>
            <li>⋅ Contributor – Can ONLY add or edit files.</li>
            <li>
              ⋅ Commentor – Can Only comment on shared Google Document files.
            </li>
            <li>⋅ Viewer – Can ONLY View or download a file.</li>
          </ul>
          <p className="font-bold text-red-600">
            NOTE: Please ensure when giving access to a shared Google Drive that
            you are selecting the appropriate access level for the person.
            First, click on the shared drive that you want to add the user to.
            Next, click on the Three dots. Finally, click on Manage Members.
          </p>
          <p>
            Next, type the email for the person you want to add and select the
            type of permission they should have.
          </p>
          <p>
            Finally, click on Send. This will send a notification to the person
            they have been added to the drive.
          </p>
          <p>
            To remove a member from a Shared drive, First follow the steps to
            manage the members on the Shared Drive. First, click on the shared
            drive that you want to add the user to. Next, click on the Three
            dots. Finally, click on Manage Members.
          </p>
          <p>
            Next, click on the Arrow for the person you are removing from the
            drive. Next, click on Remove Access.
          </p>
          <p>
            Finally, click on Save. This will remove the person from the shared
            Google Drive.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/google-drive-guide/adding-shared-google-drive"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/google-drive-guide/saving-files"
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
