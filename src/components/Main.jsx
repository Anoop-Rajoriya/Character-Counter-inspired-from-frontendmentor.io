import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckBox";
import Card from "./Card";
import LetterCard from "./LetterCard";

const Main = () => {
  const [userInputs, setUserInputs] = useState({
    textString: "",
    canExcludSpaces: true,
    textLettersLimit: false,
    canSeeMore: false,
  });

  const getTextStringLettersCounts = () => {
    return userInputs.canExcludSpaces
      ? userInputs.textString.replace(/\s+/g, "").length
      : userInputs.textString.length;
  };

  const getTextStringWordsCounts = () => {
    const trimmedText = userInputs.textString.trim();
    return trimmedText ? trimmedText.split(/\s+/).length : 0;
  };

  const getTextStringSentancesCounts = () => {
    return (userInputs.textString.match(/[^.!?]+[.!?]/g) || []).length;
  };

  const getReadingTime = (wordsPerMinute = 150) => {
    // const wordCount = userInputs.textString.trim().split(/\s+/).length;
    const wordCount = getTextStringLettersCounts();
    const minutes = (wordCount / wordsPerMinute).toFixed(2);
    return minutes >= 1 ? `${minutes} Min` : `${Math.ceil(minutes * 60)} Sec`;
  };

  const getTextStringLetterDesity = (count=null) => {
    
  };

  return (
    <main>
      <h1 className="text-primaryText pt-3 pb-6 font-bold text-4xl md:px-6 md:text-6xl text-center md:w-[70%] md:mx-auto">
        Analyze your text in real-time.
      </h1>
      <textarea
        // defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        onInput={(event) => {
          const str = event.currentTarget.value.trim();
          setUserInputs((preState) => ({
            ...preState,
            textString: str,
          }));
        }}
        placeholder="Enter your paragraph..."
        className="bg-complimentaryBg text-primaryText border-2 border-complimentaryText rounded-lg w-full h-40 md:h-60 p-2 outline-none"
      />
      <div className="py-4 flex flex-col gap-4 md:flex-row md:justify-between">
        <CustomCheckbox
          handler={(event) =>
            setUserInputs((preState) => ({
              ...preState,
              canExcludSpaces: !userInputs.canExcludSpaces,
            }))
          }
          value={userInputs.canExcludSpaces}
          label="Exclude Spaces"
        />
        <CustomCheckbox
          handler={(event) =>
            setUserInputs((preState) => ({
              ...preState,
              textLettersLimit: !userInputs.textLettersLimit,
            }))
          }
          value={userInputs.textLettersLimit}
          label="set letters limit"
        />
        <p className="text-complimentaryText capitalize">
          Approx. Reading Time:{" "}
          <span className="font-bold">{getReadingTime()}</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 pt-2 py-4">
        {getTextStringLetterDesity(5)}
      </div>
      <div className="pt-2">
        <h2 className="text-primaryText capitalize font-bold text-xl md:text-2xl">
          Letter Density
        </h2>
        <div className="py-4">
          {getTextStringLetterDesity(5).map((letter) => (
            <LetterCard letterObj={letter} />
          ))}
          <button
            onClick={() =>
              setUserInputs((preState) => ({
                ...preState,
                canSeeMore: !userInputs.canSeeMore,
              }))
            }
            className="text-primaryText flex items-center justify-center text-lg md:text-xl rounded space-x-2 mt-2"
          >
            <span className="leading-none pb-1 md:pb-2">see more</span>
            <span
              className={`text-primaryText transition-all size-8 ${
                userInputs.canSeeMore && "rotate-180"
              }`}
            >
              <svg
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
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
