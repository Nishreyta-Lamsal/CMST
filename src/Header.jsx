import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex items-center p-3 pb-0 -mb-3 shadow-md bg-white ml-[12.4rem]">
      <p className="text-xs text-gray-500 mr-[37rem] ml-5">
        Welcome back, <span className="font-bold">test</span>
      </p>
      <p className="font-bold text-gray-500 text-xs mr-3">
        You are on free plan
      </p>
      <button className="text-xs font-bold text-white px-3 py-2 bg-blue-600 rounded-md mr-3">
        Upgrade
      </button>
      <p className="font-bold text-gray-500 text-xs mr-5">
        to enjoy all features.
      </p>
      <i class="fa-solid fa-exclamation text-gray-500 text-sm mr-8 p-2"></i>
      <i className="fa-solid fa-bell text-gray-500 text-sm mr-8"></i>
      <i className="fa-solid fa-gear text-gray-500 text-sm mr-8"></i>
      <select
        className="outline-none text-xs text-gray-500 bg-green-100 w-16 pl-3 h-12 cursor-pointer"
        value="test"
      >
        <option className="hidden" value="test">
          test
        </option>
        <option className="bg-white" value="My Profile">
          My Profile
        </option>
        <option className="bg-white" value="Change Password">
          Change Password
        </option>
        <option className="bg-white" value="EOD Reports">
          EOD Reports
        </option>
        <option className="bg-white" value="Send Feedback">
          Send Feedback
        </option>
        <option className="bg-white" value="Logout">
          Logout
        </option>
      </select>
    </div>
  );
};
export default Header;
