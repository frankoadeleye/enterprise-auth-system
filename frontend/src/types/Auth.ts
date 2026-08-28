export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  fullName: string;
  email: string;
  password: string;
}

import type { User } from "./User";

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: User;
}
