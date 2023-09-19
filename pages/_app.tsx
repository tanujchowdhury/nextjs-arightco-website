import "../styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Analytics } from "@vercel/analytics/react";
import { Account } from "../components/intranet/Account.js";
import { Amplify, Storage } from "aws-amplify";

// Amplify Configuration
Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID,
  },
  Storage: {
    AWSS3: {
      bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET,
      region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
      pageSize: 100,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Account>
      <Component {...pageProps} />
      <Analytics />
    </Account>
  );
}

export default App;
