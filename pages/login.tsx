import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import Login from "../components/intranet/Login";
import { Account } from "../components/intranet/Account";
import Layout from "../components/layouts/layout";

function LoginPage() {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
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
  }, []);

  return (
    <Layout>
      <Account>
        <Login onLogin={() => setKey(Math.random)} />
      </Account>
    </Layout>
  );
}

export default LoginPage;
