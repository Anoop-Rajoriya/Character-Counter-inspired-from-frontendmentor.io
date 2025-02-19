import React from "react";
import LatterCard from "./LatterCard";

const Footer = () => {
  return (
    <footer className="">
      <h2 className="text-primaryText capitalize font-bold text-xl md:text-2xl">
        letter density
      </h2>
      <div className="py-4">
        {[
          { letter: "a", totleLetter: 120, repetition: 60 },
          { letter: "b", totleLetter: 120, repetition: 40 },
          { letter: "c", totleLetter: 120, repetition: 20 },
          { letter: "b", totleLetter: 120, repetition: 40 },
          { letter: "c", totleLetter: 120, repetition: 20 },
        ].map((cardInfo, index) => (
          <LatterCard info={cardInfo} key={index} />
        ))}
        <button className="text-primaryText flex items-center justify-center text-lg md:text-xl rounded space-x-2 mt-2">
          <span className="pb-1.5">see more</span>
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
