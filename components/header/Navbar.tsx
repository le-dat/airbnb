import Link from "next/link";
import React from "react";
import { TbWorld } from "react-icons/tb";

interface IProps {}
const Navbar: React.FC<IProps> = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="py-2 px-4 rounded-full hover:bg-[#F7F7F7]">
        Airbnb your home
      </Link>
      <button className="rounded-full p-2 flex items-center justify-center hover:bg-[#F7F7F7]">
        <TbWorld size={21} />
      </button>
    </div>
  );
};

export default Navbar;
