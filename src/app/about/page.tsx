import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

function About() {
  return (
    <div className="flex items-center justify-center h-48">
      <h2>About</h2>
    </div>
  );
}

export default About;
