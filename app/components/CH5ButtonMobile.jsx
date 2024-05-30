import React from "react";

const CH5ButtonMobile = ({ text }) => {
  return (
    <div>
      <div className="mr-[120px] relative text-nowrap">
        <button className="text-[16px] text-nowrap text-white font-[700] bg-black py-[12px] px-[30px] rounded-2xl z-10 absolute">
          {text}
        </button>
        <button className="text-[16px] text-white font-[700] bg-[#00C6AE] py-[12px] px-[30px] rounded-2xl mt-1 ml-1 z-0 absolute text-nowrap">
          {text}
        </button>
      </div>
    </div>
  );
};

export default CH5ButtonMobile;
