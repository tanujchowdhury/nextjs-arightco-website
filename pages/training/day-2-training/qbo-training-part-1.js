import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function QBOTrainingPart1() {
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
        href="/training/day-2-training"
      >
        ← Back to Day 2 Training
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">QBO Training Part 1</h3>

          <p>
            Day 2 of your training will start with a call with the Training
            Manager to go over any questions on your day 1 training as well as
            starting your QBO training. The training call will take place on a
            video conference platform (i.e., zoom, slack, or Google Meets) and
            the QBO training will be broken up over Day 2 and Day 3 of your
            training.
          </p>

          <p>
            On day 2 of your training, you will cover the below areas of QBO:
          </p>

          <ul>
            <li className="font-bold">⋅ Platform Overview</li>
            <li className="font-bold">⋅ Accounts Payable</li>
            <li className="font-bold">⋅ Accounts Receivable</li>
            <li className="font-bold">⋅ Chart of Accounts</li>
          </ul>

          <p>
            After training you will have a chance to practice and review what
            was covered. If after the training, you have questions you can reach
            out to the Training Manager directly on Slack or by email.
          </p>

          <p>
            The Training Manager will send you an email with additional
            information and guides for QBO. The step-by-step{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1LMAiMXRxhx8ULXY60YtijFNe0nZ7TCbl/view?usp=drive_link"
            >
              guide{" "}
            </Link>
            for QBO can be found in the shared Google Training & Templates Drive
            under Training and in the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/drive/folders/1zmAnDIDj4lJSFbwp00jAcuV8Ff1LaveU?usp=drive_link"
            >
              QBO Training Folder
            </Link>
            . After the training if you need to review any parts of what the
            Training Manager went over you can watch the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1bZcwEO2IeE2zboXT1Bx8Y26z4-HXamrR/view?usp=drive_link"
            >
              QBO video{" "}
            </Link>
            in the Shared Google Drive under Training and in the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/drive/folders/1V0qHHSGCpVs8LMw207jA-I-pd1El8M5y?usp=drive_link"
            >
              Recorded Training Folder
            </Link>
            .
          </p>

          <p>
            The training for QBO will be covered in two parts on Day 2 and Day 3
            of your training. Part One of the QBO Training will cover the below
            areas or tasks in QBO:
          </p>

          <ul>
            <li className="font-bold">⋅ Logging In</li>
            <li className="font-bold">⋅ Entering & Editing Accounts Payable</li>
            <li className="font-bold">⋅ Entering & Editing Expenses</li>
            <li className="font-bold">
              ⋅ Entering Editing Accounts Receivables
            </li>
            <li className="font-bold">⋅ Entering & Editing Customers</li>
            <li className="font-bold">⋅ Chart of Account</li>
          </ul>

          <p>
            The step-by-step{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1LMAiMXRxhx8ULXY60YtijFNe0nZ7TCbl/view?usp=drive_link"
            >
              QBO Guide{" "}
            </Link>
            will be provided to you as a guide that you can reference back to on
            how each of the above tasks are done. This guide provides
            step-by-step instructions on how to do each item. After the training
            call you will be able to practice doing each of the tasks with the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/drive/folders/1i-G3Sr8NgAltb5uR-ZZKG-44jvWSqgrT?usp=drive_link"
            >
              Practice Documents{" "}
            </Link>
            in the QB Training folder.
          </p>

          <p>
            If you have questions while practicing the tasks, you can reach out
            to the Training Manager on Slack, review the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1LMAiMXRxhx8ULXY60YtijFNe0nZ7TCbl/view?usp=drive_link"
            >
              QBO Guide
            </Link>
            , or review the{" "}
            <Link
              className="text-blue-500"
              href="https://drive.google.com/file/d/1bZcwEO2IeE2zboXT1Bx8Y26z4-HXamrR/view?usp=drive_link"
            >
              QBO video
            </Link>
            .
          </p>

          <p>
            When the training call has been completed, you should select 5-10
            documents from the below practice document folders to practice what
            was shown on the training call:
          </p>

          <ul>
            <li className="font-bold">
              ⋅{" "}
              <Link
                className="text-blue-500"
                href="https://drive.google.com/drive/folders/1-CvBhb1Ey3Izn3lTbPAJv_K_T6iej9BI?usp=drive_link"
              >
                Accounts Payable
              </Link>
            </li>
            <li className="font-bold">
              ⋅{" "}
              <Link
                className="text-blue-500"
                href="https://drive.google.com/drive/folders/1IKEaLGPdV7YIeEfWC0eNS4IMqFcM9ASD?usp=drive_link"
              >
                Accounts Receivable
              </Link>
            </li>
            <li className="font-bold">
              ⋅{" "}
              <Link
                className="text-blue-500"
                href="https://drive.google.com/drive/folders/1Yimns41LXlUFEV_46AFkadexC1DWCpaV?usp=drive_link"
              >
                Expenses
              </Link>
            </li>
          </ul>
          <p>
            You will want to practice each one until you are fully comfortable
            doing each in QBO. While we do have you practice Accounts Payable in
            QBO, you will want to note that it is only used for entry when the
            client does NOT use Bill.
          </p>

          <p>
            If the client is using Bill you will want to ensure that all
            Accounts Payable activities are done in the Bill platform. On day
            three of your training, prior to starting the QBO Part 2 Training,
            the Training Manager will review any questions you have about the
            QBO Part 1 Training. If you have questions while practicing, you can
            reach out directly to the Training Manager on Slack or by email.
          </p>
          <div className="flex flex-row justify-between">
            <Link href="/training/day-2-training" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/day-3-training" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
