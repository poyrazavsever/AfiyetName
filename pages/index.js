import Featured from "@/components/Home/Featured";
import HeroSection from "@/components/Home/HeroSection";
import Recipes from "@/components/Home/Recipes";

export default function Home() {
  return (
    <div>

      <HeroSection/>

      <Recipes />

      <Featured />

    </div>
  );
}
