import Navbar from "./navbar";
import Footer from "./footer";
import React from "react";
import SignUp from "./signup";

export default function Layout({ children } : {children: React.ReactNode}) {
    return (
        <div>
            <Navbar />
            <div className="my-96"></div>
            <main>{children}</main>
            <div className="my-96"></div>
            <SignUp />
            <Footer />
        </div>
    ); 
  }