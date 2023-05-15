import React from "react";

interface IButton {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`neon rounded-full bg-gradient-to-r from-primary-color to-darker-color px-4 py-2 font-heading text-lg font-bold uppercase text-text-color shadow-md transition duration-300 hover:opacity-80 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 
      ${fullWidth ? "w-full" : "w-fit"} 
      ${secondary ? "bg-darker-color" : "bg-primary-color"}
      ${large ? "text-xl" : "text-md"}
      ${large ? "px-5" : "px-4"}
      ${large ? "py-3" : "py-2"}
      ${outline ? "bg-transparent" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
