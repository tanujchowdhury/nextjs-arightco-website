import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import { destroyCookie } from 'nookies';


const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? (
        <button
          className="text-orange-500 px-4 py-2 border border-orange-500 rounded hover:bg-orange-100 focus:outline-none focus:bg-orange-200 transition-colors duration-150"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
        className="text-red-500 px-4 py-2 border border-red-500 rounded hover:bg-red-100 focus:outline-none focus:bg-red-200 transition-colors duration-150"
        onClick={logout}
      >
        Please Login
      </button>
      )}
    </div>
  );
};

export default Status;
