import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function WelcomeToArightcoHomePage() {
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
      <h1 className="text-3xl pt-10">Welcome To ArightCo, Inc</h1>
      <Link href="/training/welcome-to-arightco/welcome">Welcome!</Link>
      <Link href="/training/welcome-to-arightco/our-origin-story">Our Origin Story</Link>
      <Link href="/training/welcome-to-arightco/our-vision-and-mission">Our Vision and Mission</Link>
      <Link href="/training/welcome-to-arightco/us-management-team">US Management Team</Link>
      <Link href="/training/welcome-to-arightco/financial-services-accounting">Financial Services / Accounting</Link>
      <Link href="/training/welcome-to-arightco/email-setup">Email Setup</Link>
      <Link href="/training/welcome-to-arightco/email-signature">Email Signature</Link>
      

    </div>
  );
}
