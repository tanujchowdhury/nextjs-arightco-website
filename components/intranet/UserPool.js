import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_oZTHfDSkN",
  ClientId: "68mbdpulosjsaup315v2qeobab",
};

export default new CognitoUserPool(poolData);
