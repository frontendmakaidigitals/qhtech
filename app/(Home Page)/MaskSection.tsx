"use client";
import { useRef, useEffect } from "react";
import "@/app/App chunks/components/MaskSection.css";
export default function MaskSection() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);
  const slidingCard = useRef<HTMLDivElement | null>(null);
  const initialMaskSize = 0.5;
  const targetMaskSize = 100;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (stickyMask.current && container.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      if (stickyMask.current) {
        stickyMask.current.style.maskSize =
          (initialMaskSize + maskSizeProgress) * 100 + "%";
      }
      if (slidingCard.current) {
        const scrollProgress = getScrollProgress();
        const moveUpAmount = scrollProgress * 600; // Adjust this multiplier for speed/distance
        slidingCard.current.style.transform = `translateY(-${moveUpAmount}px)`; // Negative value to move up
      }
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0; // In case the refs are null, we return a default value
  };
 
  return (
    <main className={"main bg-purple-100"}>
      <div ref={container} className={"contaner"}>
        {" "}
        {/* Increased the height of the container */}
        <div ref={stickyMask} className={"stickyMask"}>
          <div className="bg-lime-50 relative">
          <video className=" object-cover" autoPlay muted loop>
          <source
            src="aboutus.mp4"
            type="video/mp4"
          />
        </video>
          </div>
        </div>
      </div>
    </main>
  );
}