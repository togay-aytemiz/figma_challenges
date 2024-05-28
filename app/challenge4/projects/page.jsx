import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="font-Poppins bg-black h-[100vh] text-white">
      <div className=" pt-40">
        {/* Header */}
        <div className="flex items-center justify-center flex-col gap-6">
          <Image src="/ch4-avatar.png" height={145} width={145} />
          <h1 className="text-[47px] font-[400 font-PaytoneOne">
            Namık Korona
          </h1>
          <p className="text-[23px] font-[400] text-[#F7F7F5] opacity-50">
            Designer | Developer
          </p>
          <button className=" rounded-md bg-[#FFB829] text-black px-6 py-1 underline">
            Follow
          </button>
        </div>

        {/* Social Icons */}

        <div className=" mt-[128px] flex items-center justify-center gap-[110px]">
          <div className=" flex items-center justify-center gap-6">
            <Image src="/ch-4-telegram.png" height={58} width={58} />
            <div className="flex gap-1 flex-col">
              <p className="text-[21px]">Telegram</p>
              <p className="text-[#FFB829] text-[21px]">@ ↗️</p>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-6">
            <Image src="/ch-4-email.png" height={58} width={58} />
            <div className="flex gap-1 flex-col">
              <p className="text-[21px]">Mail</p>
              <p className="text-[#FFB829] text-[21px]">@gmail.com</p>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-6">
            <Image src="/ch-4-github.png" height={58} width={58} />
            <div className="flex gap-1 flex-col">
              <p className="text-[21px]">GitHub</p>
              <p className="text-[#FFB829] text-[21px]">@ ↗️</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
