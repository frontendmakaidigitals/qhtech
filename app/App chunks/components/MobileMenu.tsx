import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "./Accordion";
import { useLenis } from "lenis/react";

const MobileMenu = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menu = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    {
      title: "Services",
      subMenu: [
        { title: "App Development", link: "/services/web-development" },
        { title: "Web Development", link: "/services/app-development" },
        {
          title: "Social Media Marketing",
          link: "/services/Social-Media-Marketing",
        },
        { title: "Content Marketing", link: "/services/Content-Marketing" },
        { title: "SEO Marketing", link: "/services/SEO-Marketing" },
        { title: "Media Buying", link: "/services/Media-Buying" },
        {
          title: "Performance Marketing",
          link: "/services/Performance-Marketing",
        },
        { title: "IT Consulting & Advisory", link: "/services/IT-Consulting" },
        { title: "Cyber Security", link: "/services/Cyber-Security" },
        { title: "Public Relations", link: "/services/Public-Relations" },
        { title: "Branding & Designing", link: "/services/Branding" },
        { title: "Photography & Videography", link: "/services/Photography" },
      ],
    },
    { title: "Blog", link: "/" },
    { title: "Contact", link: "/contact" },
  ];
  const [height, setHeight] = useState<number | undefined>(undefined);
  const lenis = useLenis();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "auto";
      lenis?.start();
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Accessing element by class name
      const element = document.getElementsByClassName("HeadNavigation")[0]; // Use [0] to get the first element
      if (element) {
        setHeight(element.clientHeight); // Set height to state
      }
    }
  }, []);
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
            className="w-full h-screen fixed top-0 right-0 bg-black"
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
              className="absolute top-0 right-0 pointer-events-none"
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
              style={{
                height: `calc(100vh - ${height}px)`,
                marginTop: `${height ? height + 55 : 0}px`,
              }}
              className="flex flex-col text-slate-50 gap-5 justify-start items-start px-8 w-full overflow-y-scroll"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {menu.map((item, index) => (
                <div key={index} className="w-full">
                  {item.subMenu ? (
                    <Accordion defaultValue="services" multiple>
                      <AccordionItem value="services">
                        {/* Accordion Header for "Services" */}
                        <AccordionHeader className="px-0 py-0">
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
                        </AccordionHeader>

                        {/* Accordion Panel for Sub-Menu Items */}
                        <AccordionPanel>
                          <div className="pl-3">
                            {item.subMenu.map((subItem, subIndex) => (
                              <Link
                                href={subItem.link}
                                key={subIndex}
                                className="block mt-2 text-2xl capitalize font-Grostek font-medium"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    // Regular Menu Item without Submenu
                    <Link
                      href={item.link}
                      className="h-12 overflow-hidden w-full"
                    >
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
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Icon setIsOpen={setIsOpen} isOpen={isOpen} />
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
      className="size-10 relative z-10 rounded-full"
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
