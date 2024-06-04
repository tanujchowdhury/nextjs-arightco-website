import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function GoogleDriveFAQs() {
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
          <h3 className="text-3xl">Google Drive FAQs</h3>

          <p>
            <span className="font-bold">
              Can I add a client or an employee of the client to a shared Google
              Drive?
            </span>{" "}
            Yes. They do need to have a Google account to access it though.
          </p>
          <p>
            <span className="font-bold">
              Can I limit the type of access a user has?
            </span>{" "}
            Yes. You can change or set a permission that has the needed access
            for the user.
          </p>
          <p>
            <span className="font-bold">Can I remove access for a user?</span>{" "}
            Yes. You can remove users by following the steps in the guide. Who
            can I reach out to if
          </p>
          <p>
            <span className="font-bold">I have issues with Google Drive?</span>{" "}
            You can reach out on the Slack channel #itsupport or send a direct
            message to the IT Manager.
          </p>
          <p>
            <span className="font-bold">
              Can I access or save files through a browser or from file
              explorer?
            </span>{" "}
            It is recommended that you access and save files directly from the
            file explorer. As when some documents are opened through the browser
            it changes them to a Google file type (i.e., Google Sheets, Google
            Slides, Google Docs). This can cause issues with what has been saved
            to the file sometimes.
          </p>
          <p>
            <span className="font-bold">
              Where can I store my personal documents or documents that don’t
              need to be in a shared drive?
            </span>{" "}
            You can set up your own Google Drive to save your personal or
            non-client-related documents
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/google-drive-guide/saving-files"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            {/* <Link
              href="/training/google-drive-guide/google-drive-faqs"
              className="text-xl mt-4"
            >
              Next Step →
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
