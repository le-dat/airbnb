import { Nunito } from "next/font/google";
import Head from "next/head";

const inter = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Vacation Homes & Condo Rentals Airbnb | Le Dat</title>
      </Head>

      <div className="container">home</div>
    </>
  );
}
