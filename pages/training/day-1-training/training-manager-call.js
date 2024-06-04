import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function TrainingManagerCall() {
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
          <h3 className="text-3xl">Training Manager Call</h3>

          <p>
            The third call you will have on your first day will be with the
            Training Manager.
          </p>

          <p>
            The Training Manager will provide you with in-depth training on the
            following systems:
          </p>

          <ul>
            <li className="font-bold">⋅ Slack</li>
            <li className="font-bold">⋅ Google Drive</li>
            <li className="font-bold">⋅ Keeper</li>
            <li className="font-bold">⋅ QuickBooks Online</li>
            <li className="font-bold">⋅ Bill (Formally bill.com)</li>
            <li className="font-bold">⋅ QB Time (Formally T-Sheets)</li>
            <li className="font-bold">⋅ Zoho</li>
          </ul>

          <p>
            Your first call with the Training manager will be approximately 2
            hours and take place on a video conference platform (i.e., zoom,
            slack, or Google Meets) you will go over the main programs that
            Arightco, Inc. uses and bill (Formally Bill.com). This training will
            be in-depth on how to use each system and allow you to ask any
            questions about areas of the systems or tools that you are not sure
            of how to use.
          </p>
          <p>
            If you have questions after the training, you can reach out directly
            to the Training Manager on Slack or by email. The tools that will be
            covered in this first call will be:
          </p>

          <ul>
            <li className="font-bold">⋅ Slack</li>
            <li className="font-bold">⋅ Google Drive</li>
            <li className="font-bold">⋅ Keeper</li>
            <li className="font-bold">⋅ QB Time (Formally T-Sheets)</li>
            <li className="font-bold">⋅ Zoho</li>
          </ul>

          <p>
            If you have finished your Bill training and practice early, you can
            use the additional time on Day 1 to work on your Computer Security
            Training and Sexual Harassment Training
          </p>
          <div className="flex flex-row justify-between">
            <Link href="/training/day-1-training/hr-manager-call" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/day-1-training/bill-training" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
