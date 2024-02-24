import React from "react";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import { Metadata } from "next";

const role: string = "User";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: `${role} - Dashboard`,
  },
};

export default function DashboardLayout({
  children,
  admin,
  user,
}: Readonly<{
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}>) {
  return (
    <>
      <div className="pt-2 pb-2 mt-2 flex flex-col justify-center items-center text-black">
        {children}
        {role === "Admin" ? admin : user}
      </div>
    </>
  );
}
