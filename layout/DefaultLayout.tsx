import React, { FunctionComponent } from "react";
import { Toaster } from "react-hot-toast";
import "tippy.js/dist/tippy.css";

import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/footer";
import Header from "@/components/header";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout: FunctionComponent<IProps> = ({ children }) => {
  return (
    <ClientOnly>
      <Header />
      <main>{children}</main>
      <Footer />

      {/* modal */}
      <RegisterModal />
      <LoginModal />
      <Toaster position="top-center" reverseOrder={false} />
    </ClientOnly>
  );
};

export default DefaultLayout;
