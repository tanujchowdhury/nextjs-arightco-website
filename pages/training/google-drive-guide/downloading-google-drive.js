import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function DownloadingGoogleDrive() {
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
      <Link
        className="absolute top-0 left-0 p-4"
        href="/training/google-drive-guide"
      >
        ← Back to Google Drive Guide
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Downloading Google drive</h3>
          <p>
            At Arightco, Inc., we utilize Google Drive because we prioritize the
            security of our client’s data. Google Drive is a cloud-based
            document storage program. By storing all documents in the cloud, we
            can access them at any time and can remove access at any time. Some
            clients may use another cloud-based document storage like Dropbox,
            SharePoint, box, etc. If the client uses a different
            documentstorage system, the Client Partner will provide you with
            access to it.
          </p>
          <p>
            The primary reason why{" "}
            <span className="font-bold">
              we do<span className="text-red-600">NOT</span>store anything
              directly on our laptops
            </span>{" "}
            is so that our client’s information stays secure. Should your laptop
            be lost, stolen, or compromised in any way, we can remotely remove
            access to all files and ensure the security of our client’s data.
          </p>
          <p>
            During your first days with Arightco, Inc. you will be given access
            to your Google Drive account and the client folders that you will
            need access to. You will need to download the Google Drive
            application to your desktop.
          </p>
          <p>
            This guide will walk you through the steps of downloading the Google
            Drive Application and the conventions we use to save shared files.
            To ensure ease of use and transition, we expect everyone to save all
            client information in the same format. This allows each staff member
            to easily transfer to a new client
          </p>
          <p>
            First, you will need to{" "}
            <Link
              href="https://www.google.com/drive/download/"
              className="text-blue-500"
            >
              download
            </Link>{" "}
            Google Drive to your computer. Once you go to the link for the
            download you will click on Download Drive for Desktop.
          </p>
          <p>
            Next, you will click on the setup file when it finishes downloading.
            This will start the setup process to get google drive onto your
            laptop.
          </p>
          <p>
            During the setup, you will need to enter your Arightco, Inc. email
            address and the password for it. Once it has been downloaded, you
            will see it in your file explorer under This PC.
          </p>
          <p>
            To make it easier to access you can right-click on the drive and
            select "Pin to Quick Access".
          </p>

          <div className="flex flex-row justify-between">
            <Link href="/training/google-drive-guide" className="text-xl mt-4">
              ← Previous Step
            </Link>
            <Link href="/training/google-drive-guide/shared-google-drive" className="text-xl mt-4">
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
