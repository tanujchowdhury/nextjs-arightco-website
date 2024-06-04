import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function ITManagerCall() {
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
      <Link className="absolute top-0 left-0 p-4" href="/training/day-1-training">
        ← Back to Day 1 Training
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">IT Manager Call</h3>

          <p>
            Your first day with Arightco, Inc. will be filled with several calls
            with various team members. These will include calls to get your
            company laptop setup, reviewing Arightco, Inc. information,
            policies, employment documentation, and training for company tools
            and systems. The team members that you will have calls with on your
            first day are the IT Manager, HR Manager, and the Training Manager.
            Each call will go over a specific area of your onboarding. Feel free
            to ask questions during each call on any area that you are unsure of
            or need more information on. If after the calls or training, you
            have additional questions you can reach out directly to each Manager
            on Slack or by emailing them.
          </p>

          <p>
            The first call you will have on your first day with Arightco, Inc.
            will be with the IT Manager getting all the major systems loaded
            onto your company-provided laptop.
          </p>

          <p>
            This will include making sure the following systems are set up and
            operating properly.
          </p>

          <ul>
            <li className="font-bold">⋅ Keeper</li>
            <li className="font-bold">⋅ Google Drive</li>
            <li className="font-bold">⋅ Slack</li>
            <li className="font-bold">⋅ Microsoft Office</li>
          </ul>

          <p>
            The IT Manager will answer any IT-related questions you may have. If
            after the call you have questions that are IT-related you can reach
            out to the IT Manager directly on Slack or in the #itsupport channel
            in Slack.
          </p>

          <div className="flex flex-row justify-between">
            <Link href="/training/day-1-training/overview" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/day-1-training/hr-manager-call" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
