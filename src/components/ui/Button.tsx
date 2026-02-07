import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean
  className?: string;
}

const Button: React.FC<ButtonProps> = ({text, onClick, className, disabled}) => {
  return(
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "bg-primary text-white px-6 py-2 rounded-3xl text-sm transition-all cursor-pointer border border-primary hover:bg-transparent hover:text-black duration-500 ease-in-out",
        className
      )}
    >
      {text}
    </button>
  )
}

export default Button;