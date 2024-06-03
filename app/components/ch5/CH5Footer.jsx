import Image from "next/image";
import React from "react";

const CH5Footer = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="text-[48px] font-[800] flex flex-col sm:flex-row justify-center items-center gap-10">
        <Image src="/ch5/logo.png" height={100} width={100} />
        <h1>Namık Korona</h1>
      </div>
      <p className="sm:text-[40px] text-[30px] font-[700] sm:px-[200px] px-[20px] text-center">
        I Make as soon as Possible .You really like my work contact me and let’s
        Work Together.
      </p>

      <div className="flex flex-row gap-1">
        <Image
          src="/ch5/Component 1.png"
          height={46}
          width={46}
          className="sm:h-[96px] sm:w-[96px]"
        />
        <Image
          src="/ch5/Component 2.png"
          height={46}
          width={46}
          className="sm:h-[96px] sm:w-[96px]"
        />
        <Image
          src="/ch5/Component 3.png"
          height={46}
          width={46}
          className="sm:h-[96px] sm:w-[96px]"
        />
        <Image
          src="/ch5/Component 4.png"
          height={46}
          width={46}
          className="sm:h-[96px] sm:w-[96px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-around justify-center items-center text-center w-full text-[25px] font-[500] mt-10 sm:gap-0 gap-4">
        <div className="flex gap-2 justify-center">
          <Image src="/ch5/Vector.png" height={20} width={28} />
          <p>Türkiye</p>
        </div>
        <p>© 2024, All Rights By Figma Design.</p>
        <ul className="flex gap-4 text-blue-800 sm:flex-row flex-col items-center justify-center text-center">
          <li>Guides</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default CH5Footer;
