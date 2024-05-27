"use client";

import Image from "next/image";

import React, { useState } from "react";

const Challenge4 = () => {
  return (
    <div className="bg-black h-[100vh] relative">
      <div className="font-Poppins mx-auto px-32 text-white py-11">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-[24px] font-[700]">Namık Korona</h1>
          <ul className="flex gap-12 items-center">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contacts</li>
            <li>
              <Image src="/github.png" height={30} width={30} />
            </li>
            <li>
              <Image src="/linkedin.png" height={30} width={30} />
            </li>
            <li>
              <Image src="/instagram.png" height={30} width={30} />
            </li>
          </ul>
        </div>

        {/* main content */}
        <main className="flex my-40 items-center justify-between ">
          <div>
            <h2 className="font-[500] text-[28px]">Hi, I'm Namık,</h2>
            <p className="text-[96px] font-[700] leading-[110px]">I'M A</p>
            <p className="text-[96px] font-[700] leading-[110px]">DEVELOPER</p>
            <ul className="flex flex-col">
              <li className="font-[400px] text-[24px] text-[#F8F7F9] opacity-50">
                Interactive Elements:
              </li>
              <li className="font-[400px] text-[24px] text-[#F8F7F9] opacity-50">
                Prototyping for Web:
              </li>
              <li className="font-[400px] text-[24px] text-[#F8F7F9] opacity-50">
                Responsive Design:
              </li>
              <li className="font-[400px] text-[24px] text-[#F8F7F9] opacity-50">
                Collaborative Design Workflows:
              </li>
            </ul>
            <p className="text-[26px] font-[800] border-b-4 w-[235px] mt-10">
              View My Projects
            </p>
          </div>
          <Image
            src="/preview.png"
            width={592}
            height={592}
            className=" w-[592] h-[592]"
          />
        </main>
      </div>

      <Image
        src="/ch-4-background.png"
        width={1823}
        height={1203}
        className=" absolute z-0 left-0 top-0"
      />
    </div>
  );
};

export default Challenge4;
