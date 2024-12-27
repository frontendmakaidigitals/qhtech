"use client";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./SecondaryButton";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const menu = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "services", link: "/service" },
  { title: "contact", link: "/contact" },
];
const NavBar = () => {
  return (
    <div className=" py-4 w-full absolute  top-0 left-0 z-[99] ">
      <div className="flex justify-between items-center container ">
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2,
            type: "linear",
            ease: "easeInOut",
            duration: 1,
          }}
          className=" relative z-10"
        >
          <Logo className="!w-[110px]" />
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "linear", ease: "easeInOut", duration: 1 }}
          className="hidden md:flex relative"
        >
          <Menu menu={menu} />
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          className="hidden lg:block"
          transition={{
            delay: 0.2,
            type: "linear",
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <div className="hidden lg:block">
            <Button>Contact us</Button>
          </div>
        </motion.div>
        <MobileMenu menu={menu} />
      </div>
    </div>
  );
};

export default NavBar;
