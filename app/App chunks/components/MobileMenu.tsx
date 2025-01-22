"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  menu: { title: string; link: string }[]; // You can replace `any` with a more specific type depending on your `menu` structure
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            className="w-full h-screen absolute top-0 right-0 bg-black"
          >
            <motion.div
              initial={{
                scale: 0.6,
                translateX: "50%",
                translateY: "-50%",
              }}
              animate={{
                scale: 1.3,
              }}
              transition={{ delay: 0.1, duration: 2 }}
              className="absolute top-0 right-0"
            >
              <svg
                width="806"
                height="798"
                viewBox="0 0 806 798"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="403"
                  cy="399"
                  r="403"
                  fill="url(#paint0_radial_1533_84)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1533_84"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(403 399) rotate(90) scale(401.5)"
                  >
                    <stop stop-color="#0066FF" />
                    <stop
                      offset="0.299"
                      stop-color="#2077FA"
                      stop-opacity="0.71"
                    />
                    <stop
                      offset="0.549"
                      stop-color="#1975FF"
                      stop-opacity="0.42"
                    />
                    <stop
                      offset="0.764"
                      stop-color="#2D81FF"
                      stop-opacity="0.23"
                    />
                    <stop offset="1" stop-color="#A7CAFF" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
            {/* Parent container with staggerChildren */}
            <motion.div
              className="flex flex-col text-slate-50 gap-5 justify-start items-start py-40  px-8 w-full h-full"
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
                    className="font-medium font-Grostek text-5xl capitalize"
                  >
                    {item.title}
                  </motion.p>
                </Link>
              ))}
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
      className="size-10 relative z-10 rounded-full "
    >
      <div className="flex hover flex-col justify-center items-center transition-all gap-1">
        <motion.div
          animate={{
            y: isOpen ? [2, 2] : 0,
            rotate: isOpen ? [0, 45] : 0,
          }}
          transition={{ type: "linear", ease: "easeOut", duration: 0.2 }}
          className="w-6 transition-all duration-300 h-[2px] bg-white"
        />
        <motion.div
          animate={{
            y: isOpen ? [2, -4] : 0,
            rotate: isOpen ? [0, -45] : 0,
          }}
          transition={{ type: "linear", ease: "easeOut", duration: 0.2 }}
          className="w-6 transition-all duration-300 h-[2px] bg-white"
        />
      </div>
    </button>
  );
};
