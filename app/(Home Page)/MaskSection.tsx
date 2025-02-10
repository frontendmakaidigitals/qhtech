"use client";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "@/app/App chunks/components/MaskSection.css";

export default function MaskSection() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);
  const slidingCard = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const initialMaskSize = 0.5;
  const targetMaskSize = 100;
  const easing = 0.15;
  let easedScrollProgress = 0;
  const [maskSize, setMaskSize] = useState(initialMaskSize);

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (stickyMask.current && container.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      const currentMaskSize = initialMaskSize + maskSizeProgress;
      setMaskSize(currentMaskSize);

      if (stickyMask.current) {
        stickyMask.current.style.maskSize = currentMaskSize * 100 + "%";
      }

      if (slidingCard.current) {
        const scrollProgress = getScrollProgress();
        const moveUpAmount = scrollProgress * 600; // Adjust this multiplier for speed/distance
        slidingCard.current.style.transform = `translateY(-${moveUpAmount}px)`; // Negative value to move up
      }

      // Check if the mask size has reached 90% of the target size
      if (videoRef.current) {
        if (currentMaskSize >= 85) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (
      typeof window !== "undefined" &&
      stickyMask.current &&
      container.current
    ) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0; // In case the refs are null, or window is not available, return a default value
  };

  const path = usePathname();
  const renderPath = "/admin";

  return !path.includes(renderPath) ? (
    <main className={"main bg-purple-100"}>
      <div ref={container} className={"contaner h-[300vh] lg:h-[600vh]"}>
        {" "}
        {/* Increased the height of the container */}
        <div ref={stickyMask} className={"stickyMask"}>
          <div className="relative h-screen w-screen">
            <video ref={videoRef} className="object-cover" autoPlay muted loop>
              <source
                src="https://github.com/frontendmakaidigitals/InsightVision/raw/refs/heads/master/public/media/ISVWebsite.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </main>
  ) : null;
}