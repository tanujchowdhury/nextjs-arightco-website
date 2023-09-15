import "../styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Analytics } from "@vercel/analytics/react";
import { Account } from "../components/intranet/Account.js"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Account>
      <Component {...pageProps} />
      <Analytics />
    </Account>
  );
}
