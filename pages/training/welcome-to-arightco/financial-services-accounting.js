import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function FinancialServicesAccounting() {
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
          <h3 className="text-3xl">Financial Services / Accounting</h3>
          <p>
            ArightCo provides a wide range of financial services and accounting
            solutions to IT and SaaS organizations. We understand the unique
            financial needs of these types of businesses and have developed
            custom solutions to meet those needs. Our team of experts is
            well-versed in the latest accounting practices and technologies, and
            we are committed to providing our clients with accurate and timely
            financial information.
          </p>
          <p className="font-bold">Our financial services include:</p>
          <ul>
            <li>Bookkeeping</li>
            <li>Financial reporting</li>
            <li>Budgeting and Forecasting</li>
            <li>Tax planning and Preparation</li>
            <li>Financial Scenario Modelling</li>
            <li>Cashflow Forecasting</li>
            <li>Audit Preparation</li>
            <li>Other customized solutions and much more.</li>
          </ul>
          <p>
            We work closely with our clients to understand their specific needs
            and tailor our services accordingly. Whether you are a startup
            looking to get your finances in order or an established business
            looking to streamline your accounting processes, ArightCo can help.
          </p>
          <p>
            In addition to our financial services, we also offer a range of
            accounting solutions designed to help IT and SaaS organizations
            manage their finances more effectively. Our solutions include
            accounting software implementation, process improvement, and
            internal controls development. We can help you identify areas where
            you can improve efficiency, reduce costs, and increase
            profitability.
          </p>
          <p>
            At ArightCo, we understand that every business is unique, which is
            why we offer endless scalability. Our services can grow with you
            from inception to exit, ensuring that you always have the support
            you need to succeed. Whether you are just starting out or are a
            well-established business, we can provide the financial expertise
            you need to achieve your goals.
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/welcome-to-arightco/us-management-team"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/welcome-to-arightco/email-setup"
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
