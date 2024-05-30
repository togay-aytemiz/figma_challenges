import Image from "next/image";
import React from "react";
import CH5Button from "../components/CH5Button";
import CH5Socialicons from "../components/CH5Socialicons";
import CH5ButtonMobile from "../components/CH5ButtonMobile";
import CH5AboutMe from "../components/CH5AboutMe";
import CH5Services from "../components/CH5Services";
import CH5ContactMe from "../components/CH5ContactMe";
import CH5Footer from "../components/CH5Footer";

const page = () => {
  return (
    <div className=" bg-[#FFDD55] pb-8">
      <div className="font-Montserrat">
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

        {/* Hero */}
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

            <div className="gap-4 mt-10 relative sm:flex hidden">
              {/* Hire me button */}
              <CH5Button text={"Hire me"} />
              <CH5Button text={"Download CV"} />

              {/* Download CV button */}
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
            <CH5Socialicons />
          </div>

          <div className="sm:hidden flex gap-5 mt-[-20px]">
            {/* Hire me button */}
            <CH5ButtonMobile text={"Hire me"} />

            {/* Download CV button */}
            <CH5ButtonMobile text={"Download CV"} />
          </div>
        </div>

        {/* About Me */}
        <div className="sm:mx-14 mx-[30px]">
          <CH5AboutMe />
        </div>

        {/* Services */}
        <CH5Services />

        {/* Contact Me */}
        <div className="sm:my-[180px] my-[100px]">
          <CH5ContactMe />
        </div>

        <div className="sm:my-[180px] my-[100px]">
          <CH5Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
