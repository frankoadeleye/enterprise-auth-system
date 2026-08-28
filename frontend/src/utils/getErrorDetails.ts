import axios from "axios";

export type AuthErrorType = "network" | "validation";

interface ErrorDetails {
  message: string;
  type: AuthErrorType;
}

const infrastructureErrors = [
  "ENOTFOUND",
  "ETIMEDOUT",
  "ECONNREFUSED",
  "MongoServerSelectionError",
  "MongoNetworkError",
];

export const getErrorDetails = (error: unknown): ErrorDetails => {
  if (!axios.isAxiosError(error)) {
    return {
      message: "Something went wrong. Please try again.",
      type: "validation",
    };
  }

  if (!error.response) {
    return {
      message:
        "Unable to connect to the server. Please check your internet connection and try again.",
      type: "network",
    };
  }

  const serverMessage = error.response.data?.message || "";

  const isInfrastructureError = infrastructureErrors.some((keyword) =>
    serverMessage.includes(keyword),
  );

  if (isInfrastructureError) {
    return {
      message:
        "Our servers are temporarily unavailable. Please try again in a moment.",
      type: "network",
    };
  }

  return {
    message: serverMessage || "Something went wrong. Please try again.",
    type: "validation",
  };
};
