import { create } from "zustand";
import type { AuthErrorType } from "@/utils/getErrorDetails";
import type { User } from "@/types/User";

import {
  checkAuth,
  forgotPassword as forgotPasswordRequest,
  loginUser,
  logoutUser,
  resendVerificationEmail as resendVerificationEmailRequest,
  resetPassword as resetPasswordRequest,
  signupUser,
  verifyEmail as verifyEmailRequest,
} from "@/services/authService";

import { authRequest } from "@/utils/authRequest";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  isLoading: boolean;
  error: string | null;
  errorType: AuthErrorType | null;

  clearError: () => void;
  checkAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signup: (fullName: string, email: string, password: string) => Promise<void>;
  verifyEmail: (email: string, code: string) => Promise<User>;
  resendVerificationEmail: (email: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setAuthenticatedUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  isLoading: false,
  error: null,
  errorType: null,

  checkAuth: async () => {
    set({
      isCheckingAuth: true,
    });

    try {
      const response = await checkAuth();

      if (!response.success || !response.user) {
        set({
          user: null,
          isAuthenticated: false,
        });
        return;
      }

      set({
        user: response.user,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error("Check Auth Error:", error);

      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({
        isCheckingAuth: false,
      });
    }
  },
  login: async (email, password) => {
    const response = await authRequest({
      request: () => loginUser(email, password),
      set,
      fallbackMessage: "Login failed",
      operationName: "Login",
    });

    if (!response.user) {
      throw new Error("Login failed");
    }

    set({
      user: response.user,
      isAuthenticated: true,
    });
  },

  signup: async (fullName, email, password) => {
    await authRequest({
      request: () => signupUser(fullName, email, password),
      set,
      fallbackMessage: "Signup failed",
      operationName: "Signup",
    });
  },

  verifyEmail: async (email, code) => {
    const response = await authRequest({
      request: () => verifyEmailRequest(email, code),
      set,
      fallbackMessage: "Email verification failed",
      operationName: "Verify Email",
    });

    if (!response.user) {
      throw new Error("Email verification failed");
    }

    set({
      user: response.user,
      isAuthenticated: true,
    });

    return response.user;
  },
  resendVerificationEmail: async (email) => {
    await authRequest({
      request: () => resendVerificationEmailRequest(email),
      set,
      fallbackMessage: "Failed to resend verification email",
      operationName: "Resend Verification",
    });
  },
  forgotPassword: async (email) => {
    await authRequest({
      request: () => forgotPasswordRequest(email),
      set,
      fallbackMessage: "Failed to send password reset email",
      operationName: "Forgot Password",
    });
  },
  resetPassword: async (token, password) => {
    await authRequest({
      request: () => resetPasswordRequest(token, password),
      set,
      fallbackMessage: "Password reset failed",
      operationName: "Reset Password",
    });
  },

  setAuthenticatedUser: (user) =>
    set({
      user,
      isAuthenticated: true,
      error: null,
      errorType: null,
    }),
  logout: async () => {
    set({
      isLoading: true,
      error: null,
      errorType: null,
    });

    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        errorType: null,
      });
    }
  },

  clearError: () => {
    set({
      error: null,
      errorType: null,
    });
  },
}));
