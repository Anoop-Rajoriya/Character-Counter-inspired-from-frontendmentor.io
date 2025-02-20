import React from "react";

const Card = ({ info }) => {
  const { name, number, className } = info;
  // console.log(number)
  return (
    <div
      className={` p-4 space-y-4 text-primaryText rounded-lg md:flex-1 ${className}`}
    >
      <h2 className="text-5xl md:text-6xl font-bold">{number ? number: "00"}</h2>
      <p className="font-bold text-primaryText capitalize">{name}</p>
    </div>
  );
};

export default Card;
