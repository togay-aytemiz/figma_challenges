import React from "react";

const CH5Button = ({ text }) => {
  return (
    <div>
      <div className="mr-[200px]">
        <button className="text-[32px] text-white font-[700] bg-black py-[12px] px-[30px] rounded-2xl z-10 absolute text-nowrap">
          {text}
        </button>
        <button className="text-[32px] text-white font-[700] bg-[#00C6AE] py-[12px] px-[30px] rounded-2xl mt-2 ml-2 z-0 absolute text-nowrap">
          {text}
        </button>
      </div>
    </div>
  );
};

export default CH5Button;
