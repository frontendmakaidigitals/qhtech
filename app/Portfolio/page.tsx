"use client";
import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import { BackgroundGradientAnimation } from "../(Home Page)/HeroGradient";

const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mediaRef = React.useRef<HTMLDivElement>(null);

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
    "appAqosdxavbo2ax-Z3xbjqktlgj97vpdhsswl7-84Q0ixr-Kbgz2p61q0Cb5w1myqvn7urunypcjeoy2bhdlpsdmjx8hmfrhoqhuhe.mp4",
    "app_452254406_1026723278798997_6018970639625638723_n_1080.jpg",
    "app_453039841_942595274223608_6934573967153387579_n_1080.jpg",
    "app_454652901_502496362169178_546674086309498333_n_1080.jpg",
    "app_457376789_530389939384223_4420348549409720635_n_1080.jpg",
    "app_460633165_1741539829948486_2485596123405912864_n_1080.jpg",
    "app_462791529_1088018526665104_5505518182070144394_n_1080.jpg",
    "app_471444803_956581916370012_2594475209786692683_n_1080.jpg",
    "app_471757945_1006467234854614_4548150390414566411_n_1080.jpg",
    "app_472188347_591760303465295_7463572913871351307_n_1080.jpg",
    "app_472264823_1007541284747209_6398948803356672595_n_1080.jpg",
    "app_472377322_611815898051297_1175092992725811866_n_1080.jpg",
    "app_64581662_314917629389898_690371902758398562_n_1080.jpg",
    "app_64767738_377503972904046_5873148007590218512_n_1080.jpg",
    "Aqm8cfp0gbviuollcf7-Zns8i1z456gtej0olego3ocbit227Oxynjpnlfzuvq23lgyywkkbxursayArrtvcizv-Lcjcywtokqtns.mp4",
    "Aqmord4qccvtfyzsqlivfv0wgbdvb3q3fwnkypd7kplxo8obqffcujkeazoxkl3ad-H3d2kdjjpoyifwxwykVvwbk6jwug Ni6kfdk.mp4",
    "Aqn8gm0sjs55vluo1etnjrvhxkktn-Sc864fMbwgqjezawbyxuhsk G4pdjscsgbcavymmkksvpsibmnunpmrf3zlowz391whk-Meu.mp4",
    "Aqn9zaqqul8toyl-Otes2g15kxcor3ncyqowa9tttenkpfq0aqlxb4ctj0dvvhyihgfhzn18uhcuzxha1izkzzfons06u7uwy2njkik.mp4",
    "Aqnikcxw0aakk7n7eusdotpeo7vfowmyyk7j55uqrnv-Bmracoyx9l9j4thykn1wgi0i3n5u3wpenamp0y7bd0byprna3hxqfw5rzpa.mp4",
    "Aqod0gq4pt04m5camszngcoa1wbxehual-Rb-Amgeoik0urxt9f4bkgngqidvns3-7Eri-Nmiuv66egc41ftaqkl5icalad-Ec7ptly.mp4",
    "Aqoqmktreroz8oksun9d13cpgqhwyrk7p4wypnarw3u9fwqfmm Dmnwo7m4tksacsm70ya7v20k9zqtrsvxkdkrlv761rrzt1rcfpji.mp4",
    "DSC07956.jpg",
    "DSC07967.jpg",
    "DSC07970.jpg",
    "K9bvw95mrqqm-Uyiji2blsquuu1sda2gwr84m7qfrpr9qfjyomwluui0g9fdbsboi2yurrorcilucr2he4r8rhdhfhwt47cm8.mp4",
    "Portfolio1.mp4",
    "Portfolio2.mp4",
    "Portfolio3.mp4",
    "Portfolio4.mp4",
    "Portfolio5.mp4",
    "Portfolio6.mp4",
    "Portfolio7.mp4",
    "VideoAqms3jexow0v86v8icvbbkmamgy4mdzj76cpsc-Ztw4m0i33w6uxq2rcyyAm2f5r4mnccrhkwolyqj9ybfkbmh7e8tlbkbda9xhxkc.mp4",
    "VideoAqn7jjcxg9lkhhudemt786wfsqbltb8znkop-Jwb2a3dr1cp6phasUqbwdi6wzhjxfy-Qe6cf5v5tzqwmk4qwqkgccvdscoonf8f8u.mp4",
    "VideoAqpydmz4gaz6cei5gx981kf1mkwq9ra6mogax3oweuwdvxt-V79qw-Tqgs2oslplsmlv7ar2wpkp7lx Wxi-Siiafvncldmotaqxv4y.mp4",
    "Xzvqxcpbauq8-Fcutlt9srzx8mcolf5uqas00c4gwsecbu3uoaztlmslf3udkaz7qnutrrufmj2qkkvggvnlh7y.mp4",
    "0-Ndu9wl-9Iutftonybbcb6rcsj8jkod3pudyulwpqachg1cyg98sjsy5xbfgyesr-7TpzaaknmRuncmAmyhhnzlofevi.mp4",
  ];

  const fileObjects = fileNames.map((name) => ({
    fileName: `media/photographyImages/${name}`,
  }));
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

      <motion.div ref={mediaRef}>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fileObjects.map((file, index) => {
              const fileExtension = file.fileName
                .split("/")
                .pop()
                ?.split(".")
                .pop();

              return (
                <motion.div key={index} className="w-full aspect-[3/4]">
                  {fileExtension === "mp4" ? (
                    <video
                      muted
                      loop
                      autoPlay
                      className="w-full h-full object-cover"
                    >
                      <source src={file.fileName} type="video/mp4" />
                    </video>
                  ) : fileExtension === "jpg" ||
                    fileExtension === "jpeg" ||
                    fileExtension === "png" ? (
                    <img
                      src={file.fileName}
                      alt={file.fileName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p>{file.fileName}</p>
                  )}
                </motion.div>
              );
            })}
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
