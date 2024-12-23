"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
const TechStack = () => {
  const image1 = [
    "media/electron.png",
    "media/bunjs.png",
    "media/hyper.png",
    "media/android.png",
    "media/angular.png",
    "media/appwrite.png",
    "media/meta.png",
    "media/reactjs.png",
    "media/aws.png",
    "media/kotlin.svg",
  ];
  const image2 = [
    "media/bash.png",
    "media/analytics.png",
    "media/django.png",
    "media/docker.png",
    "media/flutter.png",
    "media/go.png",
    "media/gcloud.png",
    "media/wordpress.svg",
    "media/azure.png",
  ];
  console.log(
    image1[0].substring(
      image1[0].lastIndexOf("/") + 1,
      image1[0].lastIndexOf(".")
    )
  );
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const [id, setId] = React.useState<number | null>(null);
  return (
    <div ref={ref} className="w-full py-16 bg-purple-100 ">
      <div className="container">
        <motion.article className="flex items-center gap-3">
          {["Supercharged", "by", "the", "Right", "Tools"].map(
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
                className={`text-6xl leading-[100%] font-Grostek font-[600] tracking-tight ${
                  text.toLowerCase() === "supercharged" &&
                  "bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"
                }`}
              >
                {text}
              </motion.h1>
            )
          )}
        </motion.article>

        <div className="mt-8 w-full flex justify-center items-center">
          {/* Grid Container */}
          <motion.div className="grid grid-cols-10 h-32 w-full gap-4">
            {image1.map((src, index) => (
              <motion.div
                onMouseEnter={() => setId(index)}
                onMouseLeave={() => setId(null)}
                animate={{
                  y: isInView ? 0 : 150, // Move to 0 when in view, else stay at 150
                  opacity: isInView ? 1 : 0, // Fade in when in view, else stay invisible
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.4,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                key={index}
                className="w-full relative bg-black rounded-xl p-3"
              >
                <img src={src} className="w-full h-full object-contain" />
                {index === id && (
                  <motion.p className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black p-2">
                    {src.substring(
                      src.lastIndexOf("/") + 1,
                      src.lastIndexOf(".")
                    )}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="px-10 mt-4 flex justify-center">
          <div className="flex justify-center h-32 gap-4">
            {image2.map((src, index) => (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{
                  y: isInView ? 0 : 150,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.3,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                key={index}
                className="w-full bg-black rounded-xl p-3"
              >
                <img src={src} className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
