import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function SettingYourStatus() {
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
          <h3 className="text-3xl">Setting Your Status</h3>

          <p>
            This section will show guidance for setting your daily personal
            Slack status settings. Having your Slack status showing if you are
            available, away, in a meeting, on vacation, on lunch, or any other
            status helps maximize the team productivity and communication. By
            adjusting your Slack status, it allows other team members to know if
            you are available or not at any given time. If you have linked your
            Google Calendar to Slack, it will automatically note when you are in
            a meeting. It will match your Arightco, Inc. calendar and show
            notifications that you are in a meeting without having to manually
            update your status.
          </p>
          <p>
            To set your status, first, click on your picture in the top left of
            the Slack screen.
          </p>
          <p>
            Next, you can use the Update Your Status field to type in or by
            selecting a status by clicking on it.
          </p>
          <p>
            Below is a description of the available preset statuses that can be
            selected:
          </p>
          <ul>
            <li>
              ⋅ <span className="font-bold">In A Meeting</span> – will show
              automatically if Google Calendar has been linked.
            </li>
            <li>
              ⋅ <span className="font-bold">Appointment</span> – Use this when
              you have a personal appointment.
            </li>
            <li>
              ⋅ <span className="font-bold">Out Sick</span> – Use this when you
              are out due to illness.
            </li>
            <li>
              ⋅ <span className="font-bold">Vacationing</span> – Use this when
              you are out due to PTO/Vacation
            </li>
            <li>
              ⋅ <span className="font-bold">Working Remotely</span> – Use this
              when you are working in a remote location you typically don’t work
              from
            </li>
          </ul>
          <p>
            If none of the preset statuses work for what you are doing, then you
            can set a custom status to show. This is useful for the below
            situations:
          </p>
          <ul>
            <li className="font-bold">⋅ Taking lunch or a break</li>
            <li className="font-bold">
              ⋅ Running Client/Arightco Related Errands
            </li>
            <li className="font-bold">⋅ Working on a project</li>
            <li className="font-bold">
              ⋅ Running Personal Errands i.e., picking up kids, walking the dog,
              etc. Select or Type in the appropriate status.
            </li>
            <li className="font-bold">
              ⋅ If you type your status manually, you can select an emoji to
              match the status. Some examples are listed below:
            </li>
          </ul>
          <p>
            If you type your status manually, you can select an emoji to match
            the status. Some examples are listed below:
          </p>
          <ul>
            <li className="font-bold">
              ⋅ Food Item – Shows you are eating lunch or on a break.
            </li>
            <li className="font-bold">
              ⋅ Do Not Disturb – Shows you are not available.
            </li>
            <li className="font-bold">
              ⋅ Vehicle – Running Company or Personal Errands
            </li>
            <li className="font-bold">⋅ Phone – On a call</li>
            <li className="font-bold">⋅ Airplane - Traveling</li>
          </ul>
          <p>
            This will get you started with Slack. Remember, you can type in
            @SlackFoundry for more training or go to the Slack help center{" "}
            <Link
              className="text-blue-500"
              href="https://slack.com/intl/en-in/help"
            >
              https://slack.com/intl/en-in/help
            </Link>{" "}
            for more in-depth help. Feel free to reach out to our IT Manager,
            Training Manager, or Katie Nelson for any questions or help that you
            need as well.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/guides-slack/using-slack"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/guides-slack/channel-guide"
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
