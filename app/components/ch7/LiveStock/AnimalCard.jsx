import Image from "next/image";
import React from "react";

const AnimalCard = ({ name = "Goat", image = "goat", number = 5 }) => {
  return (
    <div className="p-[9px] shadow-xl rounded-lg">
      <h1 className="text-[32px] font-[700] text-[#4A7A4C] ">{name}:</h1>
      <ul className="ml-6 mt-5 flex flex-col gap-6 mb-4">
        <li className="text-[23px] font-[700] text-[#308B34]">Count:</li>
        <li className="text-[23px] font-[700] text-[#308B34]">Breed:</li>
        <li className="text-[23px] font-[700] text-[#308B34]">Males:</li>
        <li className="text-[23px] font-[700] text-[#308B34]">Females:</li>
      </ul>
      <div className="relative">
        <Image src={`/ch7/${image}.png`} height={193} width={327} />
        <p className="absolute top-0 text-[61px] font-[800] text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          +{number}
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
