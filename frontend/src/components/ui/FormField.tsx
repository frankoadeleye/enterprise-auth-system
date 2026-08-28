import FormInput from "@/components/ui/FormInput";

interface FormFieldProps {
  label: string;
  error?: string;
  isValid?: boolean;
}

function FormField({
  label,
  error,
  ...inputProps
}: FormFieldProps & React.ComponentProps<typeof FormInput>) {
  const inputClassName = error
    ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
    : "";
  return (
    <div className="space-y-2">
      <label className="block text-left text-sm font-medium">{label}</label>

      <FormInput {...inputProps} className={inputClassName} />

      {error && <p className="text-error mt-1 text-left text-sm">{error}</p>}
    </div>
  );
}

export default FormField;
