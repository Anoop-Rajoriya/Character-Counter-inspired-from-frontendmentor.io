import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckBox";
import Card from "./Card";
import LetterCard from "./LetterCard";

const Main = () => {
  const [userInputs, setUserInputs] = useState({
    textString: "",
    excludeSpaces: true,
    textLettersLimit: false,
    showFullDensity: false,
  });

  // Count total characters, excluding spaces if selected
  const countCharacters = () =>
    userInputs.excludeSpaces
      ? userInputs.textString.replace(/\s+/g, "").length
      : userInputs.textString.length;

  // Count words in the text
  const countWords = () => {
    const trimmedText = userInputs.textString.trim();
    return trimmedText ? trimmedText.split(/\s+/).length : 0;
  };

  // Count sentences in the text
  const countSentences = () =>
    (userInputs.textString.match(/[^.!?]+[.!?]/g) || []).length;

  // Estimate reading time based on words per minute
  const calculateReadingTime = (wordsPerMinute = 150) => {
    const wordCount = countWords();
    const minutes = (wordCount / wordsPerMinute).toFixed(2);
    return minutes >= 1 ? `${minutes} Min` : `${Math.ceil(minutes * 60)} Sec`;
  };

  // Calculate letter frequency and sort by priority
  const calculateLetterDensity = (size = null) => {
    const textArray = userInputs.excludeSpaces
      ? userInputs.textString.replace(/\s+/g, "").split("")
      : userInputs.textString.split("");

    const letterFrequency = textArray.reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});

    const sortByPriority = (arr) =>
      arr.sort((a, b) => {
        const getPriority = (char) =>
          /[A-Z]/.test(char)
            ? 1
            : /[a-z]/.test(char)
            ? 2
            : /[0-9]/.test(char)
            ? 3
            : 4;

        return (
          getPriority(a[0]) - getPriority(b[0]) || a[0].localeCompare(b[0])
        );
      });

    const sortedDensity = sortByPriority(Object.entries(letterFrequency));
    return size ? sortedDensity.slice(0, size) : sortedDensity;
  };

  return (
    <main>
      <h1 className="text-primaryText pt-3 pb-6 font-bold text-4xl md:px-6 md:text-6xl text-center md:w-[70%] md:mx-auto">
        Analyze your text in real-time.
      </h1>

      {/* Textarea for user input */}
      <textarea
        onInput={(event) =>
          setUserInputs((prev) => ({
            ...prev,
            textString: event.target.value.trim(),
          }))
        }
        placeholder="Enter your paragraph..."
        className="bg-complimentaryBg text-primaryText border-2 border-complimentaryText rounded-lg w-full h-40 md:h-60 p-2 outline-none"
      />

      {/* Error message for exceeding letter limit */}
      {userInputs.textLettersLimit && countCharacters() > 200 && (
        <p className="text-error text-sm md:text-base bg-errorTransparent my-2 py-2 border-2 border-error rounded-lg px-2 text-center capitalize">
          Input text exceeds letter limit of{" "}
          <span className="font-bold">200 letters</span>
        </p>
      )}

      {/* Options and reading time */}
      <div className="py-4 flex flex-col gap-4 md:flex-row md:justify-between">
        <CustomCheckbox
          handler={(event) =>
            setUserInputs((preState) => ({
              ...preState,
              excludeSpaces: !userInputs.excludeSpaces,
            }))
          }
          value={userInputs.excludeSpaces}
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
          <span className="font-bold">{calculateReadingTime()}</span>
        </p>
      </div>

      {/* Text analysis summary cards */}
      <div className="flex flex-col md:flex-row gap-3 pt-2 py-4">
        {[
          {
            label: "Total Characters",
            value: countCharacters(),
            color: "bg-orange",
          },
          { label: "Word Count", value: countWords(), color: "bg-red" },
          {
            label: "Sentence Count",
            value: countSentences(),
            color: "bg-violet",
          },
        ].map((obj, index) => (
          <Card key={index} cardObj={obj} />
        ))}
      </div>

      {/* Letter density section */}
      <div className="pt-2">
        <h2 className="text-primaryText capitalize font-bold text-xl md:text-2xl">
          Letter Density
        </h2>
        <div className="py-4">
          {(userInputs.showFullDensity
            ? calculateLetterDensity()
            : calculateLetterDensity(5)
          ).map((letterInfo, index) => (
            <LetterCard
              key={index}
              letter={letterInfo}
              total={countCharacters()}
            />
          ))}
          <button
            onClick={() =>
              setUserInputs((prev) => ({
                ...prev,
                showFullDensity: !prev.showFullDensity,
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
