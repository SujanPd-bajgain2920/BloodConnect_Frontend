//Home.js
import { useEffect } from "react";
import { useState, useRef } from "react";
import React from "react";
import Login from "../../auth/Login";
import Info from "./Info";
import { Link } from "react-router-dom";
import Faq from "./FAQ/Faq";
import Header from "./Header";

export default function Home() {
  return (
    <div className="">
      <Header />

      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <Info />
      </aside>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        FAQ
      </h1>
      <Faq />
    </div>
  );
}
