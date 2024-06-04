import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function KeeperFAQs() {
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
          <h3 className="text-3xl">Keeper FAQs</h3>
          <p>
            Can my keeper account be reset if I forget my password? NO. The
            account cannot be reset. An entirely new account would need to be
            created.
          </p>
          <p>
            Can I share an individual record? NO. You should share the entire
            client folder and not individual records.
          </p>
          <p>
            What access should be given to those needing to be added to a
            folder? All folders should be set up so that users can edit records
            and manage users.
          </p>
          <p>
            Can I share a payment card in keeper? No. Payment cards are not
            shareable in Keeper. Please follow the process of sharing a
            screenshot in Slack and then deleting it from Slack once it has been
            used.
          </p>
          <p>
            How can I organize the records under a client? Create folders like
            how you have your Google Drive folders set up and move the records
            to the appropriate folder.
          </p>
          <p>
            Who can I reach out to if I have issues with my Keeper account? IT
            Support can help with some issues. You can reach out to them
            directly on Slack or send a message on the #ITSupport channel in
            Slack.
          </p>
          <p>
            Where can I keep my personal logins? Create a folder for your
            personal logins. These may include your QBTime, QBO, Arightco email,
            etc. logins.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/keeper-security-guide/moving-a-record"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link href="/training/google-drive-guide" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
