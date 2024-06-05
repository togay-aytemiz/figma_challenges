import Elements from "@/app/components/ch7/FarmAnalytics/Elements";
import React from "react";

const page = () => {
  return (
    <div className="bg-white rounded-xl p-[25px] w-full h-full">
      <div className="flex justify-between">
        <h1 className="text-[38px] font-[700] text-[#4A7A4C]">Farm 1</h1>
        <button className="text-[23px] font-[700] px-[14px] bg-[#4A7A4C] text-white rounded-xl hover:shadow-xl">
          + Add Crop
        </button>
      </div>
      <div className=" my-16 flex gap-3 justify-between">
        <Elements name={"Nitrogen"} condition={"Good"} percentage={"20"} />
        <Elements name={"Phosphorus"} condition={"Good"} percentage={"8"} />
        <Elements name={"Potassium"} condition={"Good"} percentage={"13"} />
      </div>
    </div>
  );
};

export default page;
