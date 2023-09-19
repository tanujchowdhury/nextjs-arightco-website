import React, { useState, createContext, useEffect } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./UserPool";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";


const AccountContext = createContext({
  authenticate: () => {},
  authenticated: false,
  getSession: () => {},
  logout: () => {},
  checkAuthState: () => {},
  setAuthentication: () => {}
});

const Account = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  const setAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };
  

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject();
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }

                  resolve(results);
                }
              });
            });
            resolve({ user, ...session, ...attributes });
          }
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          // console.log("onSuccess: ", data);
          setAuthenticated(true);
          resolve(data);
        },
        onFailure: (err) => {
          // console.error("onFailure: ", err);
          setAuthenticated(false);
          reject(err);
        },
        newPasswordRequired: (data) => {
          // console.log("newPasswordRequired: ", data);
          resolve(data);
        },
      });
    });
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        user.signOut();
    }
    destroyCookie(null, "userAuthenticated");
    // console.log("Logged out")
    router.push("/login");
};


  useEffect(() => {
    getSession()
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => {
        setAuthenticated(false);
      });
  }, []);

  const checkAuthState = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setAuthenticated(true);
    } catch (e) {
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        authenticated,
        getSession,
        logout,
        checkAuthState,
        setAuthentication,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};
export { Account, AccountContext };
