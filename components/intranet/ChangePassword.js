import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const { getSession } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setPasswordMessage("");

    if (newPassword !== confirmPassword) {
      setPasswordMessage("New Password and Confirm Password must match");
      setMessageColor("red");
      return;
    }

    getSession().then(({ user }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          // console.error(err);
          setPasswordMessage(err.message);
          setMessageColor("red");
        } else {
          // console.log(result);
          setPasswordMessage("Password updated successfully");
          setMessageColor("green");
        }
      });
    });
  };

  return (
    <div className="p-4 text-blue-dark">
      <h1 className="text-2xl font-semibold mb-2">Change your password here</h1>
      <form
        onSubmit={onSubmit}
        className="max-w-md w-full bg-white p-8 shadow-md rounded-lg space-y-4"
      >
        <div className="relative">
          <label
            htmlFor="current-password"
            className="block text-sm font-medium text-gray-700"
          >
            Current password
          </label>
          <input
            type={isCurrentPasswordVisible ? "text" : "password"}
            id="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
          <span
            onClick={() =>
              setIsCurrentPasswordVisible(!isCurrentPasswordVisible)
            }
            className="absolute right-2 top-11 transform -translate-y-1/2 text-xl cursor-pointer"
          >
            {isCurrentPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="w-6 h-6" />
            )}
          </span>
        </div>

        <div className="relative">
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700"
          >
            New password
          </label>
          <input
            type={isNewPasswordVisible ? "text" : "password"}
            id="new-password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
          <span
            onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
            className="absolute right-2 top-11 transform -translate-y-1/2 text-xl cursor-pointer"
          >
            {isNewPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="w-6 h-6" />
            )}
          </span>
        </div>

        <div className="relative">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
          <span
            onClick={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
            className="absolute right-2 top-11 transform -translate-y-1/2 text-xl cursor-pointer"
          >
            {isConfirmPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="w-6 h-6" />
            )}
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-3 rounded-md bg-blue-dark text-white hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-light focus:ring-opacity-50"
        >
          Change password
        </button>
        {passwordMessage && (
          <p className={`text-${messageColor}-500 mt-2`}>{passwordMessage}</p>
        )}
      </form>
      <p className="p-4 text-sm text-gray-600">
        Note: Password must have minimum length of at least six characters and
        must contain at least 1 of all the following: Number, Special Character,
        Uppercase Letter, Lowercase Letter
      </p>
    </div>
  );
};
