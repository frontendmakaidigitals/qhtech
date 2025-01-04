import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Menu = ({
  menu = [{ title: "Home", link: "/" }],
  className,
}: {
  className?: string;
  menu: { title: string; link: string }[];
}) => {
  return (
    <div className="">
      <SlideTabs menu={menu} className={className} />
    </div>
  );
};

const SlideTabs = ({
  menu,
  className,
}: {
  menu: { title: string; link: string }[];
  className?: string;
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto font-Grostek flex w-fit rounded-full border border-slate-50/30 isolate bg-gray-500/10 bg-clip-padding backdrop-saturate-100 backdrop-contrast-100 backdrop-blur backdrop-filter p-1 ${className}`}
    >
      {menu.map((item, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          link={item.link}
          setHoveredTab={setHoveredTab}
          hoveredTab={hoveredTab}
        >
          {item.title}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  link,
  setHoveredTab,
  hoveredTab,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  link: string;
  setHoveredTab: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredTab: string | null;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
        setHoveredTab(children as string); // Set the hovered tab to trigger the pop-up
      }}
      onMouseLeave={() => {
        setHoveredTab(null); // Reset the hovered tab when mouse leaves
      }}
      className={`relative group z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base`}
    >
      <Link href={link}>
        <button className="group relative rounded-full uppercase text-purple-50">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              {children}
            </div>
            <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {children}
            </div>
          </span>
        </button>
      </Link>

      <AnimatePresence>
        {hoveredTab === children && children === "services" && <ShowPopup />}
      </AnimatePresence>
    </li>
  );
};

const ShowPopup = () => {
  const menui = [
    {
      title: "App Development",
      image:
        "https://cdn.dribbble.com/userupload/12017862/file/original-44519a7c4bcabd10527f4811e2ae8086.png?format=webp&resize=400x300&vertical=center", // Example image path
      color: "bg-blue-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
    },
    {
      title: "Web Development",
      image: "https://mobirise.com/assets24/images/templates.webp",
      color: "bg-green-500",
      rotate: -4,
      rounded: 70,
      top: 30,
      left: 8,
    },
    {
      title: "Social Media Marketing",
      image:
        "https://img.freepik.com/premium-photo/3d-rendered-photos-social-media-marketing-concept-marketing-8k-result_1139417-30443.jpg",
      color: "bg-red-500",
      rotate: 3,
      rounded: 80,
      top: 20,
      left: 18,
    },
    {
      title: "Content Marketing",
      image:
        "https://cdn.pixabay.com/photo/2019/04/07/23/11/content-marketing-4111003_1280.jpg",
      color: "bg-yellow-500",
      rotate: 8,
      rounded: 60,
      top: 40,
      left: 40,
    },
    {
      title: "SEO Marketing",
      image:
        "https://images.inc.com/uploaded_files/image/1920x1080/getty_493335634_2000133320009280405_338428.jpg",
      color: "bg-indigo-500",
      rotate: -3,
      rounded: 60,
      top: 30,
      left: 18,
    },
    {
      title: "Media Buying",
      image:
        "https://static.vecteezy.com/system/resources/previews/046/909/381/non_2x/media-buying-process-concept-flat-illustration-vector.jpg",
      color: "bg-purple-500",
      rotate: -10,
      rounded: 66,
      top: 35,
      left: 15,
    },
    {
      title: "Performance Marketing",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHGRvxtLtUufg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1709730782036?e=2147483647&v=beta&t=YJmFuKAwpVhA-KxHNeHXy7YuNt5VHAGY8Kz4cBsD180",
      color: "bg-orange-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
    },
    {
      title: "IT Consulting & Advisory",
      image:
        "https://www.enterpriseitworld.com/wp-content/uploads/2023/08/IT-Consulting-Company.jpg",
      color: "bg-teal-500",
      rotate: -10,
      rounded: 60,
      top: 50,
      left: 17,
    },
    {
      title: "Cyber Security",
      image:
        "https://t4.ftcdn.net/jpg/07/53/50/51/360_F_753505163_oGvv1D8KlniGSwUx7ywO9sDIWbzpbSfM.jpg",
      color: "bg-gray-500",
      rotate: 3,
      rounded: 66,
      top: 30,
      left: 16,
    },
    {
      title: "Public Relations",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybmhhbx17asCgjoj5vjhBIpJoiV_R_OBX6A&s",
      color: "bg-pink-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
    },
    {
      title: "Branding & Designing",
      image:
        "https://bitwisebranding.com/uploads/blog-images/1603114000main.png",
      color: "bg-lime-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
    },
  ];
  const [id, setHoverid] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ scale: 0, x: "-50%", opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute w-[450px] left-1/2 z-[999] cursor-default top-full origin-top transform -translate-x-1/2  text-black  rounded-lg"
    >
      <div className="mt-2 realtive grid grid-cols-1 gap-3 lg:grid-cols-2 p-4 rounded-lg bg-white">
        {menui.map((menu, index) => (
          <div className="relative">
            <AnimatePresence mode="wait">
              {id === index ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  style={{
                    borderRadius: `${menu.rounded}%`,
                    rotate: `${menu.rotate}deg`,
                    top: `${menu.top}%`,
                    left: `${menu.left}%`,
                  }}
                  className="absolute bg-blue-300 pointer-events-none z-[99] overflow-hidden  w-full h-[100px]"
                >
                  <img
                    className=" w-full h-full object-cover"
                    src={menui[id].image}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
            <button
              key={index}
              onMouseEnter={() => setHoverid(index)}
              onMouseLeave={() => setHoverid(null)}
              className={`font-Grostek relative z-[10] font-[500] rounded-lg hover:bg-slate-100 text-start p-3`}
            >
              {menu.title}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        duration: 0.4,
        ease: [0.17, 0.84, 0.44, 1],
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Menu;
