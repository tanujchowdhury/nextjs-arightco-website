import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function USManagementTeam() {
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
    return <div></div>;
  }
  return (
    <>
      <Link
        className="absolute top-0 left-0 p-4"
        href="/training/welcome-to-arightco"
      >
        ← Back to Welcome To ArightCo, Inc
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">US Management Team</h3>

          <table className="table-auto">
            <tbody>
              <tr>
                <td className="p-1">Sushama Chowdhury</td>
                <td>Co-Founder & Directing Manager</td>
              </tr>
              <tr>
                <td className="p-1">Tanmoy Chowdhury</td>
                <td>Co-Founder & President</td>
              </tr>
              <tr>
                <td className="p-1">Katie Nelson</td>
                <td>Senior Vice President & Head of US Operations</td>
              </tr>
              <tr>
                <td className="p-1">Thomas Stier</td>
                <td>Senior Client Partner & Executive Consultant</td>
              </tr>
              <tr>
                <td className="p-1">Biju Mathew</td>
                <td>Senior Client Partner & Controller</td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/welcome-to-arightco/our-vision-and-mission"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/welcome-to-arightco/financial-services-accounting"
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
