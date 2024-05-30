import React from "react";

const CH5ContactMe = () => {
  return (
    <div>
      <div className="bg-[#0ACF83] flex justify-center items-center flex-col py-[80px] sm:py-[147px] sm:px-14 px-[30px] sm:gap-10 gap-4">
        <h1 className="sm:text-[42px] text-[32px] font-[800] text-white">
          If You have any Query or Project ideas feel free to{" "}
        </h1>

        <div className="relative flex justify-center items-center mt-7">
          <button className="sm:text-[64px] text-[40px] text-nowrap font-[700] bg-[#FFDD55] sm:py-[34px] py-[20px] sm:px-[140px] px-[50px] rounded-[50px] z-10">
            Contact Me
          </button>

          <button className="sm:text-[64px] text-[40px]  text-nowrap font-[700] bg-black sm:py-[34px] sm:px-[140px] py-[20px] px-[50px] rounded-[50px] absolute z-0 sm:mt-16 sm:mr-8 mt-8 mr-4">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default CH5ContactMe;
