import React, { useState } from "react";
import SearchButton from "./SearchButton";
import { FiSearch } from "react-icons/fi";

interface IProps {}
const Search: React.FC<IProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClicked = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="cursor-pointer transition flex items-center border rounded-full p-2 shadow-md hover:shadow-lg ">
      <SearchButton active onClick={handleClicked}>
        Anywhere
      </SearchButton>
      <span className="w-[1px] h-[24px] bg-[#DDDDDD]" />
      <SearchButton active onClick={handleClicked}>
        Any week
      </SearchButton>
      <span className="w-[1px] h-[24px] bg-[#DDDDDD]" />
      <SearchButton onClick={handleClicked}>Add guest</SearchButton>
      <div className="p-2 rounded-full bg-[#FF385C]">
        <FiSearch color={"#fff"} />
      </div>
    </div>
  );
};

export default Search;
