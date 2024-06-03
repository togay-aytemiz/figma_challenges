import React from "react";

const CH5ServicesCards = ({ title, text, number }) => {
  return (
    <div>
      <div className="sm:px-[40px] px-[20px] pb-[20px] pt-[100px] bg-[#A259FF] rounded-3xl flex flex-col gap-2 border-[3px] border-black relative">
        {/* Title */}
        <h1 className="sm:text-[40px] text-[30px] font-[800] text-white">
          {title}
        </h1>
        <p className="sm:text-[28px] text-[20px] font-[700] text-white">
          {text}
        </p>
        <button className="sm:text-[32px] text-[20px] font-[700] py-[19px] px-[64px] bg-[#FFDD55] rounded-xl">
          Learn More
        </button>

        <p className="absolute text-[96px] font-[800] text-white bg-[#0ACF83] w-[132px] h-[132px] text-center  rounded-full top-[-64px] left-1/2 transform -translate-x-1/2">
          {number}
        </p>
      </div>
    </div>
  );
};

export default CH5ServicesCards;
