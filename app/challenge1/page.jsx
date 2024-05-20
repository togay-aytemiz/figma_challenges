import Image from "next/image";
import React from "react";

const Challenge1 = () => {
  return (
    <div className="font-Poppins">
      <div className="w-[100vw] h-[100vh] bg-[#DE3140] flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-2xl p-16 max-w-[1000px] sm:mx-auto mx-5">
          <h1 className="font-[700] text-[40px] text-center">Delete User</h1>
          <p className="font-[500] sm:text-[33px] text-medium text-center sm:text-left text-wrap sm:mt-8 mt-3">
            Are you sure you want to delete{" "}
            <span className="font-bold">your account</span> ?
          </p>

          {/* Warning */}
          <div className="bg-[#FFE9D9] border-l-8 border-[#f1703F] my-6 py-2 sm:mx-0 ">
            <div className="flex gap-1  ml-7 items-center">
              <Image src="/ch1-warning.png" width={30} height={26} />
              <h2 className="font-[600] sm:text-[30px] text-medium text-[#771505]">
                Warning
              </h2>
            </div>
            <p className="px-7 text-[#BC4C2E] font-[500] sm:text-[25px] text-medium">
              By Deleteing this account, you won’t be able to access the system.
            </p>
          </div>

          {/* Button Area */}
          <div className="flex justify-between items-center sm:flex-row flex-col gap-4">
            <button className="text-medium sm:text-[33px] font-[500] sm:h-[86px] sm:w-[220px] h-[60px] w-full bg-black text-white">
              No, Cancel
            </button>
            <button className="text-medium sm:text-[33px] font-[500] sm:h-[86px] sm:w-[220px] h-[60px] w-full bg-white text-black border-black border-2">
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge1;
