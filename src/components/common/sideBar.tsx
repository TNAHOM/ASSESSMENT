import React from "react";

const sideBar = () => {
  return (
    <div className="w-full">
      <ul className="space-y-4">
        <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Dashboard</li>
        <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Profile</li>
        <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Settings</li>
        <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">Logout</li>
      </ul>
    </div>
  );
};

export default sideBar;
