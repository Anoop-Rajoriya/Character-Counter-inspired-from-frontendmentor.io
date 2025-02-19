import React from "react";
import CustomCheckbox from "./CustomCheckBox";
import Card from "./Card";

const Main = () => {
  return (
    <main className="">
      <h1 className="text-primaryText pt-3 pb-6 font-bold text-4xl md:text-6xl text-center md:w-[80%] md:mx-auto">
        Analyze your text in real-time.
      </h1>
      <textarea
        className="bg-complimentaryBg text-primaryText border-2 border-complimentaryText rounded-lg w-full h-40 md:h-60 p-2"
        defaultValue={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam illo voluptatum asperiores mollitia! Exercitationem dolorem quo, cumque aperiam reprehenderit minus?"
        }
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
          { name: "totel characters", number: 128, className: "bg-orange" },
          { name: "word count", number: 20, className: "bg-red" },
          { name: "sentacne count", number: 5, className: "bg-violet" },
        ].map((card, index) => (
          <Card key={index} info={card} />
        ))}
      </div>
    </main>
  );
};

export default Main;
