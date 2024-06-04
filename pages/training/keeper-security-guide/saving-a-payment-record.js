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
          <h3 className="text-3xl">Saving a Payment record</h3>
          <p>
            A payment record is the client’s credit card used for payments. When
            it needs to be shared you should send a screenshot in Slack with the
            card number and CCV code unmasked to the person needing it. They
            should then enter the information in their keeper account and the
            screenshot should be deleted from Slack.
          </p>
          <p className="font-bold text-red-600">
            NOTE: Credit Card information should not be shared in email or
            outside of this process.
          </p>
          <p>
            First, click on Create "New Payment Card". Next, fill in all the
            information for the Payment Card.
          </p>
          <p>
            Select or add a new Billing Address. To add a new Billing address,
            click on "New Address".
          </p>
          <p>"Title the address" so that you know which client it is for. Fill in all the information. Next, click "Save".</p>
          <p>You will see all saved Payment cards under the Identity & Payments Tab in Keeper. If you need to share the card with a team member, click the Card you want to share. Next, click on the eye icon to unmask the card number and Security Code. Take a screenshot and share it in Slack. Once they have saved it to their own keeper account delete the screenshot in Slack.</p>
          <p className="font-bold text-red-600">NOTE: Do NOT Share credit card information via email, word docs, or other means. Always share in Slack and delete once used.</p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/keeper-security-guide/saving-a-contact-record"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/keeper-security-guide/moving-a-record"
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
