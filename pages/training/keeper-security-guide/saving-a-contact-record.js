import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function SavingAContactRecord() {
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
          <h3 className="text-3xl">Saving a contact record</h3>
          <p>
            A contact record needs to be saved for each owner of a client in the
            Owner Information Folder for the Client. This Contact record will
            have the Name, Address, Email, Phone, SSN, Date of Birth, and
            Ownership % saved that will be used on any filings. Select Custom
            Field Click.
          </p>
          <p>
            First, click on "Create New Record". Next, click on "Contact" record
            type.
          </p>
          <p>
            Enter a title for the Contact Record i.e., Sushama Chowdhury –
            Arightco. Next, click "Next".
          </p>
          <p>Next, fill in all "contact information" for the owner.</p>
          <p>Next, click on Custom Field. Next, select "Hidden Field".</p>
          <p>
            Next, click Edit. Next, enter the"Social Security Number" for the
            title.
          </p>
          <p>
            Next, Repeat the steps to add a custom field and select "Text"
            Field.
          </p>
          <p>
            Repeat the steps to Edit the name and name the field "Ownership %""
            and "Date".
          </p>
          <p>Repeat the steps to add a custom field and select "Date".</p>
          <p>Edit and rename this as "Date of Birth".</p>
          <p>
            Fill in the information for "Social Security Number", "Ownership %"
            and the "Date of Birth". Next Click "Save"
          </p>
          <p>
            The contact should look like the below once saved. If you need to
            see the "Social Security Number" click on the Eye Symbol.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/keeper-security-guide/saving-a-record"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/keeper-security-guide/saving-a-payment-record"
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
