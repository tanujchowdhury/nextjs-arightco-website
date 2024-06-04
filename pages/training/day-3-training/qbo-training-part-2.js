import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";
export default function QBOTrainingPart2() {
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
        href="/training/day-3-training"
      >
        ← Back to Day 2 Training
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">QBO Training Part 2</h3>

          <p>
            Day 3 of your training will start with a call with the Training
            Manager to go over any questions on your day 2 training as well as
            finishing your QBO training. The training call will take place on a
            video conference platform (i.e., zoom, slack, or Google Meets).
          </p>

          <p>
            The final part of QBO training will cover the below areas of QBO:
          </p>

          <ul>
            <li className="font-bold">⋅ Bank Feed</li>
            <li className="font-bold">⋅ Bank Reconciliations</li>
            <li className="font-bold">⋅ Reports</li>
            <li className="font-bold">
              ⋅ P&L Review – Checking your work For the Bank Feed, you will not
              be able to practice with it in the Demo Co QBO file.
            </li>
          </ul>

          <p>
            The Demo Co QBO file is unable to link to a bank and so the training
            will be shown on a LIVE client’s bank feed. Once you start the
            training with your Manager or Client Partner, they will go over the
            bank feed with you for the client(s) you will be working on.
          </p>

          <p>
            For the Bank Reconciliations, you will not be able to fully practice
            with it in the Demo CO QBO file. The Demo CO QBO file is used for
            multiple purposes and so the balances in the bank account and
            transactions will not match to The practice Statements. You will be
            able to practice going into it and using it, but it will not balance
            to $0.00 so you will not be able to finalize a Bank Reconciliation.
          </p>

          <p>
            On day 2 of your training, the Training Manager sent you the
            step-by-step guide for QBO that is found in the shared Google
            Training & Templates Drive under Training and in the{" "}
            <Link className="text-blue-500" href="https://drive.google.com/drive/folders/1V0qHHSGCpVs8LMw207jA-I-pd1El8M5y?usp=drive_link">
              Recorded Training Folder
            </Link>
            . After the training, if you need to review any parts of what the
            Training Manager went over, you can watch the QBO Training Videos
            that are in the Shared Google Drive under Training and in the{" "}
            <Link className="text-blue-500" href="https://drive.google.com/drive/folders/1V0qHHSGCpVs8LMw207jA-I-pd1El8M5y?usp=drive_link">
              Recorded Training Folder
            </Link>
            .
          </p>

          <p>
            Part 2 of the QBO training will cover the below areas and tasks in
            QBO:
          </p>

          <ul>
            <li className="font-bold">
              ⋅ Entering, Matching, & Reviewing Memos
            </li>
            <li className="font-bold">
              ⋅ Reviewing Categorized & Excluded Transactions
            </li>
            <li className="font-bold">
              ⋅ Starting & Working on a Reconciliation
            </li>
            <li className="font-bold">⋅ Solving Reconciliation Issues</li>
            <li className="font-bold">
              ⋅ Reviewing Past Reconciliation Statements
            </li>
            <li className="font-bold">⋅ Common Reports</li>
            <li className="font-bold">
              ⋅ Profit & Loss Report – how to use it to review your work
            </li>
          </ul>

          <p>
            The step-by-step QBO Guide that was provided to you can be used as a
            reference on how each of these tasks are done. This guide provides
            step-by-step instructions on how to do each item. You can also watch
            the{" "}
            <Link className="text-blue-500" href="https://drive.google.com/file/d/1mImtvHVXzX7hnnR5MQ4wO_VoB9W05uxY/view?usp=drive_link">
              Bank Feed & Reconciliation Video
            </Link>{" "}
            as well as the{" "}
            <Link className="text-blue-500" href="https://drive.google.com/file/d/1mImtvHVXzX7hnnR5MQ4wO_VoB9W05uxY/view?usp=drive_link">
              P&L Review Video
            </Link>
            .
          </p>
          <div className="flex flex-row justify-between">
            <Link href="/training/day-3-training" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/day-4and5-training" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
