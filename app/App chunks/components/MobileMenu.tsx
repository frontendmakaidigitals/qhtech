"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Lenis from "lenis";
interface MobileMenuProps {
  menu: { title: string; link: string }[]; // You can replace `any` with a more specific type depending on your `menu` structure
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lenis = new Lenis({
    autoRaf: true,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.body;

      if (isOpen) {
        body.style.overflow = "hidden";
        lenis.on("scroll", (e) => {
          console.log(e);
        });
        lenis.stop();
      } else {
        body.style.overflow = "auto";
        lenis.start();
      }
    }
  }, [isOpen]);
  return (
    <div className="block lg:hidden">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "linear",
              duration: 0.4,
              delay: 0.1,
              ease: [0.79, 0.14, 0.15, 0.86],
            }}
            className="w-full h-screen absolute top-0 right-0 bg-slate-400"
          >
            {/* Parent container with staggerChildren */}
            <motion.div
              className="flex flex-col gap-5 justify-center items-start px-8 w-full h-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {menu.map((item, index) => (
                <Link
                  href={item.link}
                  className="h-12  overflow-hidden"
                  key={index}
                >
                  {/* Child motion.p elements with staggered animation */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 700 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      stiffness: 100,
                      damping: 25,
                      type: "spring",
                      delay: index * 0.1,
                    }}
                    className="font-medium  text-4xl capitalize"
                  >
                    {item.title}
                  </motion.p>
                </Link>
              ))}
              <div className="h-14 mt-2 overflow-hidden">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 700 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    stiffness: 100,
                    damping: 25,
                    type: "spring",
                    delay: menu.length * 0.1,
                  }}
                >
                  <Button className="text-xl px-7 py-3">
                    +Become a client
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Icon setIsOpen={setIsOpen} isOpen={isOpen} />
      {/* You can add rendering of the `menu` here if needed */}
    </div>
  );
};

export default MobileMenu;

// Define the type for the `Icon` component props
interface IconProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Type for the state setter function
  isOpen: boolean; // Type for the boolean state
}

const Icon: React.FC<IconProps> = ({ setIsOpen, isOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="size-10 relative z-10 rounded-full bg-green-300"
    >
      <div className="flex hover flex-col justify-center items-center transition-all gap-1">
        <motion.div
          animate={{
            y: isOpen ? [2, 2] : 0,
            rotate: isOpen ? [0, 45] : 0,
          }}
          transition={{ type: "linear", ease: "easeOut", duration: 0.2 }}
          className="w-6 transition-all duration-300 h-[2px] bg-black"
        />
        <motion.div
          animate={{
            y: isOpen ? [2, -3] : 0,
            rotate: isOpen ? [0, -45] : 0,
          }}
          transition={{ type: "linear", ease: "easeOut", duration: 0.2 }}
          className="w-6 transition-all duration-300 h-[2px] bg-black"
        />
      </div>
    </button>
  );
};
