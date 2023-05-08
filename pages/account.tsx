import useCurrentUser from "@/hooks/useCurrentUser";
import React from "react";

interface IProps {}
const Account: React.FC<IProps> = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div className="container mx-auto">
      <h3>Account: {currentUser?.email}</h3>
    </div>
  );
};

export default Account;
