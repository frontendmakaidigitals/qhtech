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
      question: "Do you provide video and photo editing services?",
      answer:
        "Yes! All of our photography and videography services include professional editing. For photos, this may involve color correction, retouching, cropping, and background removal. For videos, it includes cutting, transitions, sound editing, color grading, and adding any necessary effects or graphics.",
    },
    {
      question:
        "Can I request specific styles or themes for my photos or videos?",
      answer:
        "Absolutely! We work closely with you to understand your vision, brand, and desired aesthetic.",
    },
    {
      question: "Do you provide drone services for video or photography?",
      answer:
        "Yes! We offer professional drone services for both photography and videography.",
    },
    {
      question: "Do you offer services for businesses with small budgets?",
      answer:
        "Yes, we understand that every business has different needs and budgets. We offer flexible packages that can be tailored to suit various budgets without compromising on quality.",
    },
    {
      question: "Will you provide a consultation before the shoot?",
      answer:
        "Yes! Before every shoot, we offer a consultation to discuss your objectives, the look and feel you want to achieve, and any specific details you want to include.",
    },
  ];
  

  const services = [
    {
      category: "Photography",
      description:
        "At Insight Vision, we understand that photography is not just about taking pictures—it’s about capturing the essence of your brand and delivering a powerful visual narrative.",
      subcategories: [
        {
          type: "Product Photography",
          description:
            "Essential for showcasing your products in the best possible light, highlighting every detail with crisp, high-quality images.",
          services: [
            "Studio Product Photography: Advanced lighting setups and backdrops for sharp, clean images.",
            "Creative & Artistic Product Photography: Unique techniques and props for visually appealing compositions.",
            "360-Degree Product Photography: Interactive, high-quality shots from every angle.",
            "Lifestyle Product Photography: Real-world settings that show products in everyday use.",
          ],
        },
        {
          type: "Brand Photography",
          description:
            "Tells the story of your brand through curated photo sessions that reflect your brand's personality and values.",
          services: [
            "Branding & Identity Photography: Captures the essence of your brand through storytelling.",
            "Employee & Team Portraits: Professional portraits showcasing your team and company culture.",
            "Lifestyle Branding Shots: Depict products/services in real-life settings, emphasizing interaction.",
          ],
        },
        {
          type: "Event Photography",
          description:
            "Captures important moments from corporate events, weddings, and other celebrations with precision and creativity.",
          services: [
            "Corporate Events: Professional documentation of conferences, product launches, and team events.",
            "Conferences & Trade Shows: Dynamic photos of presentations, booths, and interactions.",
            "Weddings & Celebrations: Candid, relaxed photography capturing natural moments.",
          ],
        },
        {
          type: "Lifestyle Photography",
          description:
            "Authentic, relatable images that connect with audiences on a personal level.",
          services: [
            "Editorial & Lifestyle Campaigns: Storytelling photos for magazines and campaigns.",
            "Social Media Content: Visually appealing lifestyle images for social platforms.",
            "Product Integration: Everyday scenarios showcasing products in use.",
          ],
        },
        {
          type: "Real Estate Photography",
          description:
            "High-quality images highlighting the best features of properties to attract buyers or renters.",
          services: [
            "Residential & Commercial Real Estate: Wide-angle shots and architectural details.",
            "Aerial & Drone Photography: Breathtaking aerial views showcasing properties.",
            "Virtual Staging & Editing: Enhance listings with virtual staging and editing.",
          ],
        },
        {
          type: "Headshot Photography",
          description:
            "High-quality headshots for professional and personal branding.",
          services: [
            "Corporate Headshots: Reflect professionalism for corporate teams.",
            "Creative Headshots: Personalized sessions for creatives, models, and actors.",
          ],
        },
        {
          type: "Fashion & Editorial Photography",
          description:
            "Visually compelling images for fashion brands, magazines, and models.",
          services: [
            "Fashion Campaigns: High-fashion and catalog shots that tell a story.",
            "Editorial Photoshoots: High-impact images for magazines and promotional materials.",
          ],
        },
      ],
    },
    {
      category: "Videography",
      description:
        "Video is one of the most powerful storytelling tools, designed to deliver impactful, high-quality visual content that resonates with audiences.",
      subcategories: [
        {
          type: "Corporate & Brand Videos",
          description:
            "Communicate your company’s mission, vision, and values through professional brand videos.",
          services: [
            "Brand Storytelling: Showcase your brand's history and unique selling points.",
            "Corporate Introduction Videos: Present your company to clients and partners.",
            "Company Culture Videos: Highlight workplace environment and team personality.",
          ],
        },
        {
          type: "Promotional Videos",
          description:
            "Visually captivating videos designed to inform, inspire, and call viewers to action.",
          services: [
            "Product Launch Videos: Introduce new products with dynamic content.",
            "Social Media Video Ads: Eye-catching ads for Instagram, Facebook, TikTok, and more.",
            "Campaign Videos: Enhance marketing efforts with powerful visuals.",
          ],
        },
        {
          type: "Event Videography",
          description:
            "High-quality documentation of corporate events, weddings, and celebrations.",
          services: [
            "Corporate Events: Capture conferences, seminars, and trade shows.",
            "Conferences & Webinars: Document key sessions and presentations.",
            "Weddings & Celebrations: Cinematic videos documenting emotional highlights.",
          ],
        },
        {
          type: "Social Media & Digital Content",
          description:
            "High-quality videos optimized for social platforms to boost engagement.",
          services: [
            "Short-Form Videos: Content for Instagram Reels, TikTok, and more.",
            "Branded Content: High-quality videos that integrate your message seamlessly.",
            "Testimonial & User-Generated Content: Build trust with customer testimonials and reviews.",
          ],
        },
        {
          type: "Explainer Videos",
          description:
            "Simplify complex ideas or demonstrate products/services with engaging videos.",
          services: [
            "Product Demonstration Videos: Highlight product features and benefits.",
            "Service Explainers: Brief videos explaining your services.",
            "Animated Explainers: Visually compelling animations for complex subjects.",
          ],
        },
        {
          type: "Music Videos",
          description:
            "Visually striking videos for artists, musicians, and bands.",
          services: [
            "Cinematic Music Videos: High-quality visuals that match the tone of your song.",
            "Performance & Concept Videos: Tailored video styles for your artistic vision.",
          ],
        },
        {
          type: "Drone Videography",
          description:
            "Stunning aerial shots using drone technology for unique perspectives.",
          services: [
            "Aerial Property & Real Estate Videos: Showcase properties with sweeping aerial views.",
            "Event Coverage: Capture outdoor events from a bird’s-eye view.",
            "Landscape & Nature Footage: Wide-angle shots for tourism and outdoor brands.",
          ],
        },
      ],
    },
  ];

  

  const para = "Transform Your Vision Into Powerful Mobile & Web Application";
  
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
        <div className="p-6 bg-gray-50">
          {services.map((category, index) => (
            <div key={index} className="mb-8">
              {/* Category */}
              <h2 className="text-2xl font-bold text-gray-800">
                {category.category}
              </h2>
              <p className="text-gray-600 mt-2">{category.description}</p>

              {/* Subcategories */}
              <div className="mt-6">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div
                    key={subIndex}
                    className="mb-6 border-t border-gray-300 pt-4"
                  >
                    {/* Subcategory Title */}
                    <h3 className="text-xl font-semibold text-gray-700">
                      {subcategory.type}
                    </h3>
                    <p className="text-gray-500 mt-2">
                      {subcategory.description}
                    </p>

                    {/* List of Services */}
                    <ul className="mt-4 list-disc list-inside space-y-2">
                      {subcategory.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-gray-600">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
              Let’s Bring Your Vision to Life
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              Ready to elevate your brand with professional photography and
              videography? Contact us today to discuss how we can create custom
              content that will engage, inspire, and connect with your target
              audience.
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
