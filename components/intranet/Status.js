import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";


const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      // console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? (
        <button
          className="hover:text-orange-dark flex items-center cursor-pointer max-[1100px]:text-sm"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
        className="hover:text-orange-dark flex items-center cursor-pointer max-[1100px]:text-sm"
        onClick={logout}
      >
        Please Login
      </button>
      )}
    </div>
  );
};

export default Status;
