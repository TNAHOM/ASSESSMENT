"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import DropDownDetail, { Withdrawal } from "./dropDownDetail";

const FundWithdrawal = () => {
  const [dropDown, setDropDown] = useState(false);
  const [withdrawalData, setWithdrawalData] = useState(null);
  const [review, setReview] = useState<Withdrawal | null>(null);

  const handleNext = (page: string) => {
    if (page === "detail") {
      setDropDown(!dropDown);
      console.log("DropDown:", dropDown);
    }
  };

  // Updated to receive data from DropDownDetail
  const handleDetailNext = (page: string, data: any) => {
    console.log("Withdrawal Data:", data);
    setWithdrawalData(data);
    handleNext(page);
    setReview(data);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-2xl w-full h-fit items-center">
      <div className="flex gap-4 whitespace-nowrap">
        <hr className="w-full border-gray-300 my-4" />
        <p className="text-lg font-medium">Fund Withdrawal Option</p>
        <hr className="w-full border-gray-300 my-4" />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center space-x-2 border-2 shadow-sm border-gray-300 rounded-sm px-4 py-2 w-[200px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Bank
          </label>
        </div>

        <div className="flex gap-4">
          <Button className="bg-green-400 text-white hover:bg-green-500">
            Back
          </Button>
          <Button
            onClick={() => handleNext("detail")}
            className="bg-green-400 text-white hover:bg-green-500"
          >
            Next
          </Button>
        </div>
      </div>

      {dropDown && <DropDownDetail onNext={handleDetailNext} />}

      {review && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <h3 className="text-lg font-medium mb-3">Review Your Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Bank:</span>
              <span>{review.bank}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Branch:</span>
              <span>{review.branch}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Account Name:</span>
              <span>{review.accountName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Account Number:</span>
              <span>{review.accountNumber}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundWithdrawal;
