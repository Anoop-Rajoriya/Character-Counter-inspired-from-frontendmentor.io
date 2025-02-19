import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div
      id="wraper"
      className="max-w-screen bg-primaryBg text-base md:text-lg font-semibold p-3 md:px-6 dark"
    >
      <div className="max-w-5xl w-full mx-auto min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
