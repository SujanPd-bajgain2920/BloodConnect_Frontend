import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import handpng from "../assets/hand.png";
import bloodpng from "../assets/bldrop.png";
import { Link } from "react-router-dom";

const Header = () => {
  const headerHeightRef = useRef(null);
  const [height, setHeight] = useState({});

  useEffect(() => {
    const calculatedHeight = headerHeightRef.current.offsetHeight;
    setHeight({
      height: `${calculatedHeight}px`,
    });
  }, [headerHeightRef]);

  return (
    <div>
      <div className="mx-auto w-full max-w-7xl">
        <svg
          style={height}
          id="header_bg"
          className="homebg"
          viewBox="0 10 500 50"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient
              id="Gradient"
              cx="0.5"
              cy="0.5"
              r="0.5"
              fx="0.75"
              fy="0.25"
            >
              <stop offset="0%" stopColor="#07365d" />
              <stop offset="100%" stopColor="#000717" />
            </radialGradient>
          </defs>
          <path d="M0,0 L0,55 Q250,65 500,55 L500,0 Z" fill="url(#Gradient)" />
        </svg>
        <div ref={headerHeightRef} id="header" className="header">
          <div className="title">
            <h1 style={{ fontSize: "45px" }}>
              ONE DONATION,
              <br />
              COUNTLESS POSSIBILITIES
            </h1>
            <p>
              <span>
                "Be the change you wish <br />
                to see in the world, <br />
                starting with what you can give"
                <br />
              </span>
            </p>
            <section className="serviceBtn">
              <Link to="donateblood">
                <button>Blood Donate &nbsp; &#10095;</button>
                <br />
              </Link>
              <Link to="requestblood">
                <button> Blood Request &nbsp; &#10095;</button>
                <br />
              </Link>
            </section>
          </div>
          <div className="">
            <img className="bldrop" src={bloodpng} alt="" />
            <img className="mb-8 end-0" src={handpng} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
