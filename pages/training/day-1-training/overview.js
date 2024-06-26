import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function Overview() {
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
          <h3 className="text-3xl">Overview</h3>

          <p className="text-xl">
            Welcome to your First week at Arightco, Inc.!
          </p>

          <p>
            During your first week of training, you will be shown the various
            systems and tools that Arightco, Inc. uses to do the accounting and
            back-office work for our clients.
          </p>

          <p>
            Your initial training will take place over your first week with the
            company and cover all the tools that are used. Additional
            client-specific training will be provided on an ongoing basis from
            either your Manager or Client Partner.
          </p>

          <p>
            This will include training on QBTime, Slack, Keeper, Google Drive,
            Bill (Formally bill.com), and QuickBooks Online.
          </p>

          <p>
            The training will also provide training in compliance areas of
            Sexual Harassment and Computer Security Awareness. Your training
            will be done with several different team members including the IT
            Manager, Training Manager, HR Manager, and the Client Partner or
            Manager you will be working with.
          </p>

          <p>
            All the training will be customized to the specific areas you need
            training in. The training will be done in person or on video call
            (Zoom, Slack, Google Meets, etc.).
          </p>

          <p>
            There will also be self-paced training that is hands-on for Bill
            (Formally Bill.com) and QuickBooks.
          </p>

          <p>
            Once trained in the tools and programs that we use on a majority of
            Arightco, Inc.’s clients, you will start client-specific training
            with the Client Partner or Manager that you will be working with.
          </p>

          <p>
            The client-specific training will go into detail about the
            day-to-day work that you will be doing for Arightco, Inc.’s client.
          </p>
          <div className="flex flex-row justify-between">
            <Link href="/training/day-1-training" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/day-1-training/it-manager-call" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
