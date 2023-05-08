import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface IProps {
  src?: string;
}
const Avatar: React.FC<IProps> = ({ src }) => {
  if (src) return <Image src={src} alt="avatar" width={30} height={30} />;
  return <FaUserCircle size={28} />;
};

export default Avatar;
