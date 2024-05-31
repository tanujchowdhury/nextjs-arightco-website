import Link from "next/link";

export default function GuidesSlackHomePage() {
  return (
    <div className="p-10 flex flex-col gap-6">
      <Link className="absolute top-0 left-0 p-4" href="/training">
        ← Back to Training Home Page
      </Link>
      <h1 className="text-3xl pt-10">Guides - Slack</h1>
      <Link href="/training/guides-slack/slack-guide">Slack Guide</Link>
      <Link href="/training/guides-slack/downloading-slack">Downloading Slack</Link>
      <Link href="/training/guides-slack/setting-up-slack">Setting Up Slack</Link>
      <Link href="/training/guides-slack/using-slack">Using Slack</Link>
      <Link href="/training/guides-slack/setting-your-status">Setting your Status</Link>
      <Link href="/training/guides-slack/channel-guide">Channel Guide</Link>
    </div>
  );
}
