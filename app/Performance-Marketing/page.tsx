"use client";
import React from "react";
import {motion } from "framer-motion";
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
      question:
        "How does performance marketing differ from traditional marketing?",
      answer:
        "Traditional marketing often involves paying for ad placements regardless of outcomes, such as impressions or ad views. In contrast, performance marketing ensures you pay only when a predefined action is completed, making it more cost-effective and result-oriented.",
    },
    {
      question: "Which platforms do you use for performance marketing?",
      answer:
        "We work across a wide range of platforms, including Google Ads, Facebook, Instagram, LinkedIn, TikTok, YouTube, and affiliate networks. Our multi-channel approach ensures maximum reach and impact.",
    },
    {
      question:
        "How do you measure the success of a performance marketing campaign?",
      answer:
        "Success is measured using key performance indicators (KPIs) such as click-through rates (CTR), cost per acquisition (CPA), return on ad spend (ROAS), conversion rates, and overall ROI. We provide detailed reports to keep you informed of your campaign’s progress.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with clients across a variety of industries, including e-commerce, technology, healthcare, finance, real estate, and more. Our customized approach ensures strategies are tailored to your specific market.",
    },
    {
      question:
        "How much should I budget for a performance marketing campaign?",
      answer:
        "The budget depends on your goals, industry, and the platforms you want to use. We’ll work with you to create a strategy that maximizes your ROI, regardless of your budget size.",
    },
    {
      question: "How quickly can I expect results from performance marketing?",
      answer:
        "Performance marketing can yield quick results, often within days or weeks, depending on the campaign. However, ongoing optimization is necessary to improve performance and sustain long-term growth.",
    },
  ];
  const marketingServices = [
    {
      title: "DV360 (Display & Video 360)",
      description:
        "Enhance your programmatic advertising with Google’s powerful DV360 platform, designed for advanced campaign management across display, video, audio, and connected TV.",
      features: [
        "Access premium inventory across YouTube, Google partners, and third-party exchanges",
        "Advanced audience targeting and custom bidding strategies",
        "Real-time campaign optimization with analytics",
        "Robust brand safety tools and third-party integrations",
        "Cross-channel campaign management for maximum impact",
      ],
    },
    {
      title: "Campaign Management",
      description:
        "Comprehensive management of multi-channel campaigns, ensuring timely execution, within budget, and delivering desired results.",
      features: [
        "End-to-end management of campaigns",
        "Regular performance reviews and adjustments",
        "Transparent communication and reporting",
        "Scalable solutions to support business growth",
      ],
    },
    {
      title: "Paid Search Advertising (PPC)",
      description:
        "Optimize Google Ads campaigns for highly targeted traffic, ensuring cost-effective ad spend.",
      features: [
        "Keyword research and strategy",
        "Compelling ad copywriting with A/B testing",
        "Real-time bid management",
        "Remarketing strategies for conversion optimization",
      ],
    },
    {
      title: "Affiliate Marketing",
      description:
        "Performance-based strategy leveraging affiliates to promote your products or services on a commission basis.",
      features: [
        "Affiliate recruitment and onboarding",
        "Comprehensive program management",
        "Detailed tracking and reporting",
      ],
    },
    {
      title: "Display Advertising",
      description:
        "Visually compelling ads across various websites to boost brand awareness, traffic, and conversions.",
      features: [
        "Advanced targeting options",
        "Creative and engaging ad design",
        "Performance monitoring and continuous optimization",
      ],
    },
    {
      title: "Email Marketing",
      description:
        "Engage with customers and drive conversions through personalized email campaigns.",
      features: [
        "List segmentation for personalized messaging",
        "Mobile-friendly, visually appealing email design",
        "Automated workflows for nurturing leads",
        "Performance tracking and optimization",
      ],
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Improve website and marketing funnel effectiveness to maximize conversions.",
      features: [
        "Landing page optimization",
        "A/B testing for performance improvement",
        "User experience enhancements",
        "Funnel analysis and optimization",
      ],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track campaign performance and make data-driven decisions with advanced analytics.",
      features: [
        "Real-time analytics for immediate insights",
        "Custom reports tailored to business goals",
        "Actionable campaign insights and optimization recommendations",
      ],
    },
    {
      title: "Video Advertising",
      description:
        "Create compelling video ads for platforms like YouTube, Facebook, and Instagram to drive engagement and conversions.",
      features: [
        "High-quality video production",
        "Targeted campaigns for maximum impact",
        "Performance tracking and campaign optimization",
      ],
    },
  ];

  const para =
    "Performance Marketing Maximizing Impact with Data Driven Results";

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

        <div className="grid grid-cols-1 gap-4 container ">
          {marketingServices.map((service, index) => (
            <div
              key={index}
              className="bg-purple-50 p-6 rounded-lg  transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600 my-4">{service.description}</p>
              <ul className="grid grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="p-4 bg-purple-100 rounded-lg">
                    {feature}
                  </li>
                ))}
              </ul>
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
