"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="overflow-hidden" style={{ scaleX: 10 }}>
        <div className="w-full h-screen bg-black">
          gvchgc vhjgv hvkhjgv hjvbhj gvhl
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
