import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function UsingSlack() {
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
          <h3 className="text-3xl">Using Slack</h3>

          <p>
            Slack allows us to share files, share your screen, make video calls,
            and chat with co-workers and clients in real-time. This guide will
            cover the basics of communicating via Slack. You can find more
            tutorials by typing @Slack Foundry or going to the support site on
            www.slack.com. The following is an example of the way Slack looks
            upon opening the app. The left portion of the window will display
            your list of Channels, Direct Messages, Integrated Apps, and access
            to your Profile. The main portion of the screen will display the
            conversation for the channel you are on.
          </p>
          <p>
            Starting a conversation is easy! Select the person or channel you
            would like to chat with from your contact list and begin typing.
          </p>
          <p>
            If you are on a channel, you can start a “thread”. Threads are
            direct responses to messages on a channel or conversation. While
            these threads are not private on channels, new responses on threads
            do not notify everyone else on the channel. Additionally, creating
            threads is great for keeping the channel and conversation much more
            organized, since you will be able to find all responses in a single
            thread. You can see an example of a threaded conversation.
          </p>
          <p>
            To start a threaded conversation, hover over the message and click
            on Start Thread on the right side.
          </p>
          <p>
            If you want to view a thread, click on the replies and a new window
            containing the threaded conversation will appear on the right-hand
            side. This is where you will directly respond to the thread.
          </p>
          <p>If you need to call a person in Slack, you have two options:</p>
          <ul>
            <li>⋅ Slack Huddle</li>
            <li>⋅ Zoom call</li>
          </ul>
          <p>
            To use the Zoom call feature, type /zoom. The first time you use
            Zoom, Slack will walk you through setup.
          </p>
          <p>
            Once the setup is complete, you can type in /zoom and Slack will
            automatically generate meeting information for you to start a call.
            You will then click on Join, and you will be connected to the Zoom
            call.
          </p>
          <p>
            To use the Slack Huddle feature, click on the headphone icon at the
            bottom of the screen. You can have group huddles and screen share
            directly through Slack.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/guides-slack/setting-up-slack"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/guides-slack/setting-your-status"
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
