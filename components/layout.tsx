import Navbar from "./navbar";
import Footer from "./footer";
import SignUp from "./signup";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="my-96"></div>
      <main>{children}</main>
      <div className="my-96"></div>
      <SignUp />
      <Footer />
    </div>
  );
}
