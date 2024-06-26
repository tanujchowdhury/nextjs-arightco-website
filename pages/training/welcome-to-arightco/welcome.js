import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function Welcome() {
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
          <h3 className="text-3xl">Welcome!</h3>
          <h4 className="font-bold">
            Welcome to ArightCo, Inc! We are thrilled to have you as a part of
            our team
          </h4>
          <p>
            As a company, we take pride in our ability to attract top talent
            that can contribute to achieving our goals and progressing their
            careers. We believe that you have the potential to do just that.
          </p>
          <p>
            As a member of our team, you will find that we are committed to
            challenging you to pursue excellence. We believe that by doing so,
            you will find your work with us to be truly rewarding. We encourage
            all of our employees to think outside the box and to make
            suggestions that can help us continue to be a leader in accounting
            services.
          </p>
          <p>
            At ArightCo, Inc., we are driven by the success of our employees. We
            believe that creative and productive employees are essential to
            achieving our mission. We are committed to empowering our employees
            to make suggestions and take ownership of their work. Through
            dedicated hard work and commitment from every employee, we strive to
            continue to be a leader in accounting services.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/welcome-to-arightco/"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/welcome-to-arightco/our-origin-story"
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
