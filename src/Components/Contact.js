import React from "react";
import contactImage from "./assets/contact_bg.png";

const Contact = () => {
  return (
    <div className="bg-gray-300 w-full h-50">
      <div className="flex justify-center gap-72 mt-6 pt-8">
        <div>
          <p className="font-bold text-2xl">
            <span className="text-red-600 font-semibold text-lg">Join Us</span>
            <br />
            Together We Can Make the World Healthier and Better
          </p>
        </div>

        <div className="ml-7 mt-4">
          <a
            href="mailto:blood.donor@mail.com"
            rel="noopener noreferrer"
            className="w-162 mt-5 px-6 h-35 p-2 cursor-pointer text-red-600 font-bold border-2 border-red-600 rounded-md text-center bg-white"
          >
            Contact Us
          </a>
        </div>
      </div>
      <img src={contactImage} alt="Contact Background" />
    </div>
  );
};

export default Contact;
