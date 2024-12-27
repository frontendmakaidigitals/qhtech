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
    "https://images.unsplash.com/photo-1658474598480-74daa87936af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1695807216937-fddfaa1f63ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633430688358-8e27e527e527?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1635972064135-8ec7711f9895?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3.2,
      spacing: 2,
    },
  });

  // Ref to hold each slide element
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to track intersections of slides
  const trackIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const index = slideRefs.current.findIndex((el) => el === entry.target);
      if (index !== -1) {
        // If the element is entering from the left or right
        if (entry.isIntersecting) {
          if (entry.boundingClientRect.left < 0) {
            console.log(`Slide ${index} is entering from the right.`);
          } else if (entry.boundingClientRect.right > window.innerWidth) {
            console.log(`Slide ${index} is entering from the left.`);
          } else {
            console.log(`Slide ${index} is in the viewport.`);
          }
        }
      }
    });
  };
  console.log(lastPosition);

  useEffect(() => {
    const observer = new IntersectionObserver(trackIntersection, {
      root: null, // Observe intersection with the viewport
      threshold: 0.5, // Trigger when 50% of the slide is visible
    });

    // Observe each slide
    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    // Cleanup on unmount
    return () => {
      slideRefs.current.forEach((slide) => {
        if (slide) {
          observer.unobserve(slide);
        }
      });
    };
  }, []);
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
              skewX: `-${skewAmount}deg`,
              skewY: `${skewAmount}deg`,
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
          {images.map((image: string, index) => {
            return (
              <div key={index} className="w-full keen-slider__slide">
                <motion.div className="w-full h-[70vh]">
                  <motion.img
                    src={image}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
