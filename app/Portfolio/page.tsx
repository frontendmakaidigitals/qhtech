"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import { BackgroundGradientAnimation } from "../(Home Page)/HeroGradient";
import VideoPortfolio from "../App chunks/components/videoScroll";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
 
  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  const fileNames = [
    "20241130_130756.jpg",
    "20241227_120804.jpg",
    "2024_11_30_12_51_IMG_5750.jpg",
    "2024_11_30_12_56_IMG_5775.jpg",
    "2024_11_30_12_58_IMG_5781.jpg",
    "2024_11_30_12_58_IMG_5782.jpg",
    "2024_11_30_12_59_IMG_5788.jpg",
    "2024_11_30_12_59_IMG_5791.jpg",
    "DSC07956.jpg",
    "DSC07967.jpg",
    "DSC07970.jpg",
    "file.text",
    "filelist.txt",
    "filenames.txt",
    "file_names.txt",
    "Portfolio 1.mp4",
    "Portfolio 2.mp4",
    "Portfolio 3.mp4",
    "Portfolio 4.mp4",
    "Portfolio 5.mp4",
    "Portfolio 6.mp4",
    "Portfolio 7.mp4",
    "Snapinsta.app_452254406_1026723278798997_6018970639625638723_n_1080.jpg",
    "Snapinsta.app_453039841_942595274223608_6934573967153387579_n_1080.jpg",
    "Snapinsta.app_454652901_502496362169178_546674086309498333_n_1080.jpg",
    "Snapinsta.app_457376789_530389939384223_4420348549409720635_n_1080.jpg",
    "Snapinsta.app_460633165_1741539829948486_2485596123405912864_n_1080.jpg",
    "Snapinsta.app_462791529_1088018526665104_5505518182070144394_n_1080.jpg",
    "Snapinsta.app_471444803_956581916370012_2594475209786692683_n_1080.jpg",
    "Snapinsta.app_471757945_1006467234854614_4548150390414566411_n_1080.jpg",
    "Snapinsta.app_472188347_591760303465295_7463572913871351307_n_1080.jpg",
    "Snapinsta.app_472264823_1007541284747209_6398948803356672595_n_1080.jpg",
    "Snapinsta.app_472377322_611815898051297_1175092992725811866_n_1080.jpg",
    "Snapinsta.app_64581662_314917629389898_690371902758398562_n_1080.jpg",
    "Snapinsta.app_64767738_377503972904046_5873148007590218512_n_1080.jpg",
    "Snapinsta.app_video_AQM8cFP0GBviUOllcF7-znS8I1z456GtEj0OLego3ocBit227_OXYNJPNLFZUvQ23LgyYwKKbxUrSAY_arRtvcIzV-lcJcYWToKQtNs.mp4",
    "Snapinsta.app_video_AQMorD4qcCVtFYZsqliVfv0WGBDVb3Q3FWNkyPd7kpLXo8oBqFFcUJKeAZOxkl3aD-h3d2kDJjPoyifWxWYK_vVwBk6JwUG_NI6KfDk.mp4",
    "Snapinsta.app_video_AQMs3jEXoW0V86V8icvBbkMAMgy4MdZj76cpSC-Ztw4M0i33W6uxQ2rcYY_aM2F5r4MNccRHKWolYQj9YbfkbMH7e8TlbkbDa9xhxkc.mp4",
    "Snapinsta.app_video_AQMzOsP_0-NDU9Wl-9IUtfTOnYBBcB6rcSJ8jkOd3PudyuLwpqACHg1CYG98sJsY5XBfgYesr-7tpzaaknM_RUnCM_AmyHHNZLoFevI.mp4",
    "Snapinsta.app_video_AQN7jjcXg9lKHhUDEmT786WFSqbltb8Znkop-jWB2A3dR1cP6PhAs_UqBwdi6wZhjXFy-QE6Cf5v5TZqWMk4QWQkGccVdScoOnF8F8U.mp4",
    "Snapinsta.app_video_AQN8gM0SJS55vLuo1EtNjrVHxKKtn-sc864f_mbwGqJEZAwBYxUHSK_g4pdjsCsGbcaVymMKkSvPsIbmnuNPMrf3ZlOwz391wHk-MEU.mp4",
    "Snapinsta.app_video_AQN9ZAqqUl8TOYl-OTES2G15kxcor3NCYqOwa9TTTENKpFq0aQLxb4CTj0dVVHYIhGFhzN18UHCUzXHa1IzKZZfons06u7uwy2nJKik.mp4",
    "Snapinsta.app_video_AQNiKcXw0AAKk7n7euSdOtpeO7VFoWmYyk7j55UQRnv-bmRACOYx9l9j4thYkN1wGI0i3N5u3WpeNaMp0y7BD0BYprNA3HXQFW5RZpA.mp4",
    "Snapinsta.app_video_AQOd0gQ4Pt04M5camsZngcOa1WbxEhuaL-RB-amGeOiK0Urxt9f4bkgnGqIDVNS3-7eri-NmiUV66eGC41FtaQkL5ICALAD-EC7PTLY.mp4",
    "Snapinsta.app_video_AQOIB_K9BVw95MRqQm-UYIji2BLsQUUU1SDa2Gwr84m7QfRpR9QFJYoMWLUui0G9FdBsboI2YURrORCiLucr2He4r8RhDhfHwT47cm8.mp4",
    "Snapinsta.app_video_AQOKY_SZHC77Q01_XZvqxcPBAUq8-FcUtLt9sRZx8MCOlf5uqAS00C4GWsECbu3UoaztlmsLF3UDKAz7qnutrrUFmJ2qKKvggvNlh7Y.mp4",
    "Snapinsta.app_video_AQOQMKtreRoz8Oksun9D13CPGqHWyrk7P4WypNaRW3u9fwQfmm_dMNWo7m4TKsacSM70yA7V20k9zqTrSvXkDKRLv761rRzt1RcFpJI.mp4",
    "Snapinsta.app_video_AQOsDxAvbo2Ax-z3XbjqktLGJ97vpDhSSwl7-_8_4Q0Ixr-KbGz2P61Q0_CB5W1mYQvN7uRUnyPCjeOY2bhdLpsDMjX8HmFRHoQhuhE.mp4",
    "Snapinsta.app_video_AQPydmZ4gaz6cEi5Gx981kf1mKWQ9ra6MoGaX3OweUwdvXt-v79qW-tqgS2OSlplsmLv7AR2WPKP7Lx_WxI-SiIafVNClDMoTaqxv4Y.mp4",
  ];

  const fileObjects = fileNames.map((name) => ({
    fileName: `media/photographyImages/${name}`,
  }));
  console.log(fileObjects[0].fileName.split("/").pop());

  const para =
    "Showcasing Creativity and Craft: A Portfolio of Innovative Design and Thoughtful Solutions";

  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="white"
                gradientBackgroundEnd="blue"
              />
            </div>
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <BreadCrumb />
              <div
                style={{ height: `calc(100vh - ${height + 200}px)` }}
                className="flex flex-col container items-center text-slate-100 justify-center"
              >
                <motion.h1 className="text-center font-[600]  flex-wrap lg:text-3xl xl:text-6xl font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="xl:mr-2 xxl:mr-4 overflow-hidden h-[80px]"
                      style={{
                        display: "inline-block", // Ensure words are treated as block elements
                      }}
                    >
                      <motion.span
                        initial={{ y: 300, opacity: 0, rotate: 20, x: -10 }} // Start from below
                        animate={{
                          y: 0, // Move to original position
                          opacity: 1,
                          rotate: 0,
                          x: 0,
                        }}
                        style={{
                          display: "inline-block", // Ensure words are treated as block elements
                        }}
                        transition={{
                          ease: [0, 0, 0.2, 1],
                          duration: 1,
                          delay: index * 0.1, // Increased delay to prevent overlap
                        }}
                        className="origin-top-right"
                      >
                        {item}
                      </motion.span>
                      {"  "}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fileObjects.map((file, index) => (
              <div key={index} className="w-full  aspect-[3/4]">
                {fileObjects[0].fileName.split("/").pop() === "mp4" ? (
                  <></>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="py-16 container">
        <div className=" ">
          <div className=" p-7  w-full bg-[#3F51B5] text-slate-100 rounded-xl">
            <h2 className="text-3xl font-SplineSans font-[500]">
              Let’s Drive Performance Together
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              If you`re ready to take your marketing to the next level and see
              measurable growth, contact us today. Whether you`re looking to
              scale quickly or improve your marketing ROI, we have the tools and
              expertise to get you there.
            </p>

            <button className="mt-5 px-4 py-2 bg-white text-slate-900 font-SplineSans rounded-lg font-[400]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
