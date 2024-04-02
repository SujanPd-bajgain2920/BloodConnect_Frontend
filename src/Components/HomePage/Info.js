//Info.js
import React from "react";
import fact1 from "../assets/fact1.png";
import fact2 from "../assets/fact2.png";
import fact3 from "../assets/fact3.png";
import fact4 from "../assets/fact4.png";

const Info = () => {
  return (
    <div className=" h-fit-content  flex-wrap justify-between p-50 bg-transparent">
      <div className="">
        <div className="">
          <p className="m-0 text-2xl">Good To Know</p>
          <hr className="w-40 h-1 m-0 bg-red-600 opacity-1 border-none" />
          <p className="m-0 font-bold text-4xl">Helpful Information</p>
        </div>

        <div className="flex justify-center  mt-10 items-center">
          <div className="flex gap-4 justify-between max-w-screen-lg">
            <section className="w-1/4 text-center text-gray-500 text-sm">
              <div className="w-20 h-30 rounded-full mx-auto mb-2 flex items-center justify-center bg-gradient-to-r from-pink-600 to-orange-500">
                <img
                  className="w-12 h-20 object-center"
                  src={fact1}
                  alt="Fact"
                />
              </div>
              <p className="text-xs">
                There are four main blood types: A, B, AB, and O, each with
                positive (+) or negative (-) Rh factors.
              </p>
            </section>
            <section className="w-1/4 text-center text-gray-500 text-sm">
              <div className="w-20 h-30 rounded-full mx-auto mb-2 flex items-center justify-center bg-gradient-to-r from-pink-600 to-orange-500">
                <img
                  className="w-12 h-20 object-center"
                  src={fact2}
                  alt="Fact"
                />
              </div>
              <p className="text-xs">
                Individuals with O-negative blood type are considered universal
                donors, as their blood can be given to people of any blood type.
              </p>
            </section>
            <section className="w-1/4 text-center text-gray-500 text-sm">
              <div className="w-20 h-30 rounded-full mx-auto mb-2 flex items-center justify-center bg-gradient-to-r from-pink-600 to-orange-500">
                <img
                  className="w-12 h-20 object-center"
                  src={fact3}
                  alt="Fact"
                />
              </div>
              <p className="text-xs">
                Adults have around 10 units of blood in their body. 1 unit is
                given during a donation.
              </p>
            </section>
            <section className="w-1/4 text-center text-gray-500 text-sm">
              <div className="w-20 h-30 rounded-full mx-auto mb-2 flex items-center justify-center bg-gradient-to-r from-pink-600 to-orange-500">
                <img
                  className="w-12 h-20 object-center"
                  src={fact4}
                  alt="Fact"
                />
              </div>
              <p className="text-xs">
                Blood has a limited shelf life, typically around 42 days for red
                blood cells and even shorter for platelets and plasma.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button class="bg-red-500 mt-5  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Info;
