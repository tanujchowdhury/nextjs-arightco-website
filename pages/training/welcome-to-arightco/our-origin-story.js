import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";
import Image from "next/image";

export default function OurOriginStory() {
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
          <h3 className="text-3xl">Our Origin Story</h3>
          <h4 className="font-bold text-xl">Meet our Founders...</h4>
          <Image
            src={"/team/Sushama-Chowdhury.png"}
            alt={"Sushama Chowdhury profile picture"}
            width={100}
            height={100}
            className="object-cover rounded-3xl"
            quality={100}
          ></Image>
          <p className="font-bold">Sushama Chowdhury </p>
          <p className="italic">Co-Founder & Directing Manager</p>
          <Image
            src={"/team/Tanmoy-Chowdhury.png"}
            alt={"Tanmoy Chowdhury profile picture"}
            width={100}
            height={100}
            className="object-cover rounded-3xl"
            quality={100}
          ></Image>
          <p className="font-bold">Tanmoy Chowdhury </p>
          <p className="italic">Co-Founder & President</p>
          <p>
            Sushama and Tanmoy Chowdhury founded ArightCo, Inc. in 2008 with a
            mission to provide outstanding customer service and professional
            quality finance & accounting solutions to small & medium sized
            businesses.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/welcome-to-arightco/welcome"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/welcome-to-arightco/our-vision-and-mission"
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
