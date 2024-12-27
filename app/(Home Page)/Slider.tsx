"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0); // Speed of the mouse movement
  const lastPosition = useRef({ x: 0, y: 0 }); // Reference to store previous mouse position
  // Track mouse position and speed
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const currentX = event.clientX;
    const currentY = event.clientY;

    // Calculate the distance moved from the last position
    const deltaX = currentX - lastPosition.current.x;
    const deltaY = currentY - lastPosition.current.y;

    // Calculate the mouse movement speed
    const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    setMouseSpeed(speed);

    // Update the last position for the next frame
    lastPosition.current = { x: currentX, y: currentY };

    // Update the current mouse position
    setMousePosition({ x: currentX, y: currentY });
  };

  // Calculate the skew amount based on the speed of the mouse
  const skewAmount = Math.min(mouseSpeed * 0.5, 20); // Adjust sensitivity as needed
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
      image:
        "https://images.unsplash.com/photo-1635972064135-8ec7711f9895?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  

  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: 4,
      spacing: 2,
    },
    
  });
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });
  
  
  return (
    <div
      ref={containerRef}
      className="w-full  overflow-hidden  py-12 bg-purple-100"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{
              position: "fixed",
              transform: `skew(${skewAmount}deg)`,
            }}
            initial={{ scale: 0, top: mousePosition.y, left: mousePosition.x }}
            exit={{ scale: 0 }}
            animate={{
              scale: 1,
              top: mousePosition.y,
              left: mousePosition.x,
            }}
            transition={{
              ease: [0.1, 0.82, 0.7, 1.08],
              duration: 0.4,
            }}
            className="w-20 z-[999] -m-10 h-20 font-Synonym font-[600] bg-slate-500/30 flex justify-center items-center backdrop-filter backdrop-blur text-slate-50 rounded-full pointer-events-none"
          >
            Scroll
          </motion.div>
        )}
      </AnimatePresence>

      <motion.article className="flex container items-center text-black gap-3">
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
            className="text-6xl leading-[100%] font-Grostek font-[600] tracking-tight"
          >
            {text}
          </motion.h1>
        ))}
      </motion.article>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="cursor-none"
      >
        <motion.div
          animate={{ x: inView ? "0%" : "90%" }}
          transition={{ ease: [0.29, 1.08, 0.67, 0.98], duration: 1.4 }}
          ref={ref}
          className="keen-slider w-full mt-7"
        >
          {images.map((image: { name: string; image: string }, index) => {
            const imageRef = useRef<HTMLDivElement | null>(null);
            const inView = useInView(imageRef);
            return (
              <div
               
                ref={imageRef}
                key={index}
                className="w-full group keen-slider__slide"
              >
                <motion.div className="relative bg-red-500 overflow-hidden w-full h-[760px] ">
                  <motion.img
                    src={image.image}
                    alt={`slide-${index}`}
                    transition={{ duration: 0.5 }}
                    className="w-full top-0 left-0 h-full object-cover absolute "
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
