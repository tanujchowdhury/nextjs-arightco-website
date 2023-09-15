import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);
  const { authenticate, setAuthentication } = useContext(AccountContext);
  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        setAuthentication(true);
        setAuthFailed(false);
        setCookie(null, "userAuthenticated", "true", {
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
        onLogin();
        router.push("/dashboard");
      })
      .catch((data) => {
        console.log("Failed to login", data);
        setAuthFailed(true);
      });
  };

  return (
    <div className="relative min-h-screen">
      {/* The background image */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <Image
          src="/background.jpg"
          alt="Background Image"
          fill
          style={{objectFit: "cover"}}
          quality={100}
        />
      </div>
      
      <div className="p-32 flex flex-row justify-evenly items-center">
        <form
          onSubmit={onSubmit}
          className="space-y-8 bg-blue shadow-md p-8 rounded-lg w-96 mt-20 text-orange bg-opacity-75"
        >
          <h3 className="text-center text-3xl font-semibold">Client Portal</h3>
          <div className="space-y-4">
            <label htmlFor="email" className="block font-medium text-lg">
              Email
            </label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="p-2 border border-blue-500 rounded w-full"
            />

            <div className="relative">
              <label htmlFor="password" className="block font-medium text-lg">
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="p-2 border border-blue-500 rounded w-full"
              />
              <span
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute right-2 top-12 transform -translate-y-1/2 text-xl cursor-pointer"
              >
                {isPasswordVisible ? "👁️" : "🙈"}
              </span>
              {authFailed && (
                <p className="text-red-500 mt-2">
                  We couldn't verify your account.
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-2 rounded text-xl bg-orange text-white hover:bg-orange-dark transition-colors duration-150"
          >
            Log In
          </button>
        </form>
        <div className="space-y-8 bg-gray-50 shadow-md p-8 rounded-lg w-96 mt-20 bg-blue text-orange bg-opacity-80">
          <h3 className="text-center text-3xl font-semibold">
            Employee Portal
          </h3>
          <div className="space-y-4">
            <label htmlFor="email" className="block font-medium text-lg">
              Email
            </label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              disabled
              placeholder="Coming Soon"
            />

            <label htmlFor="password" className="block font-medium text-lg">
              Password
            </label>
            <input
              type="password"
              className="p-2 border rounded w-full"
              disabled
              placeholder="Coming Soon"
            />
          </div>
          <button
            type="button"
            disabled
            className="mt-4 w-full py-2 rounded text-xl bg-gray-300 text-white cursor-not-allowed"
          >
            Coming Soon!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
