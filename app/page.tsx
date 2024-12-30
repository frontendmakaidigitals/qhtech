import HeroSection from "./(Home Page)/HeroSection";
import AboutUs from "./(Home Page)/AboutUs";
import TechStack from "./(Home Page)/TechStack";
import { CompantStats } from "./(Home Page)/CompantStats";
import MaskSection from "./(Home Page)/MaskSection";
import Portfolio from "./(Home Page)/Portfolio";
import Slider from "./(Home Page)/Slider";
import Form from "./App chunks/components/Form";
import Loader from "./App chunks/components/Loader";
export default function Home() {
  return (
    <>
      <HeroSection />
      <MaskSection />
      <AboutUs />
      <TechStack />
      <Portfolio />
      <CompantStats />
      <Slider />
      <Form />
      <Loader />
    </>
  );
}
