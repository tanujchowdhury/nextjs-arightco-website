import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function BillTraining() {
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
        href="/training/day-1-training"
      >
        ← Back to Day 1 Training
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Bill Training (Formally Bill.com)</h3>

          <p>
            The Training Manager will send you an email with additional
            information and guides for Bill.
          </p>

          <p>
            The step-by-step{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1fn-69kB6N0-a3GRINA4lIjHwnCYGJlLb/view?usp=drive_link"
            >
              guide{" "}
            </Link>
            for Bill can be found in the shared Google Training & Templates
            Drive under Training and in the Bill Training Folder. After the
            training if you need to review any parts of what the Training
            Manager went over you can watch the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1L_VO97ndN7JJd-I75hTcga78raaeacUg/view?usp=drive_link"
            >
              Bill video{" "}
            </Link>
            in the Shared Google Drive under Training and in the Recorded
            Training Folder.
          </p>

          <p>
            During the Bill training we will cover how to do the following tasks
            in Bill:
          </p>

          <ul>
            <li className="font-bold">⋅ Logging In</li>
            <li className="font-bold">⋅ Managing the Inbox</li>
            <li className="font-bold">
              ⋅ Entering, Editing, & Adding Documents to a Bill
            </li>
            <li className="font-bold">
              ⋅ Entering, Editing & Adding Documents to a Vendor
            </li>
            <li className="font-bold">⋅ Saving Documents</li>
            <li className="font-bold">⋅ Using the Help feature</li>
            <li className="font-bold">⋅ Zoho</li>
          </ul>

          <p>
            The step-by-step{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1fn-69kB6N0-a3GRINA4lIjHwnCYGJlLb/view"
            >
              Bill Guide{" "}
            </Link>
            will be provided to you as a guide that you can reference how each
            of the above tasks are done. This guide provides step-by-step
            instructions on how to do each item.
          </p>
          <p>
            After the training call you will be able to practice doing each of
            the tasks with the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1IQ5LsWyQFj_tuMpP9lxVMNN6gQrOYx7U/view?usp=drive_link"
            >
              Bill Practice Document
            </Link>
            . If you have questions while practicing the tasks, you can reach
            out to the Training Manager on Slack, review the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1fn-69kB6N0-a3GRINA4lIjHwnCYGJlLb/view?usp=drive_link"
            >
              Bill Guide
            </Link>
            , or review the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1L_VO97ndN7JJd-I75hTcga78raaeacUg/view?usp=drive_link"
            >
              Bill video
            </Link>
            . On day two of your training, prior to starting the QBO training,
            the Training Manager will review any questions you have about Bill.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/day-1-training/training-manager-call"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link href="/training/day-2-training" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
