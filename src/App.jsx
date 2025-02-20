import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [AppData, setAppData] = useState({
    darkTheme: true,
    totleCharacters: null,
    charactersCount: null,
    wordsCount: null,
    sentancesCount: null,
  });

  return (
    <div
      id="wraper"
      className={`max-w-screen bg-primaryBg text-base md:text-lg font-semibold p-3 md:px-6  ${
        AppData?.darkTheme && "dark"
      }`}
    >
      <div className="max-w-5xl w-full mx-auto min-h-screen">
        <Header app={{ AppData, setAppData }} />
        <Main app={{ AppData, setAppData }} />
        <Footer app={{ AppData }} />
      </div>
    </div>
  );
};

export default App;
