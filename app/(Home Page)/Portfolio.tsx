"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [".2%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] py-20 bg-black">
        <motion.article className="flex container justify-center lg:justify-center items-center text-purple-100 gap-3">
        {["Our", "Portfolio"].map((text, index) => (
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
      <div className="sticky top-0 flex h-screen   items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  card,
}: {
  card: { url: string; title: string; id: number; color: string };
}) => {
  return (
    <motion.div
      key={card.id}
      style={{ backgroundColor: card.color }}
      className="group relative rounded-xl ml-10 h-[500px] w-[calc(100vw-8rem)] py-20 overflow-hidden "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
        {card.title}
      </p>
    </motion.div>
  );
};

export default Portfolio;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Portfolio 1",
    id: 1,
    color: "red",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Portfolio 2",
    id: 2,
    color: "yellow",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Portfolio 3",
    id: 3,
    color: "green",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Portfolio 4",
    id: 4,
    color: "blue",
  },
];
