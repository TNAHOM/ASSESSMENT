import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";

import { withdrawalSchema } from "@/lib/schema";
import { Button } from "../ui/button";

export interface Withdrawal {
  bank: string;
  branch: string;
  accountName: string;
  accountNumber: string;
  proofOfBankAccount: string | File;
}

interface DropDownDetailProps {
  onNext: (page: string, data: Withdrawal) => void; // updated signature
}

const DropDownDetail = ({ onNext }: DropDownDetailProps) => {
  const [formData, setFormData] = useState({
    bank: "",
    branch: "",
    accountName: "",
    accountNumber: "",
    proofOfBankAccount: null as File | null,
  });
  const [errors, setErrors] = useState<Partial<Withdrawal>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObj = new FormData(e.currentTarget);

    const data: Withdrawal = {
      bank: formDataObj.get("bank") as string,
      branch: formDataObj.get("branch") as string,
      accountName: formDataObj.get("accountName") as string,
      accountNumber: formDataObj.get("accountNumber") as string,
      proofOfBankAccount: formDataObj.get("proofOfBankAccount") as File,
    };

    const result = withdrawalSchema.safeParse(data);
    if (!result.success) {
      setErrors({});
      if (result.error) {
        console.log(result.error);
        const fieldErrors = result.error.flatten().fieldErrors;
        setErrors({
          bank: fieldErrors.bank?.[0],
          branch: fieldErrors.branch?.[0],
          accountName: fieldErrors.accountName?.[0],
          accountNumber: fieldErrors.accountNumber?.[0],
          proofOfBankAccount: fieldErrors.proofOfBankAccount?.[0],
        });
      }
    } else {
      onNext("detail", data); // pass all data to parent
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full  space-y-2">
        <div className="w-full">
          <Label htmlFor="bank" className="text-sm font-medium">
            Bank
          </Label>
          <Select
            onValueChange={(value) => setFormData({ ...formData, bank: value })}
            name="bank"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Banks</SelectLabel>
                <SelectItem value="apple">
                  Commercial Bank of ethiopia
                </SelectItem>
                <SelectItem value="Awash Bank">Awash Bank</SelectItem>
                <SelectItem value="Addis Bank">Addis Bank</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.bank && (
            <p className="text-red-600 text-sm mt-1">{errors.bank}</p>
          )}
        </div>

        <div className="w-full">
          <Label htmlFor="branch" className="text-sm font-medium">
            Branch
          </Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, branch: value })
            }
            name="branch"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Branch</SelectLabel>
                <SelectItem value="Kotobe">Kotobe</SelectItem>
                <SelectItem value="Bole">Bole</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.branch && (
            <p className="text-red-600 text-sm mt-1">{errors.branch}</p>
          )}
        </div>

        <div className="w-full">
          <Label htmlFor="accountName" className="text-sm font-medium">
            Account Name
          </Label>
          <Input
            id="accountName"
            className="mt-1"
            type="text"
            value={formData.accountName}
            onChange={(e) =>
              setFormData({ ...formData, accountName: e.target.value })
            }
            name="accountName"
          />
          {errors.accountName && (
            <p className="text-red-600 text-sm mt-1">{errors.accountName}</p>
          )}
        </div>

        <div className="w-full">
          <Label htmlFor="accountNumber" className="text-sm font-medium">
            Account Number
          </Label>
          <Input
            id="accountNumber"
            className="mt-1"
            type="number"
            value={formData.accountNumber}
            onChange={(e) =>
              setFormData({ ...formData, accountNumber: e.target.value })
            }
            name="accountNumber"
          />
          {errors.accountNumber && (
            <p className="text-red-600 text-sm mt-1">{errors.accountNumber}</p>
          )}
        </div>

        <div className="w-full">
          <Label htmlFor="proofOfBankAccount" className="text-sm font-medium">
            Proof of Bank Account
          </Label>
          <Input
            id="proofOfBankAccount"
            className="mt-1"
            type="file"
            onChange={(e) =>
              setFormData({
                ...formData,
                proofOfBankAccount: e.target.files ? e.target.files[0] : null,
              })
            }
            name="proofOfBankAccount"
          />
          {errors?.proofOfBankAccount && (
            <p className="text-red-600 text-sm mt-1">
              {typeof errors?.proofOfBankAccount === "string"
                ? errors.proofOfBankAccount
                : ""}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <Button
          type="submit"
          className="bg-green-400 text-white hover:bg-green-500"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default DropDownDetail;
