import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import SignUp from "../sections/signup";
import Head from "next/head";
import BackToTopButton from "../backtotopbutton";
import Script from "next/script";
import HelpButton from "../helpbutton";

export default function Layout({
  children,
  backToTopButtonStartPosition,
  backToTopButtonTarget,
}: {
  children: React.ReactNode;
  backToTopButtonStartPosition?: number;
  backToTopButtonTarget?: number;
}) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Reduce costs and give your business predictability with ArightCo’s integrated Finance, Accounting, & Advisory teams."
        />
      </Head>
      <Script src="https://cdn.pagesense.io/js/arightco/76fdcb3935684ddb9d78f0aec5aa4366.js"></Script>
      <Navbar />
      <main>{children}</main>
      <SignUp />
      <Footer />
      <HelpButton />
      {/* <BackToTopButton
        startPosition={backToTopButtonStartPosition}
        target={backToTopButtonTarget}
      /> */}
    </>
  );
}
