import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons/lib";

interface IProps {
  label: string;
  icon: IconType;
  description: string;
}
const CategoryBox: React.FC<IProps> = ({ label, icon: Icon, description }) => {
  const router = useRouter();

  return (
    <Link
      href={"/"}
      key={`category-${label}`}
      className="flex flex-col justify-center items-center gap-2 opacity-50 hover:opacity-100 transition"
    >
      <Icon size={25} />
      <span className="text-center">{label}</span>
    </Link>
  );
};

export default CategoryBox;
