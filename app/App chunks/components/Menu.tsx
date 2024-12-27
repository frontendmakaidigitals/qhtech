import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Menu = ({
  menu = [{ title: "Home", link: "/" }],
  className,
}: {
  className?: string;
  menu: { title: string; link: string }[];
}) => {
  return (
    <div className="">
      <SlideTabs menu={menu} className={className} />
    </div>
  );
};

const SlideTabs = ({
  menu,
  className,
}: {
  menu: { title: string; link: string }[];
  className?: string;
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto font-Grostek flex w-fit rounded-full border border-slate-50/30 isolate bg-gray-500/10 bg-clip-padding backdrop-saturate-100 backdrop-contrast-100 backdrop-blur backdrop-filter p-1 ${className}`}
    >
      {menu.map((item, index) => (
        <Tab key={index} setPosition={setPosition} link={item.link}>
          {item.title}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  link,
}: {
  children: React.ReactNode;
  setPosition: any;
  link: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative group z-10 block cursor-pointer px-3 py-1.5 text-xs  text-white mix-blend-difference md:px-5 md:py-3 md:text-base`}
    >
      <Link href={link}>
        <button className="group relative rounded-full uppercase text-purple-50">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              {children}
            </div>
            <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {children}
            </div>
          </span>
        </button>
      </Link>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        duration: 0.4,
        ease: [0.17, 0.84, 0.44, 1],
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Menu;
