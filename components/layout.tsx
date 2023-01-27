import Navbar from "./sections/navbar";
import Footer from "./sections/footer";
import SignUp from "./sections/signup";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Full-Service Finance & Accounting Solutions | Reduce costs and give your business predictability with ArightCo’s integrated Finance, Accounting, & Advisory teams."
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <SignUp />
      <Footer />
    </div>
  );
}
