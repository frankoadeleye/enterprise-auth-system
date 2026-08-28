import type { ButtonHTMLAttributes, ReactNode } from "react";

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

function LoadingButton({
  children,
  isLoading,
  className = "",
  ...props
}: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`btn btn-primary w-full rounded-full ${className}`}
    >
      {isLoading && <span className="loading loading-spinner loading-sm" />}

      {children}
    </button>
  );
}

export default LoadingButton;
