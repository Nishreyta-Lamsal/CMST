import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Services = () => {
  return (
    <div className="bg-[#f7f9f7] w-screen h-screen mt-[3.7rem]">
      <div className="flex justify-between items-center">
        <button className="mt-3 ml-52 text-xs font-semibold text-white px-3 py-2.5 bg-blue-600 rounded-md">
          Add Services
        </button>
        <i className="absolute fa-solid fa-magnifying-glass text-gray-500 ml-[90.5rem] mt-3"></i>
        <input
          className="text-sm mt-3 py-3 mr-14 pl-3 w-1/4 border border-gray-400 rounded-md outline-blue-500"
          placeholder="Search"
        />
      </div>
      <button className="p-3 active:bg-gray-400 mt-2 ml-[13rem] font-semibold text-sm relative">
        <span
          className="underline underline-offset-[15px] text-gray-900"
          style={{ textDecorationColor: "blue" }}
        >
          SERVICES
        </span>
      </button>
      <hr className="w-[83%] ml-52" />
      <div className="mt-3 border ml-[13rem] mr-[3.3rem] bg-white text-sm font-medium">
        <div className="bg-[#f7f9f7] p-4 pb-3 flex gap-44">
          <i className="fa-regular fa-square text-gray-400 text-xl -mr-32"></i>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Service</p>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Price</p>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Description</p>
          <i className="fa-solid fa-arrow-down -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Created Date</p>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Actions</p>
        </div>
        <div className="flex justify-center mb-2">
          <p className="font-normal"> No data available</p>
        </div>
      </div>
      <div className="flex justify-end border ml-[13rem] mr-[3.3rem] bg-white mt-[0.03rem] p-4">
        <p className="text-xs text-gray-500">
          Rows per page:
          <select className="outline-none ml-6">
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>All</option>
          </select>
          <i className="fa-solid fa-minus text-[0.4rem] text-gray-400 ml-10"></i>
          <i className="fa-solid fa-chevron-left text-[0.5rem] text-gray-400 ml-10"></i>
          <i className="fa-solid fa-chevron-right text-[0.5rem] text-gray-400 ml-6"></i>
        </p>
      </div>
    </div>
  );
};

export default Services;
