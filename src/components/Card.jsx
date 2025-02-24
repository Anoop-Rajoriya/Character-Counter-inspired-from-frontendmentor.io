import React from "react";

const Card = ({cardObj}) => {
  const { label, value, color } = cardObj;
  return (
    <div
      className={` p-4 space-y-4 text-primaryText rounded-lg md:flex-1 ${color}`}
    >
      <h2 className="text-5xl md:text-6xl font-bold">{value ? value : "00"}</h2>
      <p className="font-bold text-primaryText capitalize">{label}</p>
    </div>
  );
};

export default Card;
