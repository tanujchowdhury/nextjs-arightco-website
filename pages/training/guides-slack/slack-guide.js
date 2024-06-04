import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function SlackGuide() {
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
          <h3 className="text-3xl">Slack Guide</h3>

          <p>
            Arightco, Inc. has decided to use Slack as the primary communication
            tool. You will need to download the Slack app to your desktop and
            follow the steps on the invite.
          </p>

          <p>
            Upon signing in, you will notice that you have been added to various
            company channels, such as #arightcoteam, #highfive,
            #stateregistrations, #itsupport, and others. Each group has a brief
            description of what that channel is for and who is on the channel.
          </p>

          <div className="flex flex-row justify-between">
            <Link href="/training/guides-slack" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/guides-slack/downloading-slack" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
