import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="font-Montserrat bg-[#FFDD55] relative h-[100vh]">
        {/* Header */}
        <div className="bg-black sm:px-16 px-9 py-6 rounded-bl-3xl rounded-br-3xl flex justify-between items-center">
          <Image src="/ch5/logo.png" width={68} height={68} />
          <div className="md:block hidden">
            <ul className="flex gap-12">
              <li className="text-[36px] text-white font-[600]">Home</li>
              <li className="text-[36px] text-white font-[600]">About</li>
              <li className="text-[36px] text-white font-[600]">Contact us</li>
              <li className="text-[36px] text-white font-[600]">Team</li>
            </ul>
          </div>
          <div className="md:hidden block">
            <Image src="/ch5/menu.png" height={16} width={23} />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col sm:justify-between gap-11 sm:mx-14 mx-[30px]  sm:items-center sm:mt-[76px] mt-[40px]">
          {/* Body */}
          <div>
            <div>
              <h1 className="text-black sm:text-[64px] text-[48px] font-[800]">
                Hello,
              </h1>
              <h1 className="text-black sm:text-[64px] text-[48px] font-[800]">
                I'm
              </h1>
              <div className="sm:flex-row flex-col flex sm:gap-2 gap-0">
                <p className="font-[600] text-[25px] text-[#474A57]">
                  UI/UX Designer
                </p>
                <p className="sm:block hidden font-[600] text-[25px] text-[#474A57]">
                  ,{"  "}
                </p>
                <p className="font-[600] text-[25px] text-[#474A57]">
                  React developer
                </p>
              </div>
            </div>

            <div className=" space-x-4 mt-4 relative sm:flex hidden">
              {/* Hire me button */}
              <div className="mr-[200px]">
                <button className="text-[32px] text-white font-[700] bg-black py-[12px] px-[30px] rounded-2xl z-10 absolute">
                  Hire me
                </button>
                <button className="text-[32px] text-white font-[700] bg-[#00C6AE] py-[12px] px-[30px] rounded-2xl mt-2 ml-2 z-0 absolute">
                  Hire me
                </button>
              </div>

              {/* Download CV button */}
              <div>
                <button className="text-[32px] text-white font-[700] bg-black py-[12px] px-[30px] rounded-2xl text-nowrap z-10 absolute">
                  Download CV
                </button>
                <button className="text-[32px] text-white font-[700] bg-[#00C6AE] py-[12px] px-[30px] text-nowrap rounded-2xl absolute mt-2 ml-2 z-0">
                  Download CV
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-end sm:gap-[20px] gap-[16px]">
            {/* Image */}
            <Image
              src="/ch5/avatar.png"
              height={638}
              width={511}
              className="sm:max-h-[638px] sm:max-w-[511px] max-h-[370px] max-w-[296px]"
            />

            {/* buttons */}
            <div className="flex flex-col gap-1">
              <Image
                src="/ch5/Component 1.png"
                height={96}
                width={96}
                className="sm:h-[96px] sm:w-[96px]"
              />
              <Image
                src="/ch5/Component 2.png"
                height={96}
                width={96}
                className="sm:h-[96px] sm:w-[96px]"
              />
              <Image
                src="/ch5/Component 3.png"
                height={96}
                width={96}
                className="sm:h-[96px] sm:w-[96px]"
              />
              <Image
                src="/ch5/Component 4.png"
                height={96}
                width={96}
                className="sm:h-[96px] sm:w-[96px]"
              />
            </div>
          </div>

          <div className=" space-x-4 sm:hidden flex mt-[-20px]">
            {/* Hire me button */}
            <div className="mr-[120px] relative text-nowrap">
              <button className="text-[16px] text-white font-[700] bg-black py-[12px] px-[30px] rounded-2xl z-10 absolute">
                Hire me
              </button>
              <button className="text-[16px] text-white font-[700] bg-[#00C6AE] py-[12px] px-[30px] rounded-2xl mt-1 ml-1 z-0 absolute">
                Hire me
              </button>
            </div>

            {/* Download CV button */}
            <div className=" relative text-nowrap">
              <button className="text-[16px] text-white font-[700] bg-black py-[12px] px-[30px] rounded-2xl text-nowrap z-10 absolute">
                Download CV
              </button>
              <button className="text-[16px] text-white font-[700] bg-[#00C6AE] py-[12px] px-[30px] text-nowrap rounded-2xl absolute mt-1 ml-1 z-0">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
