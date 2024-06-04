import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function KeeperSecurityGuideHomePage() {
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
      <h1 className="text-3xl pt-10">Keeper Security Guide</h1>
      <Link href="/training/keeper-security-guide/creating-a-shared-folder">Creating a shared folder</Link>
      <Link href="/training/keeper-security-guide/sharing-a-folder">Sharing a folder</Link>
      <Link href="/training/keeper-security-guide/saving-a-record">Saving a Record</Link>
      <Link href="/training/keeper-security-guide/saving-a-contact-record">Saving a contact record</Link>
      <Link href="/training/keeper-security-guide/saving-a-payment-record">Saving a Payment record</Link>
      <Link href="/training/keeper-security-guide/moving-a-record">Moving a record</Link>
      <Link href="/training/keeper-security-guide/keeper-faqs">Keeper FAQs</Link>

    </div>
  );
}
