import { Check, X } from "lucide-react";

interface PasswordStrengthMeterProps {
  password: string;
}

interface PasswordCriterion {
  label: string;
  met: boolean;
}

function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const criteria: PasswordCriterion[] = [
    {
      label: "At least 8 characters",
      met: password.length >= 8,
    },
    {
      label: "Contains uppercase letter",
      met: /[A-Z]/.test(password),
    },
    {
      label: "Contains lowercase letter",
      met: /[a-z]/.test(password),
    },
    {
      label: "Contains a number",
      met: /\d/.test(password),
    },
    {
      label: "Contains special character",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];

  const metCriteria = criteria.filter((criterion) => criterion.met).length;

  const strength =
    metCriteria === 5
      ? 4
      : metCriteria === 4
        ? 3
        : metCriteria === 3
          ? 2
          : metCriteria === 2
            ? 1
            : 0;

  const getStrengthText = (value: number): string => {
    if (value === 0) return "Very Weak";
    if (value === 1) return "Weak";
    if (value === 2) return "Fair";
    if (value === 3) return "Good";
    return "Strong";
  };

  const getStrengthColor = (value: number): string => {
    if (value === 0) return "bg-error";
    if (value === 1) return "bg-error";
    if (value === 2) return "bg-warning";
    if (value === 3) return "bg-warning";
    return "bg-success";
  };

  const getStrengthTextColor = (value: number): string => {
    if (value === 0) return "text-error";
    if (value === 1) return "text-error";
    if (value === 2) return "text-warning";
    if (value === 3) return "text-warning";
    return "text-success";
  };

  return (
    <div className="mt-2">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="text-xs text-base-content/90">Password strength</span>

        <span
          className={`text-[10px] font-medium transition-colors duration-300 sm:text-xs ${getStrengthTextColor(
            strength,
          )}`}
        >
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="flex gap-1">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
              index < strength ? getStrengthColor(strength) : "bg-base-300"
            }`}
          />
        ))}
      </div>

      <div className="mt-2 space-y-1">
        {criteria.map((criterion) => (
          <div key={criterion.label} className="flex items-center text-xs">
            {criterion.met ? (
              <Check className="mr-2 size-4 shrink-0 text-success" />
            ) : (
              <X className="mr-2 size-4 shrink-0 text-base-content/40" />
            )}

            <span
              className={
                criterion.met ? "text-success" : "text-base-content/60"
              }
            >
              {criterion.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PasswordStrengthMeter;
