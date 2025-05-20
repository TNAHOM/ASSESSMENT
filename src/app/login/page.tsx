"use client";
import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/lib/schema";
import { useRouter } from "next/navigation";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: LoginForm = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = loginSchema.safeParse(data);
    if (result.success) {
      setErrors({});
      console.log("Validation passed", data);
      router.push("/");
    } else {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
    }

    console.log("Form submitted", data);
  };

  return (
    <div className="flex items-start h-screen gap-4 w-4/6 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center">
          M-PESA Acquisition Portal
        </h1>
        <p>
          Welcome to M-PESA world of convenience! This portal provides an
          efficient way to access the future of payments.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email" className="text-lg font-semibold">
                Your Email Address
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                className="w-96"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password" className="text-lg font-semibold">
                Your Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-96"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
          >
            Login
          </button>
        </form>
      </div>

      <div className="flex items-center justify-center gap-8 mt-8">
        <h1>Icons</h1>
      </div>
    </div>
  );
};

export default Login;
