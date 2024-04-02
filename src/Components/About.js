import React from "react";
import requireAuth from "../requireAuth";
import aboutpng from "./assets/about.png";
import missionpng from "./assets/mission.png";
import visionpng from "./assets/vision.png";
import wyw1 from "./assets/WYW1.png";
import wyw2 from "./assets/WYW2.png";
import wyw3 from "./assets/WYW3.png";
import wyw4 from "./assets/WYW4.png";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 lg:p-8">
        {/* About Image Section */}
        <div className="p-4 lg:p-8 rounded-md shadow-md flex flex-col md:flex-row md:gap-8 lg:items-center lg:gap-12">
          <div className="md:w-1/2 lg:w-1/3">
            <div
              className="h-64 lg:h-96 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${aboutpng})` }}
            ></div>
          </div>

          <div className="md:w-1/2 lg:w-2/3 mt-8">
            <div className="grid grid-rows-2 items-center text-center justify-center">
              <div>
                <h2 className="text-2xl lg:text-5xl font-bold text-blue-900 mb-4 lg:mb-8">
                  Who Are We?
                </h2>
              </div>
              <div>
                <p className="text-sm lg:text-lg max-w-screen-md mx-auto text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="flex flex-col md:flex-row justify-center mt-8">
          <div className="w-32 md:w-1/4 lg:w-1/5 mx-4">
            <div className="block bg-red-500 border border-gray-200 rounded-md overflow-hidden shadow-md hover:bg-red-600 transition duration-300">
              <img
                src={missionpng}
                alt="Mission Image"
                className="w-16 h-16 object-cover mx-auto mt-4"
              />
              <div className="p-2 lg:p-5">
                <h2 className="text-white text-sm lg:text-lg text-center font-bold mb-2">
                  MISSION
                </h2>
                <p className="text-center text-white text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
          </div>

          <div className="w-32 md:w-1/4 lg:w-1/5 mx-4">
            <div className="block bg-red-500 border border-gray-200 rounded-md overflow-hidden shadow-md hover:bg-red-600 transition duration-300">
              <img
                src={visionpng}
                alt="Vision Image"
                className="w-16 h-16 object-cover mx-auto mt-4"
              />
              <div className="p-2 lg:p-5">
                <h2 className="text-white text-sm lg:text-lg text-center font-bold mb-2">
                  VISION
                </h2>
                <p className="text-center text-white text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full h-0.5 my-8 lg:my-12 bg-blue-700 rounded-full" />

        {/* Why We? Section */}
        <h2 className="text-xl md:text-3xl lg:text-5xl text-center font-bold text-blue-900 mb-4 lg:mb-8">
          Why We?
        </h2>

        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              img: wyw4,
              title: "Geo-Location Search",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
            },
            {
              img: wyw2,
              title: "Real Time Connect",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
            },
            {
              img: wyw1,
              title: "Notification",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
            },
            {
              img: wyw3,
              title: "User Friendly",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
            },
          ].map((item, index) => (
            <div key={index} className="card bg-gray-200 rounded-md p-2 md:p-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full mx-auto mb-2"
              />
              <div className="p-2 md:p-4 text-center">
                <h4 className="text-sm lg:text-lg font-bold text-gray-900 mb-1 lg:mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-xs lg:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default (About);
