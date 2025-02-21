import React from "react";

const LatterCard = ({ letterInfo, totleLetters }) => {
  const [letter, count] = letterInfo;
  let percentages = (count / totleLetters) * 100;
  return (
    <div className="flex items-center justify-center gap-2 text-primaryText py-2">
      <span className="capitalize min-w-5">{letter}</span>
      <div
        className={`flex-1 rounded-full h-4 md:h-5 bg-complimentaryBg relative `}
      >
        <div
          className={`h-full bg-orange rounded-full`}
          style={{ width: `${Math.max(percentages, 3).toFixed()}%` }}
        ></div>
      </div>
      <span>{`${count} (${percentages.toFixed(1)}%)`}</span>
    </div>
  );
};

export default LatterCard;
