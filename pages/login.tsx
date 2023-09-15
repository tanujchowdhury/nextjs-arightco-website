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
        region: "us-east-2",
        userPoolId: "us-east-2_oZTHfDSkN",
        userPoolWebClientId: "68mbdpulosjsaup315v2qeobab",
        identityPoolId: "us-east-2:ac306a72-057e-454b-b6d7-048fc0e772a9",
      },
      Storage: {
        AWSS3: {
          bucket: "react-bucket-tanuj",
          region: "us-east-2",
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
