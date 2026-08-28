interface AlertProps {
  type: "success" | "error" | "info";
  message: string;
}

function Alert({ type, message }: AlertProps) {
  const classes =
    type === "success"
      ? "border-success bg-success/10"
      : type === "error"
        ? "border-error bg-error/10"
        : "border-primary bg-primary/10";

  return (
    <div className={`rounded-xl border p-4 text-sm ${classes}`}>{message}</div>
  );
}

export default Alert;
