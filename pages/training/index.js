import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../components/intranet/Account";
import { useRouter } from "next/router";

export default function TrainingHomePage() {
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
      <div className="p-10 flex flex-col items-center justify-center">
        <h1>Please Login to access this page</h1>
        <button onClick={() => router.push('/login')} className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 flex flex-col gap-6">
      <Link className="absolute top-0 left-0 p-4" href="/dashboard">
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl pt-10 ">Training Manual</h1>
      <Link href="/training/welcome-to-arightco">Welcome To ArightCo, Inc</Link>
      <Link href="/training/day-1-training">Day 1 Training</Link>
      <Link href="/training/day-2-training">Day 2 Training</Link>
      <Link href="/training/day-3-training">Day 3 Training</Link>
      <Link href="/training/day-4and5-training">Day 4 & 5 Training</Link>
      <Link href="/training/guides-slack">Guides - Slack</Link>
      <Link href="/training/keeper-security-guide">Keeper Security Guide</Link>
      <Link href="/training/google-drive-guide">Google Drive Guide</Link>
    </div>
  );
}
