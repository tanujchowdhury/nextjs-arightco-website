import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function ChannelGuide() {
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
      <Link className="absolute top-0 left-0 p-4" href="/training/guides-slack">
        ← Back to Guides - Slack
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Channel Guide</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Channel Name</th>
                <th>Channel Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">#1099-W2-Questions</td>
                <td>
                  Where you can ask general questions about 1009's, W2s, and W9s
                </td>
              </tr>
              <tr>
                <td className="p-4">#2factorcodes-XXX-XXX-XXXX</td>
                <td>
                  Specific channels set to phone numbers to receive 2-factor
                  authentication codes
                </td>
              </tr>
              <tr>
                <td className="p-4">#arightcoteam</td>
                <td>
                  Company team channel. Ask a question or provide information to
                  the entire team
                </td>
              </tr>
              <tr>
                <td className="p-4">#arightcocalendar</td>
                <td>
                  Company Calendar shows Employee Anniversaries and Birthdays
                </td>
              </tr>
              <tr>
                <td className="p-4">#highfive</td>
                <td>Give a high-five or shout-out to an employee</td>
              </tr>
              <tr>
                <td className="p-4">#humanresources</td>
                <td>
                  Where employees can ask client-related or general HR-related
                  questions. NOT for personal HR questions
                </td>
              </tr>
              <tr>
                <td className="p-4">#itsupport</td>
                <td>Ask any IT-related questions here.</td>
              </tr>
              <tr>
                <td className="p-4">#random</td>
                <td>
                  Post anything here i.e., wedding announcements/photos, family
                  events/photos, holiday photos/events, baby
                  announcements/photos, interesting news/articles, or memes
                </td>
              </tr>
              <tr>
                <td className="p-4">#stateregistrations</td>
                <td>
                  Ask any questions regarding registering a company in a state
                </td>
              </tr>
            </tbody>
          </table>

          <p className="font-bold text-red-600">
            NOTE: Before creating a new channel, please reach out to our IT
            Manager, Training Manager, or Katie Nelson.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/guides-slack/setting-your-status"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/keeper-security-guide"
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
