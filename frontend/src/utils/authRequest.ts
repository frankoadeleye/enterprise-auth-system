import { getErrorDetails } from "@/utils/getErrorDetails";
import type { AuthErrorType } from "@/utils/getErrorDetails";

interface AuthResponse {
  success: boolean;
  message?: string;
}

interface AuthRequestOptions<TResponse extends AuthResponse> {
  request: () => Promise<TResponse>;
  set: (state: {
    isLoading?: boolean;
    error?: string | null;
    errorType?: AuthErrorType | null;
  }) => void;
  fallbackMessage: string;
  operationName: string;
}

export const authRequest = async <TResponse extends AuthResponse>({
  request,
  set,
  fallbackMessage,
  operationName,
}: AuthRequestOptions<TResponse>): Promise<TResponse> => {
  set({
    isLoading: true,
    error: null,
    errorType: null,
  });

  try {
    const response = await request();

    if (!response.success) {
      const message = response.message || fallbackMessage;

      set({
        error: message,
        errorType: "validation",
        isLoading: false,
      });

      throw new Error(message);
    }

    set({
      isLoading: false,
      error: null,
      errorType: null,
    });

    return response;
  } catch (error) {
    console.error(`${operationName} Error:`, error);

    const { message, type } = getErrorDetails(error);

    set({
      error: message,
      errorType: type,
      isLoading: false,
    });

    throw error;
  }
};
