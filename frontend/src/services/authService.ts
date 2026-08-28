import { api } from "@/lib/axios";
import type { AuthResponse } from "@/types/Auth";

export async function signupUser(
  fullName: string,
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await api.post("/auth/signup", {
    name: fullName,
    email,
    password,
  });

  return response.data;
}

export async function verifyEmail(
  email: string,
  code: string,
): Promise<AuthResponse> {
  const response = await api.post("/auth/verify-email", {
    email,
    code,
  });

  return response.data;
}

export async function resendVerificationEmail(
  email: string,
): Promise<AuthResponse> {
  const response = await api.post("/auth/resend-verification-email", { email });

  return response.data;
}

export async function loginUser(
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
}

export async function logoutUser(): Promise<AuthResponse> {
  const response = await api.post("/auth/logout");

  return response.data;
}

export async function forgotPassword(email: string): Promise<AuthResponse> {
  const response = await api.post("/auth/forgot-password", { email });

  return response.data;
}

export async function resetPassword(
  token: string,
  password: string,
): Promise<AuthResponse> {
  const response = await api.post(`/auth/reset-password/${token}`, {
    password,
  });

  return response.data;
}

export async function checkAuth(): Promise<AuthResponse> {
  const response = await api.get("/auth/check-auth");

  return response.data;
}
