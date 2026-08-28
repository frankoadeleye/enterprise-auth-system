import { AlertTriangle } from "lucide-react";

interface NetworkErrorAlertProps {
  message: string;
  onRetry?: () => void;
}

function NetworkErrorAlert({ message, onRetry }: NetworkErrorAlertProps) {
  if (!message) return null;

  return (
    <div className="mt-4 rounded-xl border border-error/30 bg-error/10 p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 shrink-0 text-error" size={20} />

        <div className="flex-1">
          <h3 className="font-semibold text-error">Connection Problem</h3>

          <p className="mt-1 text-sm text-base-content/80">{message}</p>

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="mt-3 cursor-pointer rounded-lg bg-error px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-warning"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NetworkErrorAlert;
