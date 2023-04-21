import Head from "next/head";
import Layout from "../components/layouts/layout";
import Section from "../components/sections/section";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>
          Privacy Policy | Finance & Accounting Solutions | ArightCo
        </title>
      </Head>
      <Section type={3} title1={"Privacy Policy"} />
      <div className="bg-white mx-3 xl:mx-32 rounded-xl mt-16 p-8">
        <div className="font-bold lg:text-lg pb-8">
          Given below are the privacy policies of arightco.com. Users are
          requested to read it carefully.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-4">
          Information Collected
        </div>
        <div className="text-sm lg:text-base pb-8">
          Before registering, it is required to give your personal information
          so that you are no longer anonymous to us. It may include your name
          and other important information. The information given to us is used
          on the website for better advancements.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-4">
          Utility of Personal and Other Information
        </div>
        <div className="text-sm lg:text-base pb-8">
          The main purpose of collecting personal and other information is to
          give our revered customers customized services. This will enable
          better communication between us and ensure maximum benefits. Most of
          the services are free while some of them are paid. With our extensive
          promotions throughout our website, users start receiving various kinds
          of mails, phone calls, and SMS notifications from assorted buyers
          across US. We do keep records of users buying and browsing activities
          on the site.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-4">
          Sharing Information
        </div>
        <div className="text-sm lg:text-base pb-8">
          Though, it is generally avoidable to disclose any personal information
          to the customers. However, under special circumstances, this can be
          done if arightco.com has permission from the user to do the same.
          Email address is not displayed by us. Account information can be given
          if the company feels that someone is causing damage either
          intentionally or unintentionally. Sometimes in order to maintain
          services and improve standards, information can be provided. In case
          of a sale, personal information can be transferred.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-4">
          Update of Information
        </div>
        <div className="text-sm lg:text-base pb-8">
          One can edit his/her account by logging into his account and also by
          sending us the request. The up-gradation of the information may take
          some time because of verification and other policies. Users can also
          delete his/her account. However, other information provided will be
          put on our archive record.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-4">
          Safety of Information
        </div>
        <div className="text-sm lg:text-base pb-8">
          With our policy, we do not sell our data to a third party which can be
          misused by others. We do not sell users’ personal information and
          business information to others unless permitted to do so by the user.
          Although, we take all the steps to ensure that there is no leakage of
          information provided to us, data transmission on the internet is not
          100% safe. Information both personal and business is open to the
          public so give them with caution.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-4">
          Google and the Double Click DART cookie
        </div>
        <div className="text-sm lg:text-base pb-8">
          Google provides various ads on our site with its cookies. Google’s
          DART cookie provides ads to the users based on their preferences and
          visit. It is possible to opt-out of DART cookie through Google ad and
          content network privacy policy.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-4">
          Variation In Privacy Policy
        </div>
        <div className="text-sm lg:text-base">
          There are regular changes in the policies of the company, hence it is
          necessary to check the website for an update on privacy policies on a
          regular basis.
        </div>
      </div>
    </Layout>
  );
}
