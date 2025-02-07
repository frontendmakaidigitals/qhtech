"use client";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./SecondaryButton";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menu = [
  { title: "home", link: "/" },
  { title: "about", link: "/About" },
  { title: "services", link: "/service" },
  { title: "Portfolio", link: "/Portfolio" },
  { title: "Blogs", link: "/Blogs" },
];
const NavBar = () => {
  const path = usePathname();
  const renderPath = '/admin'
  console.log(path)
  return (
  
    !path.includes(renderPath) ?  <div className="HeadNavigation py-4 w-full absolute  top-0 left-0 z-[99999] ">
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
        <Logo
         source={
          path !== "/Blogs" && path !== "/Blog" ? "/Logo-white.png" : "/Logo.png"
        }
          className="!w-[110px]"
        />
      </motion.div>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "linear", ease: "easeInOut", duration: 1 }}
        className="hidden lg:flex"
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
        <Link href={"/contact"} className="hidden lg:block">
          <Button>Contact us</Button>
        </Link>
      </motion.div>
      <MobileMenu />
    </div>
  </div> : null
  
  );
};

export default NavBar;
