import React from "react";
import { IconType } from "react-icons/lib";

interface IProps {
  disabled?: boolean;
  title: string;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  colorIcon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<IProps> = ({ disabled, title, icon: Icon, colorIcon, outline, small, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full py-3 rounded-lg shadow-md font-medium flex items-center justify-center gap-3 border 
      ${
        outline
          ? "text-black bg-white hover:bg-gray-100 border-black"
          : " text-white bg-gradient-to-r from-[#ff385c] to-[#bd1e59] hover:opacity-100 border-transparent"
      }
      
      ${small ? "text-sm" : ""}
      ${disabled ? "opacity-30 hover:opacity-30" : "opacity-90"}
      `}
    >
      {Icon && <Icon size={24} color={colorIcon} className="absolute left-4" />}
      {title}
    </button>
  );
};

export default Button;
