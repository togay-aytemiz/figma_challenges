import Image from "next/image";
import React from "react";

const CH5Socialicons = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <Image
          src="/ch5/Component 1.png"
          height={96}
          width={96}
          className="sm:h-[96px] sm:w-[96px]"
        />
        <Image
          src="/ch5/Component 2.png"
          height={96}
          width={96}
          className="sm:h-[96px] sm:w-[96px]"
        />
        <Image
          src="/ch5/Component 3.png"
          height={96}
          width={96}
          className="sm:h-[96px] sm:w-[96px]"
        />
        <Image
          src="/ch5/Component 4.png"
          height={96}
          width={96}
          className="sm:h-[96px] sm:w-[96px]"
        />
      </div>
    </div>
  );
};

export default CH5Socialicons;
