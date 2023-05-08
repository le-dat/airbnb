import React from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

import Button from "../button";

interface IProps {
  title: string;
  subtitle: string;
  disabled: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  handleSubmit: () => void;
  handleGithub: () => void;
  handleGoogle: () => void;
}
const Modal: React.FC<IProps> = ({
  title,
  subtitle,
  disabled,
  isOpen,
  onClose,
  children,
  handleSubmit,
  handleGithub,
  handleGoogle,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed z-50 inset-0 bg-black bg-opacity-20 flex items-center justify-center `}>
      <div
        className={`bg-white w-[35rem] rounded-2xl overflow-hidden transition ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <header className="relative flex items-center justify-center p-6 border-b">
          <button
            onClick={onClose}
            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 p-3"
          >
            <IoClose size={23} />
          </button>
          <div className="font-normal">{title}</div>
        </header>

        <div className="p-6 flex flex-col gap-3 max-h-[76vh] overflow-y-auto">
          <h2 className="pb-2 text-2xl font-medium">{subtitle}</h2>

          {children}

          <Button onClick={handleSubmit} title="Continue" disabled={disabled} />
          <Button onClick={handleGoogle} outline icon={FcGoogle} title="Continue with Google" disabled={disabled} />
          <Button onClick={handleGithub} outline icon={AiFillGithub} title="Continue with Github" disabled={disabled} />
          <Button outline icon={AiFillFacebook} colorIcon="blue" title="Continue with Facebook" disabled={disabled} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
