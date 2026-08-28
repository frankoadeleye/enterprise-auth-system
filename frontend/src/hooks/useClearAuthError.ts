import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

export function useClearAuthError() {
  const clearError = useAuthStore((state) => state.clearError);

  useEffect(() => {
    clearError();
  }, [clearError]);
}
