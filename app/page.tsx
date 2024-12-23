import HeroSection from "./(Home Page)/HeroSection";
import AboutUs from "./(Home Page)/AboutUs";
import TechStack from "./(Home Page)/TechStack";
import Portfolio from "./(Home Page)/Portfolio";
import StackCard from "./(Home Page)/StackCard";
import { CompantStats } from "./(Home Page)/CompantStats";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <TechStack />
      <StackCard />
      <CompantStats />
    </>
  );
}
