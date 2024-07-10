import { Inter } from "next/font/google";
import HeroBg from "@/components/HeroSection/HeroBg";
import HeroData from "@/components/HeroSection/HeroData";
import Categories from "@/components/Categories/Categories";
import CategoriesTitle from "@/components/Categories/CategoriesTitle";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} `}>
        <HeroBg/>
        <HeroData/>
        <div className="bg-custom-gradient">

        <CategoriesTitle txt="MOBIlE" href={"/products/mobile"} txtlink={"Show All mobiles"}/>
        <Categories category={"mobile"}/>
        <CategoriesTitle txt="TABLET" href={"/products/tablet"} txtlink={"Show All Tabletes"}/>
        <Categories category={"tablet"}/>
        <CategoriesTitle txt="LAPTOP" href={"/products/laptop"} txtlink={"Show All Laptops"}/>
        <Categories category={"laptop"}/>
        <CategoriesTitle txt="TELEVISION" href={"/products/tv"} txtlink={"Show All Televesions"}/>
        <Categories category={"tv"}/>
        
        </div>

    </main>
  );
}
