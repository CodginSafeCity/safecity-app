import {z} from "zod";

// Schema for user registration form
export const createsUserSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Confirm Password is required" }),
    role_id: z.number().min(1, { message: "Role is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

// Schema for user update form
export const updateUserSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.email({ message: "Invalid email address" }),
    role_id: z.number().min(1, { message: "Role is required" }),
});

