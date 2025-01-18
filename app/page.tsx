"use client";
import HeroSection from "./(Home Page)/HeroSection";
import AboutUs from "./(Home Page)/AboutUs";
import TechStack from "./(Home Page)/TechStack";
import { CompantStats } from "./(Home Page)/CompantStats";
import MaskSection from "./(Home Page)/MaskSection";

import Slider from "./(Home Page)/Slider";
import Form from "./App chunks/components/Form";
import { AnimatePresence, motion } from "framer-motion";
import { MarqueeLogo } from "./App chunks/components/MarqueeLogo";
export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        exit={{
          scaleX: 0.2,
          scaleY: 0.05,
          borderRadius: "99px",
          y: -500,
        }}
        transition={{
          duration: 1,
          ease: [0.33, 0.88, 0.25, 0.91],
          delay: 0.2,
        }}
      >
        <HeroSection />
        <AboutUs />
        <MaskSection />
        <TechStack />
        <CompantStats />
        <Slider />
        <Form />
        <MarqueeLogo />
      </motion.div>
    </AnimatePresence>
  );
}
