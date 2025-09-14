import { ZodType, z } from "zod";

// Login Schema validation
export const loginSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(1, { message: "Password is required" }),
});

// Register Schema validation
export const registerSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

// Forgot Password Schema validation
export const forgotPasswordSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
});

// Reset Password Schema validation
export const resetPasswordSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
    newPassword: z.string().min(1).max(100),
    confirmNewPassword: z.string().min(1).max(100),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
});