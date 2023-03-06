import React from "react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <Navbar />
      </div>
      <div className="flex h-[92.5vh]"></div>
    </div>
  );
};
