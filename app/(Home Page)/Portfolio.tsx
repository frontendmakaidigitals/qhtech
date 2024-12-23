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

  const x = useTransform(scrollYProgress, [0, 1], ["2.3%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen  bg-yellow-300 items-center overflow-hidden">
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
