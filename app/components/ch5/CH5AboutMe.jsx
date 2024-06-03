import React from "react";
import CH5Button from "./CH5Button";
import Image from "next/image";
import CH5ButtonMobile from "./CH5ButtonMobile";

const CH5AboutMe = () => {
  return (
    <div className="sm:py-[181px] py-20 pt-32">
      <div className="bg-[#106EE8] sm:p-[54px] p-[30px] rounded-3xl">
        <div className="flex gap-11">
          <Image
            src="/ch5/avatarv2.png"
            height={480}
            width={385}
            className="h-[480px] w-[385px] sm:block hidden"
          />
          <div>
            <h1 className="sm:text-[64px] text-[48px] font-[800] text-white">
              About me
            </h1>

            <div className="flex-col flex sm:gap-2 gap-0">
              <p className="font-[600] text-[25px] text-[#FFDD55]">
                UI/UX Designer
              </p>
              <p className="font-[600] text-[25px] text-[#FFDD55]">
                React developer
              </p>
            </div>
            <p className="sm:text-[24px] text-[20px] font-[700] mt-4 text-white">
              Hello! I'm a UI/UX designer and React developer. Dive into my
              portfolio to discover a fusion of elegant design and seamless
              react development. Welcome to a world where creativity meets
              functionality!
            </p>

            <div className="gap-4 mt-10 relative sm:flex hidden">
              {/* Hire me button */}
              <CH5Button text={"Hire me"} />

              {/* Download CV button */}
              <CH5Button text={"Download CV"} />
            </div>

            <div className="sm:hidden flex sm:flex-row flex-col sm:gap-5 gap-16 pt-6 pb-10">
              {/* Hire me button */}
              <CH5ButtonMobile text={"Hire me"} />

              {/* Download CV button */}
              <CH5ButtonMobile text={"Download CV"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CH5AboutMe;
