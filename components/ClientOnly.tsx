"use client";

import React, { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<IProps> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // return null if not mounted (client-side

  return <>{children}</>;
};

export default ClientOnly;
