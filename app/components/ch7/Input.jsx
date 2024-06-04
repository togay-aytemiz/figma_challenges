import React from "react";

const Input = ({ icon, placeholder }) => {
  const FieldIcon = icon;
  return (
    <div className="border-2 p-2 rounded-xl border-[#777777] text-[20px] font-[400] text-[#A7A7A7] bg-white flex items-center gap-2">
      <FieldIcon width={24} height={24} className="text-[#544E4E]" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none text-[#544E4E]"
      />
    </div>
  );
};

export default Input;
