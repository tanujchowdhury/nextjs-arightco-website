import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function SavingARecord() {
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
          <h3 className="text-3xl">Saving a Record</h3>

          <p>
            When setting up a new record you will want to ensure that you save
            the following information for the record.
          </p>
          <ul>
            <li className="font-bold">⋅ Login ID/User ID</li>
            <li className="font-bold">⋅ Password</li>
            <li className="font-bold">⋅ Security Questions & Answers</li>
            <li className="font-bold">
              ⋅ Contact information – email, phone number, contact name, etc.
            </li>
          </ul>
          <p>First, click on + "Create new" and then select "New Record".</p>
          <p>Next, select the "type of record" you are saving.</p>
          <p>Create a title for the record then click "Next".</p>
          <p className="font-bold text-red-600">
            NOTE: When setting up the title please put what the login is for and
            the client it is for. This makes it much easier to identify
            different client logins for the same website. Example: CA EDD –
            Arightco, Inc. On the next screen fill in the required information:
            Login, Password, Website, Custom Fields (i.e. Security Questions),
            Notes (contact information)
          </p>
          <p>
            To select a custom Field, click on the + "Custom Field" and select
            the"custom field" needed.
          </p>
          <p>Once all information is entered, click on""Save".</p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/keeper-security-guide/sharing-a-folder"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/keeper-security-guide/saving-a-contact-record"
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
