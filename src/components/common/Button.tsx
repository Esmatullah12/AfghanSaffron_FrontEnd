import React from "react";

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({text, onClick, className}) => {
  return(
    <button
      onClick={onClick}
      className={`${className} bg-primary text-white px-6 py-2 rounded-3xl text-sm transition-all cursor-pointer border border-primary hover:bg-transparent hover:text-black duration-500 ease-in-out`}
    >
      {text}
    </button>
  )
}

export default Button;