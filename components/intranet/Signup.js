import React, { useState } from "react";
import UserPool from "./UserPool";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");

  const onSubmit = (event) => {
    event.preventDefault();
    setMessage("");

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        // console.error(err);
        setMessage(err.message);
        setMessageColor("red");
      } else {
        // console.log(data);
        setMessage("User registered successfully.");
        setMessageColor("green");
      }
    });
  };

  return (
    <div className="p-4 text-blue-dark">
      <h1 className="text-2xl font-semibold mb-2">Add new users here</h1>
      <h3 className="text-base font-semibold leading-7">
        Step 1: Contact a client for their preferred email. For security
        purposes, only allow company emails. <br />
        Step 2: Enter the email and a temporary password into the form below.
        Click the submit button. <br />
        <br />
        The new user is now Registered, but needs to be Confirmed and assigned
        to a Group. <br />
        Step 3: Go into AWS Cognito and Confirm the user. <br />
        Step 4: Assign the user to a Group. <br />
        Step 5: Contact the user and prompt them to log in to the system. <br />
        Step 6: The user can now log in and change their password. <br />
      </h3>

      <form
        onSubmit={onSubmit}
        className="max-w-md w-full bg-white p-8 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            User's Email
          </label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            id="email"
            type="email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Temporary Password
          </label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            id="password"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-3 rounded-md bg-blue-dark text-white hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-light focus:ring-opacity-50"
          >
            Sign Up
          </button>
          {message && (
            <p className={`text-${messageColor}-500 mt-4`}>{message}</p>
          )}
        </div>
      </form>
      <p className="p-4 text-sm text-gray-600">
        Note: Password must have minimum length of at least six characters and
        must contain at least 1 of all the following: Number, Special Character,
        Uppercase Letter, Lowercase Letter
      </p>
    </div>
  );
};

export default Signup;
