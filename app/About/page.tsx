"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: "100%", scale: 0.8 }}
        animate={{ x: "0%", scale: 1 }}
        transition={{ duration: 1 }}
        className="overflow-hidden"
      >
        <div className="w-full h-screen bg-green-300">
          gvchgc vhjgv hvkhjgv hjvbhj gvhl
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
