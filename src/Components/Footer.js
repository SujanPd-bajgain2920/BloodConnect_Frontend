import React from "react";
import logo2 from "./assets/logo2.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-red-900 border-t border-gray-600">
      <div className="mx-auto max-w-screen-xl   lg:py-8 flex items-center justify-between">
        <div>
          <img src={logo2} alt="logo" className="w-24 h-auto" />
        </div>
        <div className="flex gap-4">
          <i className="fab fa-facebook cursor-pointer text-white text-2xl hover:text-blue-500"></i>
          <i className="fab fa-instagram cursor-pointer text-white text-2xl hover:text-pink-600"></i>
          <i className="fas fa-at cursor-pointer text-white text-2xl hover:text-red-600"></i>
          <i className="fab fa-telegram cursor-pointer text-white text-2xl hover:text-blue-700"></i>
        </div>
      </div>

      <hr className=" w-auto   border-b border-gray-600" />

      <div className="mx-auto max-w-screen-xl p-4 flex justify-between items-center">
        <p className="text-sm text-white mb-0">
          © BLOOD-CONNECT 2024. We love our users!
        </p>
        <div className="flex gap-4">
          <Link
            to="#"
            className="text-white text-sm font-semibold hover:text-gray-300"
          >
            Privacy & Policies
          </Link>
          <Link
            to="#"
            className="text-white text-sm font-semibold hover:text-gray-300"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/about"
            className="text-white text-sm font-semibold hover:text-gray-300"
          >
            About Us
          </Link>
          <a
            href="mailto:blood.donor@mail.com"
            rel="noopener noreferrer"
            className="text-white text-sm font-semibold hover:text-gray-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
