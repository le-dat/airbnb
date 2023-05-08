import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import DefaultLayout from "@/layout/DefaultLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SessionProvider>
  );
}
