import React from "react";

interface IProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: (event: MouseEvent) => void;
}
const SearchButton: React.FC<IProps> = ({ active = false, onClick, children }) => {
  return (
    <span className={`px-[16px] text-sm ${active ? "font-medium" : "font-light text-[#717171]"} `}>{children}</span>
  );
};

export default SearchButton;
