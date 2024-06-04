import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function DownloadingSlack() {
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
          <h3 className="text-3xl">Downloading Slack</h3>

          <p>
            To use all of Slack’s great features, you will need to download the
            app to your desktop. The following is a quick step-by-step guide for
            downloading the Slack app. Additionally, you may download the app to
            your mobile device. If you have any questions or concerns regarding
            the download, feel free to reach out to the Training Manager or IT
            Manager for assistance. First, Go to www.slack.com and scroll to the
            bottom of the page and click on Download Slack.
          </p>
          <p>Next, Click on "Download for Windows 10".</p>
          <p>Next, click on "Get" and it will start to download.</p>
          <p>Finally, once it has been downloaded you will be asked to sign in.</p>

          <div className="flex flex-row justify-between">
            <Link href="/training/guides-slack/slack-guide" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link
              href="/training/guides-slack/setting-up-slack"
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
