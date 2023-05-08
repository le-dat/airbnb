import Tippy from "@tippyjs/react/headless"; // different import path!
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useRouter } from "next/navigation";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

interface IProps {}
const UserMenu: React.FC<IProps> = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  console.log(currentUser);

  const handleRegister = () => {
    registerModal.onOpen();
    setShowMenu(false);
  };

  const handleLogin = () => {
    loginModal.onOpen();
    setShowMenu(false);
  };

  const handleSignOut = () => {
    signOut();
    setShowMenu(false);
    router.push("/");
  };

  const handleAccount = () => {
    setShowMenu(false);
    router.push("/account");
  };

  const handleWishlists = () => {
    setShowMenu(false);
    router.push("/wishlists");
  };

  return (
    <Tippy
      interactive
      visible={showMenu}
      onClickOutside={() => setShowMenu(false)}
      offset={[0, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div
          className="w-[15rem] py-2 bg-white border shadow-md rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto cursor-pointer transition"
          tabIndex={-1}
          {...attrs}
        >
          {currentUser?.email ? (
            <>
              <MenuItem href="/">Messages</MenuItem>
              <MenuItem href="/">Notifications</MenuItem>
              <MenuItem href="/">Trips</MenuItem>
              <MenuItem onClick={handleWishlists}>Wishlists</MenuItem>

              <div className="border-t my-2" />
              <MenuItem>Airbnb your home</MenuItem>
              <MenuItem onClick={handleAccount}>Account</MenuItem>

              <div className="border-t my-2" />
              <MenuItem>Help</MenuItem>
              <MenuItem onClick={handleSignOut}>Log out</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleRegister}>Sign up</MenuItem>
              <MenuItem onClick={handleLogin}>Log in</MenuItem>
              <div className="border-t my-2" />
              <MenuItem>Airbnb your home</MenuItem>
              <MenuItem>Help</MenuItem>
            </>
          )}
        </div>
      )}
    >
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="py-2 pl-4 pr-2 border rounded-full shadow-sm flex items-center gap-3 cursor-pointer transition hover:shadow-md"
      >
        <AiOutlineMenu />
        <Avatar src={currentUser?.image} />
      </button>
    </Tippy>
  );
};

export default UserMenu;
