import Image from "next/image";
import React from "react";

const UserCard = ({
  image,
  score,
  numberOfScores,
  nation,
  subtitle,
  price,
  status,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-[4px] relative">
        <Image
          src={image}
          height={500}
          width={400}
          className="h-[235px] w-[176px]"
        />
        {status && (
          <p className="absolute top-2 left-2 z-10 bg-white text-[11px] p-[2px]">
            {" "}
            {status}
          </p>
        )}

        <div className="flex items-center gap-[2px] mt-[5px] ">
          <Image src="/ch6/Star.png" height={14} width={14} />
          <div className="flex gap-1 items-center text-[12px]">
            <p>{score}</p>
            <p className="text-[#918E9B]">({numberOfScores})</p>
            <Image
              src="/ch6/ellipse.png"
              height={2}
              width={2}
              className="h-[2px] w-[2px]"
            />
            <p className="text-[#918E9B]">{nation}</p>
          </div>
        </div>
        <p className="text-[12px] font-[300]">{subtitle}</p>
        <p className="text-[12px]">
          <span className=" font-bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default UserCard;
