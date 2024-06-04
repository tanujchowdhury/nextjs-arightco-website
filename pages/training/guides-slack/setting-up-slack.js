import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function SettingUpSlack() {
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
          <h3 className="text-3xl">Setting Up Slack</h3>

          <p>
            After creating your account via the invite, you will need to
            configure your settings. Below are the initial steps to set your
            preferences. First, let’s click on the down arrow next to Arightco
            Team. A drop-down menu will appear.
          </p>
          <p>
            Click on "Profile & Account"to update your profile information.
          </p>
          <p>
            Next, a new window will open on the right side of the screen. Click
            on "Edit Profile".
          </p>
          <p>
            The following screen will appear. Let’s fill out your information:
            Full name, Display Name, what you do (title), Phone Number, and
            upload a picture. Once completed, click on "Save Changes".
          </p>
          <p>
            Next, we will set your preferences. Click on the down arrow next to
            Arightco Team and then click on "Preferences".
          </p>
          <p>
            The following screen is where you will set your personal
            preferences.
          </p>
          <p>This will include the below preferences:</p>
          <ul>
            <li className="font-bold">⋅ Notifications</li>
            <li className="font-bold">⋅ Language and Region</li>
            <li className="font-bold">⋅ Messages and Media</li>
            <li className="font-bold">⋅ Theme or color</li>
            <li className="font-bold">⋅ How the sidebar displays</li>
            <li className="font-bold">⋅ Where items should be downloaded to</li>
          </ul>
          <p>
            To get the most out of Slack you will want to connect to the
            following applications:
          </p>
          <ul>
            <li className="font-bold">⋅ Dropbox</li>
            <li className="font-bold">⋅ Zoom</li>
            <li className="font-bold">⋅ Teamwork</li>
            <li className="font-bold">⋅ Slack Foundry</li>
            <li className="font-bold">⋅ Google Calendar</li>
            <li className="font-bold">⋅ Google Drive</li>
          </ul>
          <p>
            By integrating these apps with Slack, you can easily switch between
            them or use them while chatting with a coworker or client.
          </p>
          <p>
            To connect the applications, you will click on "Apps" on the
            sidebar.
          </p>
          <p>
            Next, you will see a list of apps that we connect to Slack. Click on
            the + button to select apps you want to connect to. Let’s walk
            through connecting your Google Calendar.
          </p>
          <p>
            This action will take you back to Slack. Click Connect Account to
            connect to your Google Calendar.
          </p>
          <p>
            You will be prompted to select the email account with the calendar
            you want to connect. Please ensure that you are connecting to your
            Arightco, Inc. Calendar.
          </p>
          <p>
            Click on "Allow". This will allow Slack access to your calendar.
          </p>
          <p>
            It will then prompt you to open it in Slack. Click on "Open Slack".
          </p>
          <p>
            In the Slack app, you will be prompted to confirm the email attached
            to the calendar. Click, "Use This Calendar".
          </p>
          <p>
            Click on "Turn On" to turn on the status update feature. This
            feature alerts the Arightco, Inc. team to the fact that you are busy
            and unavailable.
          </p>
          <p>You are now all set with your Google Calendar.</p>
          <p>
            The remaining apps can be connected by following the same basic
            steps and onscreen prompts.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/guides-slack/downloading-slack"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/guides-slack/using-slack"
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
