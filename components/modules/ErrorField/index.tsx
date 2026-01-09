import { get, Path, useFormState } from "react-hook-form";
import { FormTypes } from "../RegisterForm/FormRight";

const ErrorField = ({ name }: { name: Path<FormTypes> }) => {
  const { errors } = useFormState();
  const error = get(errors, name);

  if (!error) return null;

  return <div className="text-rose-900 mt-0.5 text-xxs font-bold pl-1 trakcing-tight">{error.message}</div>;
};

export default ErrorField;
