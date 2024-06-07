"use client";

import AddCrop from "@/app/components/ch7/FarmAnalytics/AddCrop";
import Badges from "@/app/components/ch7/FarmAnalytics/Badges";
import Elements from "@/app/components/ch7/FarmAnalytics/Elements";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [isAddCropOpen, setIsAddCropOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-white rounded-xl p-[25px] w-full h-full">
        <div className="flex justify-between">
          <h1 className="text-[38px] font-[700] text-[#4A7A4C]">Farm 1</h1>
          <button
            className="text-[23px] font-[700] px-[14px] bg-[#4A7A4C] text-white rounded-xl hover:shadow-xl"
            onClick={() => setIsAddCropOpen(true)}
          >
            + Add Crop
          </button>
        </div>
        <div className=" my-16 flex flex-col sm:flex-row gap-3 justify-between">
          <Elements name={"Nitrogen"} condition={"Good"} percentage={"20"} />
          <Elements name={"Phosphorus"} condition={"Good"} percentage={"8"} />
          <Elements name={"Potassium"} condition={"Good"} percentage={"13"} />
        </div>
        <div className="flex justify-between items-start flex-col sm:flex-row ">
          <div className="flex flex-col gap-3 sm:flex-grow w-full sm:mx-8 ">
            <Elements name={"Humidy"} condition={"Good"} percentage={"15"} />
            <Elements
              name={"Soil Hydration"}
              condition={"High"}
              percentage={"40"}
            />
            <Elements name={"PH Value"} condition={"Low"} percentage={"4"} />
          </div>
          <div>
            <Image
              src="/ch7/farm.png"
              height={363}
              width={591}
              className="sm:max-w-[591px] max-w-[80vw]"
            />
            <div className="flex flex-grow mx-10 justify-center gap-[24px] my-[26px] sm:flex-row flex-col">
              <Badges />
              <Badges icon={"area"} title={"Area"} desc={"25Acres"} />
            </div>
          </div>
        </div>

        <button className="text-[32px] font-[700] text-[#4A7A4C] border-4 border-[#4A7A4C] py-1 w-full rounded-md mt-5">
          Efficiency Rating
        </button>
      </div>
      {isAddCropOpen && (
        <div className="absolute z-10 top-0 w-full h-full">
          <AddCrop
            className="w-full h-full"
            setIsAddCropOpen={setIsAddCropOpen}
          />
        </div>
      )}
    </div>
  );
};

export default page;
