import { ZodType, z } from "zod";
import { FormLoginData, FormRegisterData } from "./auth";

// Login Schema validation
export const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

// Register Schema validation
export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
    password_confirmation: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

// Forgot Password Schema validation
export const forgotPasswordSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
});

// Reset Password Schema validation
export const resetPasswordSchema = z
  .object({
    email: z.email({ message: "Invalid email address" }),
    token: z.string().min(1, { message: "Token is required" }),
    password: z.string().min(1).max(100),
    password_confirmation: z.string().min(1).max(100),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });
