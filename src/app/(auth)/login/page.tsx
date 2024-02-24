import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-48">
      <h2>Login</h2>
    </div>
  );
}

export default Login;
