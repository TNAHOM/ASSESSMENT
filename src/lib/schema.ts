import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character",
    })
    .nonempty({ message: "Password is required" }),
});

export const withdrawalSchema = z.object({
  bank: z.string().nonempty({ message: "Bank is required" }),
  branch: z.string().nonempty({ message: "Branch is required" }),
  accountName: z.string().nonempty({ message: "Account Name is required" }),
  accountNumber: z.string().nonempty({ message: "Account Number is required" }),
  proofOfBankAccount: z.instanceof(File).refine((file) => file.size > 0, {
    message: "Proof of Bank Account is required",
  }),
});
