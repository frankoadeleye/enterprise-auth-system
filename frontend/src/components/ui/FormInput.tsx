import type { InputHTMLAttributes } from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function FormInput({ type, className = "", ...props }: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const isPassword = type === "password";

  return (
    <div className="relative">
      <input
        {...props}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        className={`input input-bordered w-full focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${className}`}
        onChange={(event) => {
          setInputValue(event.target.value);

          if (!event.target.value) {
            setShowPassword(false);
          }

          props.onChange?.(event);
        }}
      />

      {isPassword && inputValue.length > 0 && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-4 -translate-y-1/2"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}

export default FormInput;
