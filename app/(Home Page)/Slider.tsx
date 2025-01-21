"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrowArcLeft, ArrowArcRight } from "@phosphor-icons/react";
const Slider = () => {
  const containerRef = useRef(null);
  const images = [
    {
      name: "Real Estate",
      image: "industries/realEstate.jpg",
    },
    {
      name: "Technology",
      image: "industries/technology.jpg",
    },
    {
      name: "Business Consulting",
      image: "industries/consulting.jpg",
    },
    {
      name: "Corporate Services",
      image: "industries/corporateServices.jpg",
    },
    {
      name: "F&B",
      image: "industries/F&B.jpg",
    },
    {
      name: "Events & Shows",
      image: "industries/shows.jpg",
    },
    {
      name: "Hospitality",
      image: "industries/hospitality.jpg",
    },
    {
      name: "Retail",
      image: "industries/retail.jpg",
    },
    {
      name: "Entertainment & Media",
      image: "industries/media.jpg",
    },
    {
      name: "Automotive",
      image: "industries/automative.jpg",
    },
  ];

  const [viewportWidth, setViewportWidth] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: viewportWidth > 450 ? 4 : 1.2,
      spacing: 45,
    },
    created: () => setLoaded(true),
  });

  const inView = useInView(containerRef, { once: true });
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-12 bg-purple-100"
    >
      <motion.article className="flex container justify-center lg:justify-start items-center text-black gap-3">
        {["Industry", "Usage"].map((text, index) => (
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
            className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight"
          >
            {text}
          </motion.h1>
        ))}
      </motion.article>

      <div>
        <motion.div
          animate={{ x: inView ? "0%" : "100%" }}
          transition={{ ease: [0.29, 1.08, 0.67, 0.98], duration: 1.4 }}
          ref={ref}
          className="keen-slider overflow-hidden w-full mt-7"
        >
          {loaded && (
            <>
              <ArrowArcLeft
                className="absolute size-10 bg-slate-50/70 hover:bg-slate-50 p-2 rounded-full z-[99999] top-1/2 -translate-y-1/2 left-0"
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                }}
              />

              <ArrowArcRight
                className="absolute size-10 bg-slate-50/70 hover:bg-slate-50 p-2 rounded-full z-[99999] top-1/2 -translate-y-1/2 right-0 rotate-360"
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
              />
            </>
          )}
          {images.map((image: { name: string; image: string }, index) => {
            return (
              <div
                ref={hoverRef}
                key={index}
                onMouseEnter={() => setHoverId(index)}
                onMouseLeave={() => setHoverId(null)}
                className="w-full group keen-slider__slide translate-y-12"
              >
                <motion.div className="relative overflow-hidden w-full aspect-[3/4] ">
                  <motion.img
                    src={image.image}
                    alt={`slide-${index}`}
                    transition={{ duration: 0.5 }}
                    className="w-full top-0 left-0  h-full object-cover absolute "
                    style={{ scale: 1.2 }}
                  />
                </motion.div>

                <div className="mt-2">
                  <p className="font-[600] font-Grostek text-xl">
                    {image.name}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
