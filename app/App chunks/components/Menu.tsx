"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Menu = ({
  menu = [{ title: "Home", link: "/" }],
  className,
}: {
  className?: string;
  menu: { title: string; link: string }[];
}) => {
  const path = usePathname();
  return (
    <motion.div
      className={`flex relative border border-gray-500 rounded-full gap-2 px-2 group bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-30 backdrop-saturate-100 backdrop-contrast-100 py-2 items-center ${className}`}
    >
      {menu.map((item, index) => (
        <Link

          href={item.link}
          key={index}
          className="capitalize transition-all duration-300"
        >
          <motion.p
            className={`text-md px-4 ${
              path === `${item.link}` && " bg-purple-200 text-slate-950"
            } transition-all font-SplineSans text-slate-50 py-2 rounded-full duration-500 `}
          >
            {item.title}
          </motion.p>
        </Link>
      ))}
    </motion.div>
  );
};

export default Menu;
