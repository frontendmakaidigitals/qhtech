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
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term investment. While some improvements can be seen within the first few months, significant results often take 6-12 months, depending on your industry, competition, and strategy.",
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer:
        "On-page SEO involves optimizing elements on your website, such as content, meta tags, and internal links. Off-page SEO focuses on external factors like backlinks and social signals that influence your site’s authority.",
    },
    {
      question: "What are keywords and why are they important?",
      answer:
        "Keywords are terms people search for online. Targeting the right keywords ensures your website attracts relevant traffic and meets the needs of your audience.",
    },
    {
      question: "How do you measure the success of an SEO campaign?",
      answer:
        "Success is measured through key performance indicators (KPIs) such as organic traffic, keyword rankings, conversion rates, and ROI. We provide detailed reports to track your progress.",
    },
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It drives organic traffic, increases visibility, and enhances user experience, ultimately boosting conversions and revenue.",
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
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your visibility on search engines like Google and Bing. Our comprehensive SEO services include:",
      services: [
        {
          category: "Keyword Research and Optimization",
          details: [
            "Keyword Identification: We identify the most relevant and high-performing keywords for your business by analyzing search trends, competitor strategies, and customer behavior.",
            "Search Intent Analysis: Understanding user intent is key to delivering the right content. We categorize keywords into informational, navigational, transactional, and commercial categories.",
            "Long-Tail Keyword Integration: By incorporating niche-specific, long-tail keywords, we help your site rank for less competitive and highly targeted search terms.",
            "Regular Updates: Search trends evolve, and so do we. We continuously refine your keyword strategy based on real-time data and algorithm updates.",
          ],
        },
        {
          category: "Technical SEO Audits",
          details: [
            "Site Crawls and Error Resolution: We conduct in-depth audits to identify and fix crawl errors, broken links, and site architecture issues.",
            "Performance Optimization: Enhance website speed, mobile usability, and overall user experience to meet search engine standards.",
            "Structured Data Implementation: Add schema markup to improve search engine understanding and boost rich snippet visibility.",
            "Indexing and Accessibility: Ensure that all vital pages are indexed properly and accessible to search engines.",
          ],
        },
        {
          category: "On-Page and Off-Page Optimization",
          details: [
            "On-Page: Optimize meta tags, headers, images, and internal linking for better relevance and readability.",
            "Off-Page: Build high-quality backlinks through outreach, partnerships, and guest blogging to boost your domain authority.",
            "Competitor Analysis: Identify and replicate winning strategies from your industry peers.",
          ],
        },
        {
          category: "Content Creation and Optimization",
          details: [
            "SEO-Friendly Content: Create high-quality, keyword-optimized content tailored to your audience.",
            "Content Refresh: Update existing content to keep it relevant and improve its ranking potential.",
            "Multimedia Integration: Enhance user engagement with videos, infographics, and interactive elements.",
            "Topic Clusters: Organize your content into strategic clusters to signal authority on specific subjects.",
          ],
        },
        {
          category: "Local SEO Strategies",
          details: [
            "Google My Business Optimization: Ensure your business appears prominently in local search results with a fully optimized GMB profile.",
            "Local Listings Management: Maintain consistency across all local directories and citations.",
            "Geo-Targeted Keywords: Use location-specific keywords to attract customers in your service area.",
            "Reviews and Ratings: Encourage and manage customer reviews to build trust and credibility.",
          ],
        },
      ],
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Get immediate results with targeted PPC campaigns. We help you:",
      services: [
        {
          category: "Set Up and Manage Google Ads",
          details: [
            "Account Setup: We establish and configure your Google Ads account, tailoring it to your business objectives.",
            "Campaign Creation: Design campaigns with clear goals, such as increasing website traffic, lead generation, or brand awareness.",
            "Ad Group Structuring: Create tightly themed ad groups for optimal relevance and performance.",
            "Bid Management: Implement strategic bidding tactics to maximize results within your budget.",
          ],
        },
        {
          category: "Optimize Ad Spend for Maximum ROI",
          details: [
            "Performance Monitoring: Track campaign performance through analytics to identify opportunities for improvement.",
            "Budget Allocation: Focus ad spend on the highest-performing campaigns and keywords.",
            "A/B Testing: Test multiple ad variations to identify the most effective copy, visuals, and CTAs.",
            "Negative Keyword Lists: Eliminate irrelevant clicks by refining your negative keyword strategy.",
          ],
        },
        {
          category: "Craft Compelling Ad Copy and Visuals",
          details: [
            "Engaging Headlines: Write attention-grabbing headlines that align with user intent.",
            "Persuasive Descriptions: Highlight unique selling points and include strong calls to action.",
            "Visual Appeal: Design high-quality, visually appealing banners and images that resonate with your target audience.",
            "Ad Extensions: Enhance ads with extensions like site links, callouts, and structured snippets to increase click-through rates.",
          ],
        },
      ],
    },
  ];

  const para =
    "Welcome to Insight Vision - Elevate Your Online Presence through SEO ";
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
                style={{ height: `calc(100vh - ${height + 100}px)` }}
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
        <div className="container grid grid-cols-1 mt-7 gap-4 lg:grid-cols-1">
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

                <div className="">
                  {service.services.map((detail, id) => (
                    <div key={id} className="mt-6">
                      <p className="font-Synonym text-lg font-[500]">
                        {detail.category}
                      </p>
                      <div className="grid grid-cols-2 gap-5">
                        {detail.details.map((item, i) => (
                          <div
                            key={i}
                            className="flex  bg-[#c5edff] text-blue-950 rounded-lg px-3 items-start gap-2 mt-2 py-2"
                          >
                            <p
                              className={` rounded-lg font-sans font-[400]  text-lg `}
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
              Let’s Grow Your Business Together
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              Ready to take your digital marketing to the next level? Partner
              with Insight Vision and watch your business soar. Contact us today
              for a free consultation!
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
