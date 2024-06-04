import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function HRManagerCall() {
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
          <h3 className="text-3xl">HR Manager Call</h3>

          <p>
            The second call you will have on your first day will be with the HR
            Manager to go over all onboarding and to answer any questions you
            may have.
          </p>

          <p>This call will cover the below items:</p>

          <ul>
            <li className="font-bold">
              ⋅ Onboarding Documents – US Team: I9, W4, etc. India Team: From
              12BB, ESIC -MED 37, PF Form, etc.
            </li>
            <li className="font-bold">⋅ Benefits Enrollment</li>
            <li className="font-bold">
              ⋅ Company Handbook and Important Company Policies
            </li>
            <li className="font-bold">
              ⋅ Mandatory Training – Computer Security & Sexual Harassment.
            </li>
          </ul>

          <p>
            The HR Manager will also provide you with the details and invites
            to the Computer Security Training and Sexual Harassment Training
            that will need to be completed. If after the call with the HR
            Manager, you have additional HR-related questions you can reach out
            directly to them on Slack or by emailing them.
          </p>

          <div className="flex flex-row justify-between">
            <Link href="/training/day-1-training/it-manager-call" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/day-1-training/training-manager-call" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
