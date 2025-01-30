"use client";
import React from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import { ArrowUpRight } from "@phosphor-icons/react";
import "../App chunks/components/textAnim.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderForm from "../App chunks/components/SliderForm";
import Link from "next/link";
export default function HeroSection() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const [isFormOpen, setIsFormOpen] = React.useState<boolean>(false);
  const [isAnimationEnabled, setIsAnimationEnabled] =
    React.useState<boolean>(true);

  return (
    <>
      <main ref={container} className="relative ">
        <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        <Section1
          scrollYProgress={scrollYProgress}
          setIsFormOpen={setIsFormOpen}
          isAnimationEnabled={isAnimationEnabled}
        />
        <Section2
          scrollYProgress={scrollYProgress}
          setIsAnimationEnabled={setIsAnimationEnabled}
        />
      </main>
    </>
  );
}

const Section1 = ({
  scrollYProgress,
  setIsFormOpen,
  isAnimationEnabled,
}: {
  scrollYProgress: MotionValue<number>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimationEnabled?: boolean;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const tags = [
    "360 Marketing Agency",
    "Strategic Branding",
    "Campaign Management",
  ];
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const btnHandler = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky bg-black overflow-hidden top-0 h-screen"
    >
      <div className="absolute top-0 left-0 h-full w-full -z-[1]">
        <BackgroundGradientAnimation animationsEnabled={isAnimationEnabled} />
      </div>

      <div className="container relative flex flex-col items-center   justify-center  py-28 w-full h-full">
        <div className="absolute yellowButton bottom-10  right-7 ">
          <motion.button
            onClick={btnHandler}
            initial={{ scale: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            animate={{
              scale: isHovered ? 1.5 : 1,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="size-28 relative origin-center cursor-pointer rounded-full "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              animate={{ rotate: -360 }}
              transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
              src="roundShape.svg"
              className="w-full h-full"
            />
            <ArrowUpRight className="absolute pointer-events-none -rotate-180 text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.button>
        </div>

        <div className="relative">
          <div className="absolute -top-20 lg:-top-16 lg:left-20 ">
            <motion.div
              initial={{ scale: 0 }}
              transition={{
                delay: 1,
                duration: 0.3,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              animate={{
                scale: 1,
                transition: { duration: 0.6, delay: 1 },
              }}
              style={{ transformOrigin: "center" }}
              className="size-24 lg:size-28 relative rounded-full "
            >
              <svg
                width="67"
                height="68"
                viewBox="0 0 67 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.5625 39.4375L61.5625 55.4375L47.5625 67.8125L34 50.0625L19.9375 67.8125L6.5 55.4375L20.1875 39.5625L0.5 28.25L8.8125 13.3125L24.6875 21.625V0.625H42.5625V21.625L59.75 13.3125L66.9375 28.9375L46.5625 39.4375Z"
                  fill="#A4CA92"
                />
              </svg>
            </motion.div>
          </div>
          <div
            style={{
              perspective: "6144px",
              perspectiveOrigin: "bottom center",
            }}
            className="flex items-center w-full gap-3 lg:gap-6 h-[50px] lg:h-[100px] overflow-hidden"
          >
            {["Elevate", "Your", "Brand", "&"].map((text, index) => (
              <motion.div
                key={index}
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                style={{
                  textShadow: "0px 0px 2px #000000F",
                  transformStyle: "preserve-3d",
                }}
                className="textContainer text-[8.6vw] lg:text-[7rem] w-full relative leading-[6.5rem] font-Grostek  font-[700] text-purple-100"
              >
                <motion.p className="primary">{text}</motion.p>

                <motion.p className="absolute  secondary  top-0 left-0">
                  {text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className=" flex items-center gap-3 lg:gap-6 h-[50px] lg:h-[100px]  overflow-hidden">
          {["Dominate", "the", "Market"].map((text, index) => (
            <motion.div
              key={index}
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              style={{
                textShadow: "0px 0px 2px #000000F",
              }}
              className="textContainer text-[8.6vw] lg:text-[7rem] w-full relative leading-[6.5rem] font-Grostek  font-[700] text-purple-100"
            >
              <motion.p className="primary">{text}</motion.p>

              <motion.p className="absolute  secondary  top-0 left-0">
                {text}
              </motion.p>
            </motion.div>
          ))}
        </div>
        <div className="flex text-[.7rem] lg:text-lg justify-between items-center font-[500] font-Synonym mt-3 text-purple-100 gap-2 overflow-hidden h-[50px] ">
          {tags.map((tag, index) => (
            <motion.p
              key={index}
              initial={{ y: index + 1 * -250 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className={`pr-1 lg:pr-3 ${
                index != 2 && "border-r"
              } border-slate-50 `}
            >
              {" "}
              {tag}
            </motion.p>
          ))}
        </div>
        <div className="mt-6">
          <button
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-purple-100 to-purple-300  font-medium text-purple-950   transition-all duration-300 hover:w-40"
          >
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Get in Touch
            </div>
            <div className="absolute right-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

const Section2 = ({
  scrollYProgress,
  setIsAnimationEnabled,
}: {
  scrollYProgress: MotionValue<number>;
  setIsAnimationEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const services = [
    {
      name: "Web Development",
      img: "media/serviceImages/newImages/web development.png",
      gradient: "bg-gradient-to-r from-[#fde68a] to-[#f59e0b] ",
      link: "Web-Development",
    },
    {
      name: "App Development",
      img: "media/serviceImages/newImages/app development.png",
      gradient: "bg-gradient-to-r from-[#fef08a] via-[#84cc16] to-[#16a34a]",
      link: "App-Development",
    },
    {
      name: "Social Media Marketing",
      img: "media/serviceImages/newImages/social media marketing.png",
      gradient:
        "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#f72464] via-[#ff858a] to-[#fff3a7]",
      link: "Social-Media-Marketing",
    },
    {
      name: "SEO Marketing",
      img: "media/serviceImages/newImages/SEO marketing.png",
      gradient: "bg-gradient-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff]",
      link: "SEO-Marketing",
    },
    {
      name: "Photography & Videography",
      img: "media/serviceImages/newImages/Photography and Videography copy.png",
      gradient:
        "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] ",
      link: "Photography",
    },
    {
      name: "Media Buying",
      img: "media/serviceImages/newImages/media buying.png",
      gradient: "bg-gradient-to-bl from-[#84cc16] via-[#16a34a] to-[#0f766e] ",
      link: "Media-Buying",
    },
    {
      name: "Performance Marketing",
      img: "media/serviceImages/newImages/performance marketing.png",
      gradient: "bg-gradient-to-tl from-[#f6fbf4] via-[#f5df99] to-[#5fd068] ",
      link: "Performance-Marketing",
    },
    {
      name: "Content Marketing",
      img: "media/serviceImages/newImages/Content Marketing copy.png",
      gradient: "bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1]",
      link: "Content-Marketing",
    },
    {
      name: "Public Relation",
      img: "media/serviceImages/newImages/public relation copy.png",
      gradient: "bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#b91c1c] ",
      link: "Public-Relations",
    },
    {
      name: "Branding & Advertising",
      img: "media/serviceImages/newImages/branding and advertising.png",
      gradient: "bg-gradient-to-bl from-[#84cc16] via-[#22c55e] to-[#16a34a]",
      link: "Branding",
    },
    {
      name: "IT Consulting & Advisory",
      img: "media/serviceImages/newImages/IT consulting and advisory copy.png",
      gradient: "bg-gradient-to-b from-[#8d8daa] via-[#dfdfde] to-[#f7f5f2] ",
      link: "IT-Consulting",
    },
    {
      name: "Cyber Security",
      img: "media/serviceImages/newImages/cyber security copy.png",
      gradient:
        "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#ff4d4d] via-[#ff8364] to-[#fdb87d]",
      link: "Cyber-Security",
    },
  ];

  const [viewportWidth, setViewportWidth] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Ensure that the code only runs on the client-side (after the component is mounted)
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // Check if the top of the element is at the top of the viewport
          if (rect.top <= 0) {
            setIsAnimationEnabled(false); // Disable animation if the element is scrolled past
          } else {
            setIsAnimationEnabled(true); // Enable animation if the element is in the viewport
          }
        }
      };

      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const [sliderRef, instanceRef] = useKeenSlider({
    vertical: viewportWidth > 450 ? true : false,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        setViewportWidth(window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scale = useTransform(
    scrollYProgress,
    [0, viewportWidth > 450 ? 0.5 : 0.2],
    [viewportWidth > 450 ? 0.8 : 0.8, 1]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, viewportWidth > 450 ? 0.8 : 0.25],
    [viewportWidth > 450 ? 1 : 0.25, 0]
  );

  const [hoverId, setHoverId] = React.useState<number>(0);
  const [hoverStyle, setHoverStyle] = React.useState({});
  const [containerHeight, setContainerHeight] = React.useState(0);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight); // Get the height of the container
      }
    };
    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);
  useEffect(() => {
    if (hoverId !== null && btnRefs.current[hoverId] && containerRef.current) {
      const rect = btnRefs.current[hoverId].getBoundingClientRect();
      const containerElement = containerRef.current;

      setHoverStyle({
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: `translateX(${
          rect.x - containerElement.getBoundingClientRect().left
        }px) translateY(${
          rect.y - containerElement.getBoundingClientRect().top
        }px)`,
        transition: "all .7s cubic-bezier(0.165, 0.84, 0.44, 1)",
      });
    }
  }, [hoverId]);

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(hoverId);
    }
  }, [hoverId, instanceRef]);

  useEffect(() => {
    if (containerHeight > 0 && instanceRef.current) {
      instanceRef.current.update();
    }
  }, [containerHeight]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className={`relative py-24 bg-slate-100 ${services[hoverId].gradient}  text-gray-950`}
      ref={ref}
    >
      <motion.article
        className="container flex justify-center lg:justify-start items-center gap-3 mx-auto z-[50] flex-wrap" // Added flex-wrap here
      >
        {["Services", "Designed", "to", "Drive", "Growth"].map(
          (text, index) => (
            <motion.h1
              key={index}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words" // Added break-words class
            >
              {text}
            </motion.h1>
          )
        )}
      </motion.article>
      <motion.div
        className="mt-10 relative z-20 container grid grid-cols-1 lg:grid-cols-2 gap-10"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          ref={containerRef}
          className="relative overflow-x-auto w-full flex flex-row justify-start items-center gap-3 lg:block"
        >
          <div
            className={`bg-black hidden lg:block origin-left black-Tab`}
            style={{
              position: "absolute",
              zIndex: 1,
              borderRadius: "8px",
              ...hoverStyle,
            }}
          />

          {services.map((service, idx) => (
            <Link
              key={idx}
              href={`/${service.link}`}
              onMouseEnter={() => setHoverId(idx)}
              className="relative"
            >
              <button
                ref={(el) => {
                  btnRefs.current[idx] = el;
                }}
                className={`font-Grostek py-2 transition-colors duration-[.3] delay-[.2] relative z-10 px-4 w-full ${
                  hoverId === idx
                    ? "text-slate-50 bg-black lg:bg-transparent rounded-lg"
                    : "text-slate-950"
                } text-start font-[600] text-2xl whitespace-nowrap`}
              >
                {service.name}
              </button>
            </Link>
          ))}
        </div>

        <div
          ref={sliderRef}
          style={{
            height: `${viewportWidth > 450 ? containerHeight : 550}px`, // Adjust height based on viewportWidth
          }}
          className={`w-full keen-slider  overflow-hidden `}
        >
          {services.map((service, idx) => (
            <div key={idx} className={`keen-slider__slide h-full`}>
              <motion.img
                src={service.img}
                key={hoverId}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
