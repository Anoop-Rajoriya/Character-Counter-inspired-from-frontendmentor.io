import React, { Component, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [state, setState] = useState({
    darkTheme: true,
    letterList: [],
    spaceExcluding: true,
    userInput: "",
  });

  useEffect(() => {
    if (state.userInput) {
      setState((pre) => ({
        ...pre,
        letterList: state.spaceExcluding
          ? [
              ...state.userInput
                .replace(/\n/g, "")
                .replaceAll(" ", "")
                .split(""),
            ]
          : [...state.userInput.replace(/\n/g, "").split("")],
      }));
    }
  }, [state.userInput, state.spaceExcluding]);

  return (
    <div
      id="wraper"
      className={`max-w-screen bg-primaryBg text-base md:text-lg font-semibold p-3 md:px-6  ${
        state.darkTheme && "dark"
      }`}
    >
      <div className="max-w-5xl w-full mx-auto min-h-screen">
        {[Header, Main, Footer].map((Component, index) => (
          <Component
            key={index}
            appStates={{ ...state }}
            appStatesUpdater={setState}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
