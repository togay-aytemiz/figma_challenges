import Image from "next/image";
import React from "react";

const Badges = ({ icon = "crop", title = "Crop", desc = "Wheat" }) => {
  return (
    <div className="flex border-2 border-[#4A7A4C] rounded-full items-center justify-center py-2 px-4 gap-1">
      <Image src={`/ch7/${icon}.png`} height={31} width={31} />
      <h1 className="text-[23px] font-[700] text-[#4A7A4C]">{title}: </h1>
      <p className="text-[30px] font-[600]">{desc}</p>
    </div>
  );
};

export default Badges;
