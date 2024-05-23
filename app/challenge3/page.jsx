"use client";

import Image from "next/image";

import React, { useState } from "react";

const Challenge3 = () => {
  const [selectedOption, setSelectedOption] = useState("Series");
  const options = ["Series", "Option 1", "Option 2", "Option 3"];

  const [checkboxOptions, setCheckboxOptions] = useState({
    Comedy: true,
    Action: false,
    Romance: true,
  });

  const [selectedGender, setSelectedGender] = useState("");
  const [freeText, setFreeText] = useState("");

  const handleCheckboxChange = (event) => {
    setCheckboxOptions({
      ...checkboxOptions,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRadioChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleFreeTextChange = (event) => {
    setFreeText(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className="font-Poppins mx-auto bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/ch-3bg.jpg')` }}
    >
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 p-4">
        <h1 className="text-4xl font-bold text-white mt-10">
          NET<span className="text-red-500">FLIX</span>
        </h1>
        <p className="text-center text-white">
          Thank you for signing up to Netflix. Tell me more about yourself.
        </p>

        <form className="flex flex-col gap-4 sm:w-[400px] w-[380px] px-10 py-5 m-2 bg-black text-white">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="name">
              First Name
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="enter your name"
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="age">
              Age
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="enter your age"
              id="age"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="enter your email"
              id="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-white" htmlFor="name">
              Content Type
            </label>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="border p-2 text-black"
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Choose Options</label>
            {Object.keys(checkboxOptions).map((key) => (
              <label key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={checkboxOptions[key]}
                  onChange={handleCheckboxChange}
                />
                {key}
              </label>
            ))}
          </div>

          {/* Radio buttons for gender */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Gender</label>
            {["Male", "Female", "Other"].map((gender) => (
              <label key={gender}>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={selectedGender === gender}
                  onChange={handleRadioChange}
                />
                {gender}
              </label>
            ))}
          </div>

          {/* Free text area */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="freeText">
              Free Text
            </label>
            <textarea
              id="freeText"
              value={freeText}
              onChange={handleFreeTextChange}
              rows="4"
              className="p-4 border"
            />
          </div>

          <button className="text-white bg-red-600 rounded-3xl p-4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Challenge3;
