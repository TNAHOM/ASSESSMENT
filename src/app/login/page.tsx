"use client";
import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/lib/schema";
import { useRouter } from "next/navigation";
import { Camera, Heart, Star } from "lucide-react";

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
    <div className="flex items-start h-screen gap-4 w-4/6 mx-auto ">
      <div>
        <h1 className="text-3xl font-bold text-center">
          M-PESA Acquisition Portal
        </h1>
        <p>
          Welcome to M-PESA world of convenience! This portal provides an
          efficient way to access the future of payments.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md">
            <div className="flex flex-col">
              <Label
                htmlFor="email"
                className="text-lg font-semibold text-gray-700"
              >
                Your Email Address
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                className="w-96 mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="password"
                className="text-lg font-semibold text-gray-700"
              >
                Your Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-96 mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <Camera className="h-10 w-10 text-blue-500" />
        <Heart className="h-10 w-10 text-red-500" />
        <Star className="h-10 w-10 text-yellow-500" />
        <h1 className="text-2xl font-bold">This are just a mock Icons</h1>
      </div>
    </div>
  );
};

export default Login;
