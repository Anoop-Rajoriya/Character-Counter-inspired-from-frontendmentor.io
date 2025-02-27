import React from "react";

const LatterCard = ({ letter, total }) => {
  const [char, count] = letter;
  let percentages = (count / total) * 100;
  return (
    <div className="flex items-center justify-center gap-2 text-primaryText py-2">
      <span className="min-w-5">{char}</span>
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
