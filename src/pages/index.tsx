import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import HeroBg from "@/components/HeroBg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} `}>
       
        <HeroBg/>
    </main>
  );
}
