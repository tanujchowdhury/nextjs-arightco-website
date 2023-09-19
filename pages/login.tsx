import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import Login from "../components/intranet/Login";
import { Account } from "../components/intranet/Account";
import Layout from "../components/layouts/layout";

function LoginPage() {
  const [key, setKey] = useState(Math.random());

  return (
    <Layout>
      <Account>
        <Login onLogin={() => setKey(Math.random)} />
      </Account>
    </Layout>
  );
}

export default LoginPage;
