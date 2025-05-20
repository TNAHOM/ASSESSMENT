import { Check } from "lucide-react";
import React from "react";
import FundWithdrawal from "./kyx/FundWithdrawal";

const Onboarding = () => {
  return (
    <div className="mx-6 space-y-6">
      <div className="flex gap-2 items-center whitespace-nowrap">
        <hr className="w-full border-green-300 my-4" />
        <div className="">
          <p className="text-lg font-medium w-full">Partner Onboarding</p>
        </div>
        <hr className="w-full border-green-300 my-4" />
      </div>

      <div className="flex gap-2">
        <div className="flex gap-2 items-center whitespace-nowrap">
          <div className="bg-green-100 p-2 rounded-full w-fit h-fit flex items-center">
            <Check color="green" />
          </div>
          <p className="text-sm font-medium">Check Merchant</p>
        </div>

        <hr className="w-full border-gray-300 my-4" />

        <div className="flex gap-2 items-center whitespace-nowrap">
          <div className="bg-green-100 p-2 rounded-full w-fit h-fit flex items-center">
            <Check color="green" />
          </div>
          <p className="text-sm font-medium">Distribution Detail</p>
        </div>

        <hr className="w-full border-gray-300 my-4" />

        <div className="flex gap-2 items-center whitespace-nowrap">
          <div className="bg-green-100 p-2 rounded-full w-fit h-fit flex items-center">
            <Check color="green" />
          </div>
          <p className="text-sm font-medium">Business Type</p>
        </div>

        <hr className="w-full border-gray-300 my-4" />

        <div className="flex gap-2 items-center  whitespace-nowrap">
          <div className="bg-green-100 p-2 rounded-full w-fit h-fit flex items-center">
            <Check color="green" />
          </div>
          <p className="text-sm font-medium">Business Detail</p>
        </div>

        <hr className="w-full border-gray-300 my-4" />

        <div className="flex gap-2 items-center  whitespace-nowrap">
          <div className="bg-green-100 p-2 rounded-full w-fit h-fit flex items-center">
            <Check color="green" />
          </div>
          <p className="text-sm font-medium">Business Owner</p>
        </div>

        <hr className="w-full border-gray-300 my-4" />

        <div className="flex gap-2 items-center  whitespace-nowrap">
          <div className="bg-green-100 p-2 rounded-full w-fit h-fit flex items-center">
            <Check color="green" />
          </div>
          <p className="text-sm font-medium">Fund Withdrawal</p>
        </div>

        <hr className="w-full border-gray-300 my-4" />

        <div className="flex gap-2 items-center whitespace-nowrap">
          <div className="bg-green-100 p-2 rounded-full w-fit h-fit flex items-center">
            <Check color="green" />
          </div>
          <p className="text-sm font-medium">Review</p>
        </div>
      </div>

      <FundWithdrawal />
    </div>
  );
};

export default Onboarding;
