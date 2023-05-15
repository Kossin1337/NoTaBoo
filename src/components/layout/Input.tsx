import React from "react";

interface IInput {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border-2 border-neutral-800 bg-black p-4 text-lg text-text-color outline-none transition focus:border-2 focus:border-primary-color disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:opacity-70"
    />
  );
};

export default Input;
