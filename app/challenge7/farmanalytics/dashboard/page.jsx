import Image from "next/image";
import React from "react";
Image;

const page = () => {
  const crops = [
    { name: "Wheat", percentage: 40, color: "pink-400", status: "Ready" },
    { name: "Corn", percentage: 10, color: "blue-800", status: "Not Ready" },
    { name: "Barley", percentage: 30, color: "red-600", status: "Ready" },
    { name: "Paddy", percentage: 20, color: "green-600", status: "Ready" },
  ];

  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="bg-white rounded-xl p-[25px] w-full h-full">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="sm:text-[38px] text-lg font-[700] text-[#4A7A4C]">
            Dashboard
          </h1>
          <div className="flex flex-row gap-4">
            <button className="sm:text-[23px] text-medium text-nowrap font-[700] sm:p-2 px-[14px] bg-[#4A7A4C] text-white rounded-xl hover:shadow-xl flex flex-row items-center justify-center gap-2">
              <Image src="/ch7/liveview.png" width={26} height={19} /> View live
            </button>
          </div>
        </div>

        <ul className="ml-5 mt-10 flex flex-col gap-3">
          <li className="text-[23px] font-[700] text-[#308B34]">Farms:</li>
          <li className="text-[23px] font-[700] text-[#308B34]">Area:</li>
          <li className="text-[23px] font-[700] text-[#308B34]">
            Expected date of Harvest:
          </li>
        </ul>

        <div className="grid grid-cols-2 mt-10 gap-8">
          <Image src="/ch7/farmImage.png" height={652} width={510} />
          <div className="mx-auto w-full bg-white rounded-lg shadow-md p-4">
            <div className="relative flex justify-center items-center gap-10">
              <div className="w-40 h-40 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  {crops.map((crop, index) => {
                    const offset = crops
                      .slice(0, index)
                      .reduce((acc, cur) => acc + cur.percentage, 0);
                    return (
                      <circle
                        key={crop.name}
                        className={`text-${crop.color} stroke-current`}
                        strokeWidth="3.8"
                        fill="none"
                        cx="18"
                        cy="18"
                        r={radius}
                        strokeDasharray={`${crop.percentage} ${
                          100 - crop.percentage
                        }`}
                        strokeDashoffset={-offset}
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">23 Acres</span>
                </div>
              </div>

              <div className="mt-4">
                {crops.map((crop) => (
                  <div
                    className="grid grid-cols-3 items-center  mb-2"
                    key={crop.name}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 bg-${crop.color} rounded-full inline-block mr-2`}
                      ></div>
                      <p className="text-lg font-semibold">{crop.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14">
              {crops.map((crop) => (
                <div
                  className="grid grid-cols-3 items-center  mb-2"
                  key={crop.name}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 bg-${crop.color} rounded-full inline-block mr-2`}
                    ></div>
                    <p className="text-lg font-semibold">{crop.name}</p>
                  </div>
                  <div className="flex items-center">
                    <p className={`text-${crop.color} text-md font-bold`}>
                      {crop.percentage}%
                    </p>
                  </div>
                  <div
                    className={` text-xs ${
                      crop.status === "Ready"
                        ? "text-green-600 border-2 border-green-600 max-w-[55px]"
                        : "text-red-800 border-2 border-red-800 max-w-[80px]"
                    } px-2 py-1 rounded-md`}
                  >
                    {crop.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
