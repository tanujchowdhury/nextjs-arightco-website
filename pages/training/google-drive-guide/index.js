import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function GoogleDriveGuideHomePage() {
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
    <div className="p-10 flex flex-col gap-6">
      <Link className="absolute top-0 left-0 p-4" href="/training">
        ← Back to Training Home Page
      </Link>
      <h1 className="text-3xl pt-10">Google Drive Guide</h1>
      <Link href="/training/google-drive-guide/downloading-google-drive">Downloading Google drive</Link>
      <Link href="/training/google-drive-guide/shared-google-drive">Shared Google Drive</Link>
      <Link href="/training/google-drive-guide/adding-shared-google-drive">Adding Shared google drive</Link>
      <Link href="/training/google-drive-guide/adding-or-removing-user">Adding or removing user</Link>
      <Link href="/training/google-drive-guide/saving-files">Saving files</Link>
      <Link href="/training/google-drive-guide/google-drive-faqs">Google drive FAQs</Link>

    </div>
  );
}
