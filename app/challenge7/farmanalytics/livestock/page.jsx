import Badges from "@/app/components/ch7/FarmAnalytics/Badges";
import AnimalCard from "@/app/components/ch7/LiveStock/AnimalCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-white rounded-xl p-[25px] w-full h-full">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="sm:text-[38px] text-lg font-[700] text-[#4A7A4C]">
            Manage Livestock
          </h1>
          <div className="flex flex-row gap-4">
            <button className="sm:text-[23px] text-medium text-nowrap font-[700] sm:p-2 px-[14px] bg-[#4A7A4C] text-white rounded-xl hover:shadow-xl flex flex-row items-center justify-center gap-2">
              <Image src="/ch7/liveview.png" width={26} height={19} /> View live
            </button>
            <button className="sm:text-[23px] text-medium text-nowrap font-[700] sm:p-2 px-[14px] bg-[#4A7A4C] text-white rounded-xl hover:shadow-xl">
              + Add Cattle
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-end gap-5 mt-10">
          <button className="flex flex-row bg-[#4A7A4C] text-white items-center justify-center p-2 rounded-md gap-2 text-[30px] font-[600]">
            {/* <Image src="/ch7/areaWhite.png" height={27} width={27} /> */}
            <p>Total:</p>
            <p>63</p>
          </button>
          <button className="flex flex-row bg-[#4A7A4C] text-white items-center justify-center p-2 rounded-md gap-2 text-[30px] font-[600]">
            <Image src="/ch7/areaWhite.png" height={27} width={27} />
            <p>Area:</p>
            <p>25Acres</p>
          </button>
        </div>

        <div className="flex flex-row mt-10">
          <AnimalCard />
          <AnimalCard name="Cow" image="cow" number={2} />
        </div>
      </div>
    </div>
  );
};

export default page;
