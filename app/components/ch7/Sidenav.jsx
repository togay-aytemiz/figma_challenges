import Link from "next/link";

import React from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-[#4A7A4C]">
      <Link
        className="flex h-20 items-end justify-start rounded-mdp-4 md:h-40 sm:mb-20 mb-5 mt-10"
        href="/"
      >
        <div className="flex flex-col items-center text-center mx-auto">
          <Image src="/ch7/avatar.png" width={123} height={123} />
          <div>
            <h1 className="text-[19px] font-[700] text-white">Namık Korona</h1>
            <p className="text-[12px] font-[700] text-white">Farm Owner</p>
          </div>
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <button className="sm:text-[23px] text-md font-md sm:font-[700] text-[#4A7A4C] bg-white sm:p-1 px-2 rounded-lg">
          + Add Farm
        </button>
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form className="sm:block hidden">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md text-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-[#4A7A4D] md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <PowerIcon className="w-6" /> */}
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
