import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <div
      id="wrapper"
      className={`max-w-screen bg-primaryBg text-base md:text-lg font-semibold p-3 md:px-6 ${
        isDarkTheme && "dark"
      }`}
    >
      <div className="max-w-5xl w-full mx-auto min-h-screen">
        <Header theme={{ isDarkTheme, setIsDarkTheme }} />
        <Main />
      </div>
    </div>
  );
};

export default App;
