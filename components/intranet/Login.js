import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import Image from "next/image";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { sweepRight } from "../animations";

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
        // console.log("Logged in!", data);
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
        // console.log("Failed to login", data);
        setAuthFailed(true);
      });
  };

  return (
    <div className="relative min-h-screen">
      {/* The background image */}
      <div className="inset-0 overflow-hidden bg-[#5f6b77]">
        <Image
          src="/background.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority={true}
        />
      </div>

      <div className="py-32 flex flex-row justify-around">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
        >
          <form
            onSubmit={onSubmit}
            className="space-y-8 bg-gradient-to-r from-blue-dark to-blue-light shadow-md p-8 rounded-lg w-[600px] max-[800px]:w-[90vw] max-[540px]:w-[98vw] mt-20 text-orange"
          >
            <h3 className="text-center text-3xl font-semibold">Login</h3>
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
                  className="absolute right-2 top-12 transform -translate-y-1/2 text-xl cursor-pointer text-orange"
                >
                  {isPasswordVisible ? (
                    <FontAwesomeIcon icon={faEye} className="w-6 h-6" />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} className="w-6 h-6" />
                  )}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
