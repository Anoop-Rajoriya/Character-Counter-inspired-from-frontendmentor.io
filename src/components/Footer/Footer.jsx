import React, { useState } from "react";
import LatterCard from "./LatterCard";

const Footer = ({ appStates, appStatesUpdater }) => {
  // const { AppData } = app;
  // const { totleCharacters } = AppData;

  // const AllLetters = {};

  // if (totleCharacters) {
  //   totleCharacters.forEach((char) => {
  //     const letter = char.toLowerCase();
  //     AllLetters[letter] = (AllLetters[letter] || 0) + 1;
  //   });
  // }
  const [SeeMoreState, setSeeMoreState] = useState(false);
  const seeMoreHandler = (event) => {
    setSeeMoreState((pre) => !pre);
  };

  return (
    <footer className="pt-5">
      <h2 className="text-primaryText capitalize font-bold text-xl md:text-2xl">
        letter density
      </h2>
      <div className="py-4">
        {/* {Object.entries(AllLetters).map((letterInfo, index) => {
          if (index >= 5) return;
          return (
            <LatterCard
              letterInfo={letterInfo}
              totleLetters={totleCharacters.length}
              key={index}
            />
          );
        })}
        <div
          id="remainElmWraper"
          className={`${SeeMoreState ? "block" : "hidden"}`}
        >
          {Object.entries(AllLetters).map((letterInfo, index) => {
            if (index <= 5) return;
            return (
              <LatterCard
                letterInfo={letterInfo}
                totleLetters={totleCharacters.length}
                key={index}
              />
            );
          })}
        </div> */}
        <button
          onClick={seeMoreHandler}
          className="text-primaryText flex items-center justify-center text-lg md:text-xl rounded space-x-2 mt-2"
        >
          <span className="pb-1.5">
            {SeeMoreState ? "see less" : "see more"}
          </span>
          <svg
            className={`size-6 ${
              SeeMoreState && "rotate-180"
            } transition-all duration-300`}
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
