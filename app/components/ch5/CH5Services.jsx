import React from "react";
import CH5ServicesCards from "./CH5ServicesCards";

const CH5Services = () => {
  return (
    <div className="bg-[#EB7711] sm:py-[69px] sm:px-[106px] py-[40px] px-[20px] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="sm:text-[64px] text-[48px] font-[800] text-black">
          Services
        </h1>

        <p className="sm:text-[24px] text-[20px] font-[700] mt-4 text-white">
          Embark on a journey of digital transformation with services that blend
          design brilliance with cutting-edge development. Let's create
          experiences that resonate and applications that captivate.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center w-full sm:gap-40 gap-28 mt-[100px]">
        <CH5ServicesCards
          title="UI/UX Designer"
          text="Crafting captivating interfaces that resonate. From wireframes to polished designs, I make sure your digital presence stands out with user-centric creativity."
          number="1"
        />
        <CH5ServicesCards
          title="React Developer "
          text="Turning app ideas into reality. As a React developer, I build sleek, cross-platform applications for a seamless user experience and efficient performance. "
          number="2"
        />
      </div>
    </div>
  );
};

export default CH5Services;
