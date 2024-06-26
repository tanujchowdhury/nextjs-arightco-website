import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function OutVisionAndMission() {
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
          <h3 className="text-3xl">Our Vision & Mission</h3>
          <p>
            Our vision and mission at ArightCo, Inc revolve around providing
            exceptional customer service with quality accounting, HR, and
            back-office solutions for small to mid-size companies. Our goal is
            to become an extension of our client's workforce by creating a
            dynamic and technologically driven culture. We believe that this
            approach ensures that processes are streamlined and efficient,
            resulting in a better overall experience for our clients.
          </p>
          <p>
            One of the key drivers behind our vision and mission is our values.
            At ArightCo, Inc, we value integrity, adaptability, and
            dependability. These values guide us in everything we do, from the
            services we offer to the way we interact with our clients. We
            believe that by embodying these values, we can create a culture of
            trust and respect that benefits everyone involved.
          </p>
          <p>
            Ultimately, our vision and mission are all about supporting our
            clients.  Whether you need help with accounting, HR, or back-office
            tasks, we are here to help. Our goal is to make your life easier so
            that you can focus on what really matters - growing your business.
          </p>
          <p>
            <span className="font-bold">Integrity</span> - We Strive to maintain
            the highest integrity in our workforce, and this not only includes
            the work we do, but the culture we foster. With integrity being at
            the forefront of our values, we know that the services we provide
            will always be above board and honest.
          </p>
          <p>
            <span className="font-bold">Adaptability</span> - Our adaptability
            is not only where we work, but how we work as well. Being adaptable
            allows us to integrate new workflows and technology that helps our
            clients in streamlining their back-office work.
          </p>
          <p>
            <span className="font-bold">Dependability</span> - We are driven by
            our strong desire to be dependable, accurate, and responsive. Being
            detail-oriented and efficient provides our clients with better
            services and more accurate reports.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/welcome-to-arightco/our-origin-story"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/welcome-to-arightco/us-management-team"
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
