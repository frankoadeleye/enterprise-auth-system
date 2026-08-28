import { AlertTriangle } from "lucide-react";

import type { AuthErrorType } from "@/utils/getErrorDetails";

interface AuthErrorAlertProps {
  message: string | null;
  type: AuthErrorType | null;
}

function AuthErrorAlert({ message, type }: AuthErrorAlertProps) {
  if (!message || !type) {
    return null;
  }

  if (type === "network") {
    return (
      <div className="rounded-xl border border-error/30 bg-error/10 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-error" />

          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-error">Connection Problem</h3>

            <p className="mt-1 text-sm leading-relaxed text-base-content/80">
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="alert alert-error">
      <span>{message}</span>
    </div>
  );
}

export default AuthErrorAlert;
