"use client";
import React from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
export default function HeroSection() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main ref={container} className="relative ">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress } : { scrollYProgress: MotionValue<number>}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const tags = [
    "360 Marketing Agency",
    "Strategic Branding",
    "Campaign Management",
  ];
  const cards = [{ rotate: 7 }, { rotate: 3 }, { rotate: 3 }];
  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky bg-black top-0 h-screen"
    >
      <div className="absolute top-0 left-0 -z-[1]">
        <img
          src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%20ribbon.png"
          loading="lazy"
          sizes="100vw"
          srcSet="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-500.png 500w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-800.png 800w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-1080.png 1080w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-1600.png 1600w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-2000.png 2000w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-2600.png 2600w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%20ribbon.png 3200w"
          alt=""
          className=" w-full h-full object-cover "
        />
      </div>
      <div className="container flex flex-col items-center text-purple-50 justify-center py-28 w-full h-full">
        <div className="flex items-center gap-6 h-[100px] overflow-hidden">
          {["Elevate", "Your", "Brand", "&"].map((text, index) => (
            <motion.h1
              key={index}
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              style={{ textShadow: "0px 0px 2px #000000F" }}
              className="text-[7rem] leading-[6.5rem] font-Grostek font-[700] bg-gradient-to-tl from-slate-200 to-white bg-clip-text text-transparent"
            >
              {text}
            </motion.h1>
          ))}
        </div>

        <div className="flex items-center gap-6 h-[100px] overflow-hidden">
          {["Dominate", "the", "Market"].map((text, index) => (
            <motion.h1
              key={index}
              initial={{ y: 250 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              style={{ textShadow: "0px 0px 2px #000000F" }}
              className="text-[7rem] leading-[6.5rem] font-Grostek font-[700] bg-gradient-to-tl from-slate-200 to-white bg-clip-text text-transparent"
            >
              {text}
            </motion.h1>
          ))}
        </div>
        <div className="flex items-center font-[500] font-Synonym mt-3 gap-3 overflow-hidden h-[25px] ">
          {tags.map((tag, index) => (
            <motion.p
              key={index}
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className={`pr-3 ${index != 2 && "border-r"} border-slate-50 `}
            >
              {" "}
              {tag}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [7, 0]);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);
  const [inView, setIsInView] = React.useState<boolean>(false);
  const services = [
    {
      name: "Web Development",
      img: "https://iaqmc.com/wp-content/uploads/2024/03/IAQMC-WEB-DEVELOPMENT.jpg",
    },
    {
      name: "App Development",
      img: "https://www.valuecoders.com/blog/wp-content/uploads/2023/02/800x600-29.png.webp",
    },
    {
      name: "Social Media Marketing",
      img: "https://www.fenews.co.uk/wp-content/uploads/2022/01/social-media-1200x800.jpg",
    },
    {
      name: "SEO Marketing",
      img: "https://cdn.shopify.com/s/files/1/0070/7032/files/seo-marketing-what-is-it-how-does-it-work-small.jpg?v=1618324109",
    },
    {
      name: "Photography & Videography",
      img: "https://blog.fotonic.co.uk/wp-content/uploads/2022/02/kushagra-kevat-9ESAufvpgjI-unsplash-1024x576-1.jpg",
    },
    { name: "Media Buying", img: null },
    { name: "Performance Marketing", img: null },
    { name: "Content Marketing", img: null },
    { name: "PUBLIC RELATIONS", img: null },
    { name: "Branding & Advertising", img: null },
    { name: "IT Consulting & Advisory", img: null },
    { name: "Cyber Security", img: null },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("sticky-section");
     if(element){
       const rect = element.getBoundingClientRect();

       if (rect.top <= 0) {
         setIsSticky(true);
       } else {
         setIsSticky(false);
       }
     }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.section
      style={{ scale, rotate }}
      viewport={{ once: false }}
      className="relative py-24 bg-purple-100 text-gray-950"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.article
        animate={{
          backgroundColor: isSticky
            ? "rgba(255, 255, 255, 0.1)"
            : "transparent",
          backdropFilter: isSticky ? "blur(10px)" : "none",
          color: isSticky ? "white" : "black",
        }}
        className="container flex items-center gap-3 sticky top-0 left-0 mx-auto z-[50] "
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
              className="text-6xl leading-[100%] font-Grostek font-[600] tracking-tight "
            >
              {text}
            </motion.h1>
          )
        )}
      </motion.article>
      <motion.div
        id="sticky-section"
        className="mt-10 relative z-20 container grid grid-cols-4 gap-4"
        initial={{ opacity: 1 }} // Initially, the parent container is invisible
        whileInView={{ opacity: 1 }} // Make the parent visible when in view
        transition={{ duration: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-full group rounded-xl overflow-hidden relative aspect-[3/4] bg-black"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1, // Fully visible after animation
              y: inView ? 0 : 300, // Move to the final position (top of the screen)
            }}
            transition={{
              delay: index * 0.1, // Staggered animation with a delay based on the index
              ease: "easeOut",
              duration: 0.3,
            }}
          >
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-gray-950/70 to-transparent" />
            <img
              src={service.img ?? ""}
              className="w-full grayscale group-hover:grayscale-0 group-hover:scale-[1.1] transition-all duration-300 h-full object-cover"
            />

            <div className="absolute bottom-4 z-20 left-4">
              <p className="text-white text-2xl font-Synonym font-[500]">
                {service.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
