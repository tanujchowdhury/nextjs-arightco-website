import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function MovingARecord() {
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
          <h3 className="text-3xl">Moving a record</h3>

          <p>
            If a record was shared or created outside of a folder, it will be
            listed below all your other folders. All records should be saved
            inside a folder. If you have records not saved to a folder, you can
            move them to the appropriate folder.
          </p>
          <p>
            First, click on the record that you want to move. Next, click on
            "Options". Select the Move To option.
          </p>
          <p>
            Next, Select the folder you want the record moved to. Next, click
            "Choose".
          </p>
          <p>
            Next, click "Move". You will now see the record in the folder it was
            moved to.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/keeper-security-guide/saving-a-payment-record"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/keeper-security-guide/keeper-faqs"
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
