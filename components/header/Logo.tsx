"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {}

const Logo: React.FC<IProps> = () => {
  return (
    <Link href="/" className="cursor-pointer flex">
      <Image src="/images/logo.png" alt="logo" width="100" height="100" />
    </Link>
  );
};

export default Logo;
