"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrowArcLeft, ArrowArcRight } from "@phosphor-icons/react";
import ReactCardFlip from "react-card-flip";
const Slider = () => {
  const containerRef = useRef(null);
  const images = [
    {
      name: "Real Estate",
      image: "industries/realEstate.jpg",
      text: "We help the real estate industry connect with the right audience by enhancing online visibility, creating engaging content like virtual tours, and leveraging data-driven strategies to generate quality leads. ",
    },
    {
      name: "Technology",
      image: "industries/technology.jpg",
      text: "We empower technology companies to showcase innovation by enhancing online presence, creating impactful content, and driving targeted campaigns to connect with the right audience.",
    },
    {
      name: "Business Consulting",
      image: "industries/consulting.jpg",
      text: "We help business consulting firms establish authority by amplifying their expertise, reaching potential clients, and delivering tailored strategies for lead generation and brand growth.",
    },
    {
      name: "Corporate Services",
      image: "industries/corporateServices.jpg",
      text: "we support corporate service providers by refining their digital presence, building trust through targeted messaging, and driving meaningful engagement with their ideal clients.",
    },
    {
      name: "F&B",
      image: "industries/F&B.jpg",
      text: "we help F&B businesses stand out by creating appetizing content, leveraging social media, and implementing data-driven campaigns to attract loyal customers",
    },
    {
      name: "Events & Shows",
      image: "industries/shows.jpg",
      text: "we elevate events and shows by crafting visually stunning campaigns, engaging audiences through creative content, and maximizing ticket sales with targeted marketing.",
    },
    {
      name: "Hospitality",
      image: "industries/hospitality.jpg",
      text: "we help hospitality brands attract guests by showcasing their unique experiences, building trust online, and driving bookings through data-driven strategies.",
    },
    {
      name: "Retail",
      image: "industries/retail.jpg",
      text: "we boost retail businesses by enhancing e-commerce platforms, driving foot traffic, and creating compelling campaigns to reach shoppers both online and offline.",
    },
    {
      name: "Entertainment & Media",
      image: "industries/media.jpg",
      text: "we amplify entertainment and media brands by creating captivating content, engaging audiences across platforms, and driving awareness for shows, films, and more.",
    },
    {
      name: "Automotive",
      image: "industries/automative.jpg",
      text: "we drive success for automotive brands by creating compelling campaigns, showcasing vehicles through stunning visuals, and connecting with the right buyers through precision targeting.",
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
          {images.map(
            (image: { name: string; image: string; text: string }, index) => {
              return (
                <div
                  ref={hoverRef}
                  key={index}
                  onMouseEnter={() => setHoverId(index)}
                  onMouseLeave={() => setHoverId(null)}
                  className="w-full group keen-slider__slide"
                >
                  <ReactCardFlip
                    isFlipped={hoverId === index}
                    flipDirection="horizontal"
                  >
                    <div>
                      <div className="">
                        <motion.div className="relative overflow-hidden w-full aspect-[3/4] ">
                          <motion.img
                            src={image.image}
                            alt={`slide-${index}`}
                            transition={{ duration: 0.5 }}
                            className="w-full top-0 left-0  h-full object-cover absolute "
                            style={{ scale: 1.2 }}
                          />
                        </motion.div>
                      </div>

                      <div className="mt-2">
                        <p className="font-[600] font-Grostek text-xl">
                          {image.name}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-800 p-4 text-slate-50">
                        <h2 className="font-Grostek text-2xl font-[500]">
                          {image.name}
                        </h2>
                        <motion.div className="relative overflow-hidden mt-4 w-full aspect-[3/4] ">
                          <p className="font-Grostek text-xl">{image.text}</p>
                        </motion.div>
                      </div>
                    </div>
                  </ReactCardFlip>
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
