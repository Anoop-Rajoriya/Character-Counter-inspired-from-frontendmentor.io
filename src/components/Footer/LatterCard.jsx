import React from "react";

const LatterCard = ({ info }) => {
  const { letter, totleLetter, repetition } = info;
  const percentages = (repetition / totleLetter) * 100;
  return (
    <div className="flex items-center justify-center gap-2 text-primaryText py-2">
      <span className="capitalize">{letter}</span>
      <div className={`flex-1 rounded-full h-4 md:h-5 bg-complimentaryBg relative `}>
        <div
          className={`h-full bg-orange rounded-full`}
          style={{ width: `${percentages.toFixed()}%` }}
        ></div>
      </div>
      <span>{`${totleLetter} (${percentages.toFixed(1)}%)`}</span>
    </div>
  );
};

export default LatterCard;
