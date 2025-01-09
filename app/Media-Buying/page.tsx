"use client";
import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../App chunks/components/Accordion";
import { BackgroundGradientAnimation } from "../(Home Page)/HeroGradient";
import { Plus } from "@phosphor-icons/react";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);
  const faqData = [
    {
      question: "What is the cost of media buying?",
      answer:
        "The cost of media buying depends on various factors, such as the platform, targeting options, campaign duration, and ad format.",
    },
    {
      question:
        "How long does it take to see results from a media buying campaign?",
      answer:
        "The timeline for seeing results can vary based on the campaign objectives and media channels.",
    },
    {
      question: "Do I need a big budget to benefit from media buying?",
      answer:
        "Not necessarily. We offer scalable solutions that cater to businesses of all sizes.",
    },
    {
      question:
        "How do you determine which media channels are right for my business?",
      answer:
        "We start by understanding your business goals, target audience, and budget. We then analyze data and insights to identify the most effective media channels and strategies for reaching your audience.",
    },
    {
      question: "Why is media buying important for my business?",
      answer:
        "Effective media buying ensures that your brand reaches the right audience at the right time and at the best possible cost.",
    },
  ];

  const advertisingData = [
    {
      category: "Outdoor Advertising",
      subcategories: [
        {
          type: "Billboards",
          description:
            "Billboards are the most common and recognizable form of outdoor advertising. These large, static advertisements are placed along highways, roadsides, and busy intersections to capture the attention of motorists and pedestrians.",
          types: [
            "Static Billboards: Traditional billboards with a single image or message displayed.",
            "Digital Billboards: High-tech, digitally updated billboards that can rotate multiple ads or change messages in real-time.",
            "Posters & Bulletins: Smaller, more targeted versions of billboards are typically placed on local streets or in neighborhoods.",
          ],
        },
        {
          type: "Transit Advertising",
          description:
            "Transit advertising refers to ads placed on various forms of public transportation or at transit locations like bus stops, subway stations, and airports.",
          types: [
            "Bus & Train Wraps: Full or partial ads wrapped around the exterior of buses, subways, or trains.",
            "Station & Shelter Ads: Ads displayed in train stations, bus shelters, or subway tunnels.",
            "Airport Advertising: Ads placed in airports, including on walls, floors, baggage claim areas, and even on airport shuttles.",
          ],
        },
        {
          type: "Digital Outdoor Advertising",
          description:
            "Digital outdoor ads use digital technology to display dynamic and interactive content. These can be found in places like shopping malls, city centers, and transportation hubs.",
          types: [
            "Digital Billboards: Large, digital displays along roadsides or highways.",
            "Interactive Kiosks: Digital screens placed in malls, airports, or other public spaces where users can interact with the ad content.",
            "LED Displays: Dynamic and customizable ads, often found in urban settings, where the message can change throughout the day.",
          ],
        },
        {
          type: "Street Furniture Advertising",
          description:
            "Street furniture advertising refers to ads placed on items commonly found in public spaces, such as benches, bus shelters, newsstands, and kiosks.",
        },
        {
          type: "Wallscapes & Murals",
          description:
            "Wallscapes are large advertisements painted or applied to the exterior of buildings. Murals can be a blend of art and advertisement, making them eye-catching and memorable.",
        },
      ],
    },
    {
      category: "TV Advertising",
      subcategories: [
        {
          type: "National TV Advertising",
          description:
            "National TV advertising involves airing ads on large-scale, nationwide networks.",
          types: [
            "Prime-Time Ads: Aired during the most-watched time slots (8 PM to 11 PM).",
            "Daytime Ads: Targeted ads aired during the day for specific audiences.",
            "Cable TV Ads: More affordable ads aired on cable networks, offering targeted demographic reach.",
          ],
        },
        {
          type: "Local TV Advertising",
          description:
            "Local TV advertising targets specific regions, cities, or neighborhoods.",
          types: [
            "Regional Network Ads: Ads appearing on regional TV stations.",
            "Local Station Ads: Ads broadcast on local TV stations focusing on specific communities.",
          ],
        },
        {
          type: "TV Sponsorships",
          description:
            "Sponsorships involve associating your brand with specific programs or events.",
          types: [
            "Event Sponsorship: Sponsoring high-profile events like sports or award shows.",
            "Program Sponsorship: Sponsoring a TV program and receiving mentions or branded segments.",
          ],
        },
      ],
    },
    {
      category: "Radio Advertising",
      subcategories: [
        {
          type: "Traditional Radio Spots",
          description:
            "Pre-recorded commercials aired during specific time slots on a station.",
          types: [
            "30-Second Spot: Common for concise messages or promotions.",
            "60-Second Spot: Longer ads for storytelling or detailed messaging.",
            "15-Second Spot: Short ads for quick messages or offers.",
          ],
        },
        {
          type: "Sponsorship and Co-Branding",
          description:
            "Associating your brand with specific radio programs or events.",
          types: [
            "Program Sponsorship: Sponsoring specific programs or segments.",
            "Event Sponsorship: Sponsoring live events aired on the radio.",
            "Co-Branding: Collaborative promotions with the radio station.",
          ],
        },
        {
          type: "Jingles & Audio Branding",
          description:
            "Musical advertisements and auditory branding for memorable messages.",
        },
        {
          type: "Digital Radio Advertising",
          description:
            "Ads on digital platforms like Spotify and Pandora, offering targeted audio and display advertising.",
        },
      ],
    },
    {
      category: "Print Advertising",
      subcategories: [
        {
          type: "Newspaper Advertising",
          description:
            "Ads in newspapers targeting local, regional, or national audiences.",
          types: [
            "Display Ads: Large ads placed throughout the newspaper.",
            "Classified Ads: Small, text-based ads for specific categories.",
            "Public Notices: Legal or public announcements.",
          ],
        },
        {
          type: "Magazine Advertising",
          description: "Highly targeted ads in niche-interest publications.",
          types: [
            "Full-Page Ads: Large, visually impactful ads.",
            "Half-Page Ads: Smaller, concise promotional ads.",
            "Advertorials: Paid ads designed to resemble editorial content.",
          ],
        },
        {
          type: "Direct Mail Advertising",
          description: "Physical mail pieces sent to homes or businesses.",
          types: [
            "Postcards: Brief, visually impactful messages.",
            "Brochures: Informative materials showcasing products or services.",
            "Catalogs: Comprehensive product lineups.",
          ],
        },
      ],
    },
    {
      category: "Digital Media Buying",
      subcategories: [
        {
          type: "Social Media Advertising",
          description:
            "Targeted ads on platforms like Facebook, Instagram, and LinkedIn.",
          types: [
            "Carousel Ads: Interactive ads displaying multiple images or videos.",
            "Video Ads: Engaging content in video format.",
            "Story Ads: Ads appearing in platform stories.",
          ],
        },
        {
          type: "Search Engine Marketing (SEM)",
          description: "Ads on platforms like Google Ads and Bing Ads.",
          types: [
            "Text Ads: Simple text-based ads.",
            "Shopping Ads: Product-specific ads for e-commerce.",
            "Retargeting Ads: Targeting users who previously interacted with your site.",
          ],
        },
        {
          type: "Programmatic Advertising",
          description:
            "Real-time, automated ad buying using data-driven insights.",
        },
      ],
    },
  ];

  const para =
    "Media buying is more than just purchasing ad space; it's about getting your message into the right hands at the right time.";
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
                <motion.h1 className="text-center font-[600]  flex-wrap lg:text-3xl xl:text-6xl xxl:text-5xl font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="xl:mr-2 xxl:mr-4 overflow-hidden h-[70px]"
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
      <div className="my-16">
        <div className="container">
          <motion.article className="flex justify-center lg:justify-start items-center text-slate-950 gap-3">
            {["Our", "Services"].map((text, index) => (
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
                className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>
        </div>
        <div className="container mt-6">
          {advertisingData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-8 bg-purple-50 p-4 rounded-lg shadow"
            >
              <h2 className="text-2xl underline underline-offset-4 font-semibold mb-4">
                0{categoryIndex + 1} {category.category}
              </h2>
              {category.subcategories.map((subcategory, subcategoryIndex) => (
                <div key={subcategoryIndex} className="mb-6">
                  <h3 className="text-xl font-medium mb-2">
                    {subcategory.type}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {subcategory.description}
                  </p>
                  {subcategory.types && (
                    <ul className=" list-inside gap-4 text-slate-950 grid grid-cols-1 lg:grid-cols-3">
                      {subcategory.types.map((type, typeIndex) => (
                        <li
                          key={typeIndex}
                          className="bg-purple-100 rounded-lg p-3"
                        >
                          {type}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-[#121316]">
        <div className="container">
          <div>
            {" "}
            <motion.article className="flex justify-center lg:justify-start items-center text-slate-100 gap-3">
              {["Frequently", "Asked", "Questions"].map((text, index) => (
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
                  className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
                >
                  {text}
                </motion.h1>
              ))}
            </motion.article>
          </div>
          <div className="mt-10 grid gap-x-12 grid-cols-1 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-slate-400 text-md font-Grostek">
                Can&apos;t find what you are looking for?
              </p>
              <h3 className="text-slate-100 text-2xl font-Grostek font-[500]">
                We would like to chat with you.
              </h3>
              <div className="mt-3">
                <button className="text-slate-950 px-5 rounded-full font-Grostek font-[500] py-2 bg-slate-200 hover:bg-slate-100">
                  Contact us
                </button>
              </div>
            </div>
            <div>
              <Accordion defaultValue={["item-0"]}>
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionHeader icon={<Plus className="text-xl" />}>
                      {faq.question}
                    </AccordionHeader>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 container">
        <div className=" ">
          <div className=" p-7  w-full bg-[#3F51B5] text-slate-100 rounded-xl">
            <h2 className="text-3xl font-SplineSans font-[500]">
              Let’s Get Started!
            </h2>

            <p className="mt-3 font-Synonym font-[400] text-lg">
              Ready to supercharge your brand with our media buying expertise?
              Contact us today for a consultation and let us design a tailored
              media buying strategy that drives results.
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
