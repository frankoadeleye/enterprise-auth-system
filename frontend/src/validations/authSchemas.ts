import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export const signupSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),

  email: z.email("Please enter a valid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type LoginFormData = z.infer<typeof loginSchema>;

export type SignupFormData = z.infer<typeof signupSchema>;

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
