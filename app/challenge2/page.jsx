import Image from "next/image";
import React from "react";

const Challenge2 = () => {
  return (
    <div className="font-Poppins">
      <div className="w-[100vw] h-[100vh] bg-[#E9F0FE] flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-2xl sm:p-16 p-5 sm:mx-auto mx-5">
          {/* Upload Text */}
          <div className="flex justify-center items-center flex-col sm:px-[300px] sm:py-[230px] sm:gap-5 gap-2 border-4 border-[#1E77CC] rounded-xl border-dashed px-10 py-10">
            <Image
              src="/ch2-upload.png"
              width={190}
              height={160}
              className="sm:w-[190px] sm:h-[160px] w-[95px] h-[80px]"
            />
            <h1 className="font-[400] sm:text-[48px] text-xl text-center">
              Browse Files to upload
            </h1>
          </div>

          <div className="flex justify-between items-center bg-[#E9F0FE] px-[30px] py-[20px] rounded-lg mt-5">
            <Image
              src="/ch2-image.png"
              width={64}
              height={64}
              className="sm:w-[64px] sm:h-[64px] w-[32px] h-[32px]"
            />
            <div className="flex justify-center items-center">
              <p className="font-[400] sm:text-[44px] text-medium">
                No selected File -
              </p>
              <Image
                src="/ch2-delete.png"
                width={64}
                height={64}
                className="sm:w-[64px] sm:h-[64px] w-[32px] h-[32px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge2;
