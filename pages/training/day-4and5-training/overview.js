import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function Overview2() {
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
        href="/training/day-4and5-training"
      >
        ← Back to Day 4 & 5 Training
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Overview</h3>

          <p>
            Your final two days of training during your first week will be with
            your Manager or Client Partner.
          </p>

          <p>This training will cover the below areas:</p>

          <ul>
            <li className="font-bold">⋅ What clients you will work on</li>
            <li className="font-bold">
              ⋅ Overview of the Client – what they do, important contacts, etc.
            </li>
            <li className="font-bold">
              ⋅ What tasks/work you will be responsible for – Review of the
              Policy & Procedure Document for the client
            </li>
            <li className="font-bold">
              ⋅ Important Deadlines – Month Close, Payroll, Taxes, etc.
            </li>
            <li className="font-bold">
              ⋅ Expectations – Working hours, communication, weekly check-ins,
              etc.
            </li>
          </ul>

          <p>
            When going over the details of the client you will be working on,
            you will want to ensure that you go over all the tasks that you will
            be managing for the client and what the client’s expectations are.
            This will be where you want to review the Policy & Procedure manual
            for that client. You will want to ask your manager or Client Partner
            on any areas you are not sure of.
          </p>

          <p>
            While the initial training will start during your first week, you
            should continue with training as you continue working with your
            manager or Client Partner.
          </p>

          <p>
            This will be ongoing during your employment with Arightco, Inc. It
            is recommended that you have a daily call with your manager or
            Client Partner when you first start working on a client. This can
            transition into a weekly call with your Manager or Client Partner.
            Having a weekly call with your manager or Client Partner can help
            with managing the work on the client and resolving any questions
            quickly.
          </p>

          <p>Visit <Link className="text-blue-500" href="https://www.arightco.com">arightco.com</Link> to see the products and services that we offer and see the prices associated with each. This way you can become familiar with the types of services that we perform.</p>

          <div className="flex flex-row justify-between">
            <Link href="/training/day-4and5-training" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/guides-slack" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
