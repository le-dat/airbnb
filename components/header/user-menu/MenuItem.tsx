import Link from "next/link";
import React from "react";

interface IProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}
const MenuItem: React.FC<IProps> = ({ href, onClick, children, active }) => {
  const className = `px-4 py-2 w-full flex text-left text-sm font-light hover:bg-[#dddd] ${active ? "bg-[#dddd]" : ""}`;

  if (href)
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  else if (onClick)
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );

  return <div className={className}>{children}</div>;
};

export default MenuItem;
