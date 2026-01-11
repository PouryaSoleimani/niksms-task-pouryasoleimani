import { get, Path, useFormState } from "react-hook-form";
import { FormTypes } from "../RegisterForm/FormRight";

const ErrorField = ({ name }: { name: Path<FormTypes> }) => {
  const { errors } = useFormState();
  const error = get(errors, name);

  if (!error) return null;

  return (
    <div className="mt-0.5 whitespace-nowrap error_field text-xxs z-10! font-bold trakcing-tight absolute left-[5%] -top-2.5 bg-destructive text-white px-2 text-center flex items-center justify-center py-1 rounded-sm">
      {error.message}
    </div>
  );
};

export default ErrorField;
