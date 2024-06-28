import React from "react";

export default function Cart() {
  //   const data = [{ name }];
  return (
    <div>
      <div className="container flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <label className=" flex items-center justify-start gap-2 w-[300px] outline-none">
          <input
            style={{ borderRadius: "12px", background: "none" }}
            type="text"
            className="grow outline-none p-2"
            placeholder="Search for movies or TV series"
          />
        </label>
      </div>

      <div className="container">
        <h2 className="mt-5 text-2xl">Movies</h2>
        <div className="justify-between gap-9 mt-5 grid grid-cols-4">
          <img className="" src="/Group 2.png" alt="" />
          <img className="" src="/Group 5.png" alt="" />
          <img className="" src="/Group 6.png" alt="" />
          <img className="" src="/Group 7.png" alt="" />
          <img className="" src="/Group 8.png" alt="" />
          <img className="" src="/Group 9.png" alt="" />

          <img className="" src="/Group 12.png" alt="" />
          <img className="" src="/Group 11.png" alt="" />
          <img className="" src="/Group 9.png" alt="" />
          <img className="" src="/Group 9 (1).png" alt="" />
          <img className="" src="/Group 9 (2).png" alt="" />
          <img className="" src="/Group 9 Copy.png" alt="" />
          <img className="" src="/Group 9 Copy2.png" alt="" />
        </div>
      </div>
    </div>
  );
}