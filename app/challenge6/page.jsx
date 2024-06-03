import Image from "next/image";
import React from "react";
import UserCard from "../components/ch6/UserCard";

const page = () => {
  return (
    <div>
      <div className="font-Poppins">
        <div className="flex flex-col">
          {/* Header */}
          <div className=" py-6 bg-white shadow-xl pl-10 flex items-center justify-center">
            <div className="w-[550px]">
              <Image src="/ch6/airbnb.png" width={82} height={25} />
            </div>
          </div>

          <div className="mx-auto w-[550px] flex flex-col justify-start">
            {/* Gallery */}
            <div className="py-6 flex justify-center ">
              <Image src="/ch6/group.png" height={232} width={395} />
            </div>

            {/* Testimonials */}
            <div className="pl-10 pb-10">
              <div>
                <h1 className="font-[600] text-[36px]">Online Experiences</h1>
                <p className="sm:max-w-[320px] text-[16px] font-[300]">
                  Join unique interactive activities led by one-of-a-kind
                  hosts—all without leaving home.
                </p>
                <div className="pt-10 flex gap-[18px]">
                  <UserCard
                    image={"/ch6/image1.png"}
                    score={5.0}
                    numberOfScores={6}
                    nation={"USA"}
                    subtitle={"Life lessons with Katie Zaferes"}
                    price={136}
                    status={"Sold Out"}
                  />
                  <UserCard
                    image={"/ch6/image2.png"}
                    score={5.0}
                    numberOfScores={30}
                    nation={"USA"}
                    subtitle={"Learn wedding photography"}
                    price={125}
                    status={"Online"}
                  />
                  <UserCard
                    image={"/ch6/image3.png"}
                    score={4.8}
                    numberOfScores={50}
                    nation={"USA"}
                    subtitle={"Group Mountain Biking"}
                    price={50}
                    status={null}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
