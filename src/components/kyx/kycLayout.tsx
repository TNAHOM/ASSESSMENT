import React from "react";
import SideBar from "@/components/common/sideBar";

const kycLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-3 bg-gray-100 p-4">
        <SideBar />
      </div>
      <div className="col-span-9 p-6 overflow-auto">{children}</div>
    </div>
  );
};

export default kycLayout;
