"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import DropDownDetail, { Withdrawal } from "./dropDownDetail";
import { set } from "zod/v4";

const FundWithdrawal = () => {
  const [dropDown, setDropDown] = useState(false);
  const [withdrawalData, setWithdrawalData] = useState(null);
  const [review, setReview] = useState<Withdrawal | null>(null);
  const [view, setView] = useState(true);

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
    setView(false);
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

        {view && (
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
        )}
      </div>

      {dropDown && <DropDownDetail onNext={handleDetailNext} />}

      {review && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="">
            <p>Bank Name</p>
            <p>{review.bank}</p>
          </div>
          <div className="">
            <p>Branch Name</p>
            <p>{review.branch}</p>
          </div>
          <div className="">
            <p>Branch Name</p>
            <p>{review.branch}</p>
          </div>
          <div className="">
            <p>Account Name</p>
            <p>{review.accountName}</p>
          </div>
          <div className="">
            <p>Account Number</p>
            <p>{review.accountNumber}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundWithdrawal;
