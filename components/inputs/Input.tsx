import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
}
const Input: React.FC<IProps> = ({ register, errors, id, type, label, disabled, required }) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        type={type}
        {...register(id, { required })}
        className={`peer w-full rounded-lg border px-5 pt-7 pb-2 disabled:opacity-40 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-500" : "border-zinc-400"
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-5 top-2 transition peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-1 ${
          errors[id] ? "text-rose-500" : "text-zinc-400"
        }`}
      >
        {label}
      </label>
      {errors[id] && <p className="text-rose-500 text-sm mt-1">{errors[id]?.message as string}</p>}
    </div>
  );
};

export default Input;
