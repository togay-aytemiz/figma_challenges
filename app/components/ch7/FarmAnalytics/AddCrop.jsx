import Image from "next/image";
import React from "react";

const AddCrop = ({ setIsAddCropOpen }) => {
  return (
    <div className="bg-black bg-opacity-50 sm:p-10 p-3 rounded-xl w-full h-full">
      <div className="bg-white p-4 rounded-2xl w-full h-full">
        <button
          className="text-[24px] font-[700] text-[#4A7A4C] border-4 border-[#4A7A4C] py-1 px-4 rounded-md"
          onClick={() => setIsAddCropOpen(false)}
        >
          BACK
        </button>
        <div className="flex flex-col justify-center sm:items-center">
          <h1 className="text-center text-[38px] font-[600] text-[#4A7A4C] mt-10 sm:mt-2">
            CROP DETAILS
          </h1>

          {/* first dropdown */}
          <div className="flex gap-5 items-center justify-center sm:mt-[61px] mt-5">
            <Image src="/ch7/crop.png" height={54} width={47} />
            <div className="w-full sm:w-[500px]">
              <button
                type="button"
                className="inline-flex justify-between w-full sm:w-[500px] rounded-md border border-[#063F08] shadow-sm px-4 py-2 bg-white text-[24px] font-[400] items-center text-[#545151] "
              >
                Crop Name <Image src="/ch7/arrow.png" height={18} width={28} />
              </button>
            </div>
          </div>

          {/* second field */}
          <div className="flex gap-5 items-center justify-center mt-6">
            <Image src="/ch7/soil.png" height={54} width={47} />
            <div className="w-full sm:w-[500px]">
              <input
                type="text"
                placeholder="Soil Type"
                className=" w-full sm:w-[500px] rounded-md border border-[#063F08] shadow-sm px-4 py-2 bg-white text-[24px] font-[400] items-center text-[#545151] placeholder-[#545151]"
              />
            </div>
          </div>

          {/* third dropdown */}
          <div className="flex gap-5 items-center justify-center mt-6">
            <div className="w-[47px]"></div>
            <div className="w-full sm:w-[500px]">
              <button
                type="button"
                className="inline-flex justify-between w-full sm:w-[253px] rounded-md border border-[#063F08] shadow-sm px-4 py-2 bg-white text-[24px] font-[400] items-center text-[#545151] "
              >
                Add Image <Image src="/ch7/image.png" height={18} width={28} />
              </button>
            </div>
          </div>

          <button className="text-[30px] font-[500] px-[40px] bg-[#4A7A4C] text-white rounded-xl hover:shadow-xl sm:mt-[120px] mt-10">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCrop;
