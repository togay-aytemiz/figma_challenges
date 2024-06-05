import React from "react";

const Elements = ({ name, condition, percentage }) => {
  const conditionCheck = () => {
    if (condition === "Good") {
      return "#00A707";
    } else if (condition === "Low") {
      return "#C5B100";
    } else {
      return "#A10000";
    }
  };

  const conditionColor = conditionCheck();

  return (
    <div className="bg-white shadow-lg rounded-md flex justify-between items-center flex-grow p-2">
      <div className="flex flex-col items-start">
        <h1 className="text-[23px] font-[700] text-[#4A7A4C]">{name}:</h1>
        <p
          style={{
            color: conditionColor,
            borderColor: conditionColor,
          }}
          className="text-[10px] font-[600] border-2 p-[2px] px-1 rounded-md"
        >
          {condition}
        </p>
      </div>
      <p className="text-[32px] font-[400] mr-[15px]">{percentage}%</p>
    </div>
  );
};

export default Elements;
