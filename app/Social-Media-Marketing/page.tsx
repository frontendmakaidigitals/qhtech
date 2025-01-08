"use client";
import React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
   
} from "../App chunks/components/Accordion";
import { Plus } from "@phosphor-icons/react";
import { Circle } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
      question: "Which social media platforms should my business be on?",
      answer:
        "The best platforms depend on your business goals and target audience. We analyze your business and decide on which platforms you must target.",
    },
    {
      question: "How often should I post on social media?",
      answer:
        "Consistency is key. The optimal posting frequency depends on the platform and your audience’s preferences.",
    },
    {
      question: "Do I need a big budget for social media marketing?",
      answer:
        "Not necessarily! Organic strategies can be highly effective with creativity and time. You can start small and scale for paid campaigns as you see results.",
    },
    {
      question:
        "Can I handle my social media marketing, or do I need a professional?",
      answer:
        "You can manage it yourself, but hiring professionals ensures expert strategy development and high-quality content creation.",
    },
    {
      question:
        "How long does it take to see results from social media marketing?",
      answer:
        "Results vary based on your goals. Organic growth may take a few months, while paid ads can show results within days. Consistent effort and strategy deliver long-term success.",
    },
  ];
  const selfPraise = [
    {
      title: "Custom Solutions",
      description:
        "Every business is unique, and so are our apps. We tailor solutions to fit your specific needs, ensuring your app aligns perfectly with your marketing goals.",
      color: "#D4E157",
    },
    {
      title: "User-Friendly Design",
      description:
        "We create visually appealing and easy-to-navigate applications to provide the best user experience.",
      color: "#4FC3F7",
    },
    {
      title: "Scalable Architecture",
      description:
        "As your business grows, so should your app. We build scalable applications that grow with you.",
      color: "#FF8A65",
    },
    {
      title: "Expert Developers",
      description:
        "Our team comprises industry experts with years of experience in mobile and web application development.",
      color: "#FFEE58",
    },
    {
      title: "End-to-End Services",
      description:
        "From idea and design to development, testing, and deployment, we handle everything effortlessly.",
      color: "#FFEE65",
    },
    {
      title: "On-Time Delivery",
      description:
        "We ensure timely delivery without compromising on quality, so your app launches on schedule.",
      color: "#42A5F5",
    },
  ];

  const servicesData = [
    {
      title: "Social Media Advertising",
      description:
        "We create tailored ad campaigns to promote products, services, or brands across platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok. These campaigns are designed to engage users, build brand awareness, and drive conversions.",
      details: [
        "Behavioral Targeting: Ads are customized to resonate with specific audience interests, age groups, locations, and behaviors.",
        "Diverse Ad Formats: Utilize image ads, video ads, carousel ads, story ads, and influencer partnerships to maximize impact.",
        "Engaging Copy: Short, persuasive text with clear CTAs like 'Shop Now,' 'Learn More,' or 'Sign Up.'",
        "Visual Appeal: High-quality visuals, including images, videos, or animations, that grab attention and reinforce your brand message.",
        "Hashtag Strategy: Use trending or branded hashtags to enhance discoverability and reach.",
      ],
      conclusion:
        "Our social media advertising strategies drive measurable results, helping your brand connect with the right audience and achieve business goals.",
    },
    {
      title: "Lead Generation",
      description:
        "We help businesses attract high-quality leads and turn them into loyal customers through strategic campaigns and compelling content.",
      details: [
        "Targeted Advertising: Leverage Facebook Ads, Google Ads, and LinkedIn to reach the right audience with precision.",
        "Landing Pages That Convert: Design user-friendly, visually appealing pages optimized for capturing leads.",
        "Automated Lead Nurturing: Use email sequences and workflows to guide prospects through your sales funnel.",
        "Comprehensive Analytics: Track campaign performance and optimize for maximum ROI with detailed reports.",
      ],
      conclusion:
        "Our lead generation services help you grow your customer base effectively, driving long-term business success.",
    },
    {
      title: "Influencer Marketing",
      description:
        "Collaborate with influencers to promote your brand organically and authentically. We connect you with the right influencers to amplify your message.",
      details: [
        "Influencer Matching: Identify influencers who align with your brand values and target audience.",
        "Custom Campaign Strategies: Design campaigns that authentically showcase your products or services.",
        "Performance Tracking: Monitor results in real time to optimize campaign effectiveness.",
        "Long-Term Partnerships: Build lasting relationships with influencers to drive continuous engagement.",
      ],
      conclusion:
        "Our influencer marketing campaigns create authentic connections with your audience, driving engagement and boosting sales.",
    },
    {
      title: "Affiliate Marketing",
      description:
        "Tap into affiliate marketing to generate consistent revenue. We help you set up and manage successful affiliate programs to boost your online presence.",
      details: [
        "Program Setup: Design and implement affiliate programs that attract top-performing affiliates.",
        "Targeted Affiliate Recruitment: Identify affiliates who align with your audience and goals.",
        "Affiliate Support: Provide onboarding, training, and ongoing assistance to ensure success.",
        "Analytics & Optimization: Track affiliate performance and refine strategies to maximize results.",
      ],
      conclusion:
        "With our affiliate marketing services, you can drive revenue growth and build a network of partners promoting your brand.",
    },
    {
      title: "Community Management",
      description:
        "Build and nurture meaningful relationships with your audience through community management. We help turn followers into loyal advocates for your brand.",
      details: [
        "Active Engagement: Respond to comments, messages, and mentions to maintain ongoing conversations.",
        "Content Moderation: Ensure a positive and supportive community aligned with your brand values.",
        "Brand Advocacy: Transform your most loyal followers into ambassadors who promote your business.",
        "Growth Strategies: Develop plans to grow and sustain an active, engaged community.",
      ],
      conclusion:
        "Our community management services foster genuine connections, creating a loyal customer base that supports your brand's growth.",
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business goals, target audience, and app requirements to create a clear project roadmap.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our design team creates interactive prototypes and wireframes to visualize the user journey and app functionality.",
    },
    {
      title: "Development",
      description:
        "Using the latest tools and frameworks, our developers build secure applications customized to your needs.",
    },
    {
      title: "Testing",
      description:
        "We rigorously test your app for performance, security, and functionality to ensure a flawless user experience.",
    },
    {
      title: "Launch & Deployment",
      description:
        "We assist with launching your app on relevant platforms and ensure smooth deployment.",
    },
    {
      title: "Post-Launch Support",
      description:
        "After the launch, we provide ongoing maintenance and updates to keep your app performing at its best.",
    },
  ];

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 15,
    },
  });

  const para = "Transform Your Vision Into Powerful Mobile & Web Application";
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <BreadCrumb />
              <div
                style={{ height: `calc(100vh - ${height + 200}px)` }}
                className="flex flex-col container items-center text-slate-100 justify-center"
              >
                <motion.h1 className="text-center font-[600]  flex-wrap lg:text-3xl xl:text-6xl xxl:text-7xl  font-Grostek relative">
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
        <div className="container grid grid-cols-1 mt-7 gap-4 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            {servicesData.map((service, index) => (
              <motion.div
                initial={{ y: "50%" }}
                whileInView={{ y: "0%" }}
                transition={{ ease: [0.175, 0.885, 0.32, 1.1], duration: 0.8 }}
                key={index}
                className={`p-6 bg-[#e0f5ff] rounded-xl`}
              >
                <h3 className="text-3xl font-Grostek font-[500]">
                  {service.title}
                </h3>
                <p className="mt-2 font-Synonym text-lg font-[400]">
                  {service.description}
                </p>
                <div className="mt-3">
                  {service.details.map((detail, id) => (
                    <div
                      key={id}
                      className="flex bg-[#c5edff] text-blue-950 rounded-lg px-3 items-start gap-2 mt-2 py-2"
                    >
                      <div className="mt-[6px]">
                        <Circle weight="fill" />
                      </div>
                      <p
                        className={` rounded-lg font-sans font-[400]  text-lg `}
                      >
                        {detail}
                      </p>
                    </div>
                  ))}

                  {service.conclusion ? (
                    <p className="mt-3">{service.conclusion}</p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div ref={selfPrasiseContainer} className="w-full py-12 overflow-hidden">
        <div className="container ">
          <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
            {["Why", "Choose", "us?"].map((text, index) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 !text-purple-50">
            {selfPraise.map((item, index) => (
              <motion.div
                animate={{
                  x: boxInView ? "0%" : "100%",
                  y: boxInView ? "0%" : "70%",
                }}
                transition={{ duration: 1.5, ease: [0.175, 0.885, 0.32, 1] }}
                key={index}
                style={{ backgroundColor: item.color }}
                className=" text-slate-950 rounded-lg p-5"
              >
                <h2 className="text-3xl pr-10 capitalize font-SplineSans font-[500]">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg font-Grostek">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-20">
        <div>
          {" "}
          <motion.article className="container flex justify-center lg:justify-start items-center text-slate-950 gap-3">
            {["Our", "App", "Development", "Process"].map((text, index) => (
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
        <div ref={sliderRef} className="keen-slider mt-4">
          {processSteps.map((slide, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-fuchsia-100 p-7 rounded "
            >
              <p className="font-Synonym text-slate-700 font-[500]">
                0{index + 1}
              </p>
              <h2 className="text-2xl font-[600] text-fuchsia-950 font-SplineSans mb-2">
                {slide.title}
              </h2>
              <p className="text-gray-700 ">{slide.description}</p>
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
              Are You Ready to Grow Your Business Online?
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              We have a proven track record of helping businesses like yours
              grow online. We focus on a results-driven approach to generating
              real ROI.
            </p>

            <button className="mt-5 px-4 py-2 bg-white text-slate-900 font-SplineSans rounded-lg font-[400]">
              Get a Free consultation today!
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
