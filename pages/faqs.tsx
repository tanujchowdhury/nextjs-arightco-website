import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/section";
import FAQ from "../components/faq";
import Link from "next/link";

export default function FAQs() {
  return (
    <Layout>
      <Head>
        <title>FAQ&apos;s</title>
      </Head>
      <Section
        title1={"FAQ's"}
        text={
          "Find answers to some of the most common questions regarding our offerings and service model"
        }
        type={3}
      />

      <div className="flex flex-col lg:flex-row lg:items-start xl:mx-32">
        <div className="text-center p-10 lg:text-start flex flex-col gap-5 lg:basis-2/5 ">
          <div className="text-orange font-semibold">FAQ</div>
          <div className="text-blue-dark text-2xl md:text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </div>
          <div className="text-gray-dark md:text-lg max-w-2xl mx-auto">
            Still can’t find the answer you’re looking for? Contact us directly
            and we are happy to assist
          </div>
          <Link href="/contact-us">
            <button className="h-12 w-48 rounded-full text-white font-bold bg-gradient-to-r from-orange-dark to-orange-light hover:from-orange-light hover:to-orange-dark cursor-pointer">
              CONTACT US
            </button>
          </Link>
        </div>
        <div className="m-3 lg:basis-3/5">
          <FAQ
            q={"Will ArightCo provide temporary staffing?"}
            a={
              "ArightCo does not offer temporary staffing solutions. Arightco, Inc. is a professional business consulting firm that provides integrated services for small to medium size businesses for back-of-the house support in Finance and Human Resources services. Our professionals can step in and quickly integrate into your organization as a client partner and long-term solution."
            }
          />
          <FAQ
            q={"Do you offer billing on a per invoice basis?"}
            a={
              "ArightCo closely partners with clients and integrates with your business to provide a seamless solution for immediate needs in the area of Finance or Human Resources Services. ArightCo does not charge clients on a per invoice basis for individual services. We are not an AI accounting solution business."
            }
          />
          <FAQ
            q={"How will ArightCo save my business money?"}
            a={
              "ArightCo has many ways to help small to medium sized businesses leverage their budgets. Check out our brand video to learn more about our workflow"
            }
          />
          <FAQ
            q={"How will ArightCo alleviate my work load?"}
            a={
              "When ArightCo is on board, business owners can shift their focus from day-to-day Finance and HR Operations to strategic leadership to grow their business. We have several services packages to fit the needs of all tiers of small to medium size businesses. Be sure to check out and view our “How We Work” model to learn more about our workflow processes and how ArightCo, Inc. may be the workforce solution you are seeking for your business"
            }
          />
          <FAQ
            q={"What type of companies does ArightCo work with?"}
            a={
              "ArightCo has the capability to work with companies of all sizes, but mainly specializes in small to medium sized companies, with a focus on retail, service, IT among other industries. Our services can scale with the growth of your business over time."
            }
          />
          <FAQ
            q={"Does ArightCo ensure GAAP compliance?"}
            a={"Yes, ArightCo ensures GAAP compliance."}
          />
          <FAQ
            q={"What does the ArightCo onboarding process entail?"}
            a={
              "You will meet with a client partner for 30-60 minutes (on average) in order to have access granted to all necessary accounts, get an understanding of all your current requirements, and we get started the next day!"
            }
          />
          <FAQ
            q={"What kind of software does ArightCo use?"}
            a={
              "ArightCo highly recommends QuickBooks Online for accounting packages. However, ArightCo can also integrate with Xero, Netsuite, and Intacct. ArightCo also uses these vendors."
            }
          />
          <FAQ
            q={"Does ArightCo work with companies outside the US?"}
            a={
              "Yes, ArightCo serves international companies. ArightCo has partnerships with international accounting firms, and will coordinate with a local accounting firm in the country you are located in."
            }
          />
          <FAQ
            q={"Is there a dedicated contact that will oversee my business?"}
            a={
              "Yes, ArightCo has dedicated points of contact for each client, ensuring easy access to your resources."
            }
          />
          <FAQ
            q={"How does ArightCo prevent your financial data?"}
            a={"ArightCo uses data-encrypted, secure file sharing platforms."}
          />
          <FAQ
            q={"When will I receive my financials?"}
            a={
              "ArightCo strives to provide KPIs and financials by the 15th of every month, for the prior month."
            }
          />
          <FAQ
            q={"Where is the ArightCo team based?"}
            a={"ArightCo has locations in both the United States and India"}
          />
          <FAQ
            q={"What is the response time for questions?"}
            a={"ArightCo offers a 24-hour turnaround."}
          />
          <FAQ
            q={"What qualifications do ArightCo professionals have?"}
            a={
              "The ArightCo team is made up of accountants, chartered accountants (CA), Certified Public Accountants (CPA), Chief Financial Officers (CFO), SHRM Certified Professionals."
            }
          />
          <FAQ
            q={"Does ArightCo file taxes?"}
            a={
              "ArightCo will manage 1099s and state-specific annual reports and sales tax filings. We partner with a tax firm to complete annual federal and state taxes"
            }
          />
        </div>
      </div>
    </Layout>
  );
}
