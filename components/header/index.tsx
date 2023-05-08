import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./search";
import UserMenu from "./user-menu";
import Categories from "./categories";

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 shadow-sm py-4 bg-white">
      <div className="container mx-auto flex items-center">
        <div className="flex-1">
          <Logo />
        </div>
        <Search />
        <div className="flex-1 flex items-center justify-end gap-3">
          <Navbar />
          <UserMenu />
        </div>
      </div>
      <div className="border-b my-4" />
      <div className="container mx-auto mt-4">
        <Categories />
      </div>
    </div>
  );
};

export default Header;
