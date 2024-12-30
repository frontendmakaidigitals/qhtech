"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0); // Speed of the mouse movement
  const lastPosition = useRef({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0); // Reference to store previous mouse position
  const pointerRef = useRef<HTMLDivElement | null>(null);
  const MAX_SPEED = 20; // Maximum speed limit (in pixels)

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
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Ensure this logic runs only on the client side
    if (typeof window !== 'undefined') {
      const currentX = event.clientX;
      const currentY = event.clientY;
  
      // Calculate the distance moved from the last position
      const deltaX = currentX - lastPosition.current.x;
      const deltaY = currentY - lastPosition.current.y;
  
      // Calculate the mouse movement speed (distance moved per frame)
      let speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
      // Cap the speed to not exceed MAX_SPEED
      if (speed > MAX_SPEED) {
        speed = MAX_SPEED;
      }
  
      setMouseSpeed(speed); // Set the mouse speed (limited)
  
      // Update the mouse position
      setMousePosition({ x: currentX, y: currentY });
  
      // Update last position
      lastPosition.current = { x: currentX, y: currentY };
  
      // If mouse is moving while dragging, update rotation
      if (speed > 0) {
        // Calculate the rotation angle based on mouse position relative to the div
        if (pointerRef.current) {
          const rect = pointerRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
  
          const deltaXForRotation = currentX - centerX;
          const deltaYForRotation = currentY - centerY;
          const angle =
            Math.atan2(deltaYForRotation, deltaXForRotation) * (180 / Math.PI); // Convert radians to degrees
  
          setRotation(angle);
        }
      }
    }
  };
  

  const [viewportWidth, setViewportWidth] = React.useState(0);

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
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: viewportWidth > 450 ? 4 : 1.2,
      spacing: 2,
    },
  });
  console.log(viewportWidth)
  const inView = useInView(containerRef, { once: true });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-12 bg-purple-100"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{
              position: "fixed",
              rotate: rotation,
              width: `calc(1.5rem + ${mouseSpeed}px)`,
              height: `calc(1.5rem - ${mouseSpeed / 2}px)`,
              borderRadius: "50%",
            }}
            ref={pointerRef}
            initial={{ scale: 0, top: mousePosition.y, left: mousePosition.x }}
            exit={{ scale: 0 }}
            animate={{
              scale: 1,
              top: mousePosition.y,
              left: mousePosition.x,
            }}
            transition={{
              duration: 0.3,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className=" z-[999] -m-3   font-Synonym font-[600] bg-slate-50/60 flex justify-center items-center backdrop-filter backdrop-blur text-slate-50 pointer-events-none"
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.article className="flex container justify-center lg:justify-center items-center text-black gap-3">
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

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          animate={{ x: inView ? "0%" : "100%" }}
          transition={{ ease: [0.29, 1.08, 0.67, 0.98], duration: 1.4 }}
          ref={ref}
          className="keen-slider overflow-hidden w-full mt-7"
        >
          {images.map((image: { name: string; image: string }, index) => {
            return (
              <div key={index} className="w-full group keen-slider__slide">
                <motion.div className="relative bg-red-500 overflow-hidden w-full h-[550px] lg:h-[760px] ">
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
