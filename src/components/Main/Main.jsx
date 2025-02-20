import React from "react";
import CustomCheckbox from "./CustomCheckBox";
import Card from "./Card";

const Main = ({ app }) => {
  const { AppData, setAppData } = app;
  const { charactersCount, wordsCount, sentancesCount } = AppData;

  const textAreaHandler = (event) => {
    const userInput = event.currentTarget.value;
    const charList = userInput.replace("\n", "").split("");
    const totleChar = userInput.replace("\n", "").length;
    const totleWords = userInput.split(" ").length - 1;
    const totleSentances = userInput.split(/[.!?]/g).length - 1;

    setAppData((preState) => ({
      ...preState,
      charactersCount: totleChar,
      wordsCount: totleWords,
      sentancesCount: totleSentances,
      totleCharacters: charList,
    }));
  };

  return (
    <main className="">
      <h1 className="text-primaryText pt-3 pb-6 font-bold text-4xl md:px-6 md:text-6xl text-center md:w-[70%] md:mx-auto">
        Analyze your text in real-time.
      </h1>
      <textarea
        onInput={textAreaHandler}
        placeholder="enter your pragraph"
        className="bg-complimentaryBg text-primaryText border-2 border-complimentaryText rounded-lg w-full h-40 md:h-60 p-2 outline-none"
      />
      <div className="py-4 flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row">
          <CustomCheckbox label="exclude spaces" />
          <CustomCheckbox label="set characters limit" />
        </div>
        <p className="text-complimentaryText capitalize">
          apporox reading time <span className="font-bold">1min</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 pt-2 md:pt-4">
        {[
          {
            name: "totel characters",
            number: charactersCount,
            className: "bg-orange",
          },
          { name: "word count", number: wordsCount, className: "bg-red" },
          {
            name: "sentacne count",
            number: sentancesCount,
            className: "bg-violet",
          },
        ].map((card, index) => (
          <Card key={index} info={card} />
        ))}
      </div>
    </main>
  );
};

export default Main;
