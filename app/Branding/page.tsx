"use client";
import React from "react";
import {  motion } from "framer-motion";
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
      question: "What is branding, and why is it important?",
      answer:
        "Branding is the process of creating a unique identity for your business that reflects your values, mission, and vision. It includes elements like your logo, color palette, typography, and messaging. Strong branding helps differentiate your business in the market, builds trust with your audience, and drives customer loyalty.",
    },
    {
      question: "What is the difference between branding and logo design?",
      answer:
        "Logo design is a component of branding, but branding is much more comprehensive. A logo is the visual representation of your brand, but branding encompasses your entire business identity, including your brand's voice, values, messaging, and customer experience. Branding ensures consistency across all touchpoints, from your website to your marketing materials and customer interactions.",
    },
    {
      question: "How long does the branding process take?",
      answer:
        "The timeline for branding varies depending on the scope and complexity of the project. On average, a complete brand identity project (including logo design, brand guidelines, and collateral) can take anywhere from 4 to 8 weeks. We’ll work closely with you to set expectations and ensure a timeline that suits your needs.",
    },
    {
      question: "Can you help with a brand refresh or rebranding?",
      answer:
        "Yes, we specialize in both brand refreshes and complete rebranding projects. Whether you need a small update to your existing brand or a full rebranding to reposition your business in the market, we can help you navigate the process and create a fresh identity that better aligns with your goals.",
    },
    {
      question:
        "What’s the difference between brand identity and brand guidelines?",
      answer:
        "Brand identity refers to the visual elements and messaging that represent your brand, such as your logo, color scheme, typography, and overall aesthetic. Brand guidelines, on the other hand, are a set of rules and standards for how to use these elements consistently across all marketing materials, websites, and social media to ensure your brand is represented accurately.",
    },
  ];

  const designServices = [
    {
      service: "Logo Design",
      details: [
        {
          title: "Custom Logo Design",
          description:
            "We craft unique logos tailored to your brand’s personality and market.",
        },
        {
          title: "Brand Story Integration",
          description:
            "Our logos reflect the story behind your brand, incorporating meaningful elements and symbolism.",
        },
        {
          title: "Versatile & Scalable",
          description:
            "Our logos are designed to look great across all platforms—whether on a website, business card, or billboard.",
        },
        {
          title: "Rebranding",
          description:
            "If you're looking to update your current logo, we’ll work with you to refresh it while maintaining continuity and relevance.",
        },
      ],
    },
    {
      service: "Brand Identity Development",
      details: [
        {
          title: "Color Palette & Typography",
          description:
            "We create a consistent visual language using carefully selected colors and fonts that reflect your brand’s essence.",
        },
        {
          title: "Brand Voice & Messaging",
          description:
            "We ensure your brand's tone of voice and messaging align with its core values, guiding all communications.",
        },
        {
          title: "Imagery & Iconography",
          description:
            "We develop a visual style using custom graphics, patterns, and icons that communicate your brand’s uniqueness.",
        },
        {
          title: "Brand Guidelines",
          description:
            "We create a comprehensive brand guideline document to ensure your brand identity is consistent across all media and platforms.",
        },
      ],
    },
    {
      service: "Packaging Design",
      details: [
        {
          title: "Custom Packaging Designs",
          description:
            "We design product packaging that stands out on shelves while reflecting your brand’s identity.",
        },
        {
          title: "Sustainability",
          description:
            "We offer eco-friendly packaging options to help your brand align with sustainability goals while maintaining quality and style.",
        },
        {
          title: "Labels & Tags",
          description:
            "From informational labels to promotional tags, we create designs that engage customers and provide essential details in a visually appealing way.",
        },
        {
          title: "Retail Packaging",
          description:
            "We design packaging specifically for retail environments, ensuring it attracts attention and aligns with retail standards.",
        },
        {
          title: "3D Mockups",
          description:
            "We provide 3D packaging mockups so you can visualize how your packaging will look in real life before production.",
        },
      ],
    },
    {
      service: "Marketing Collateral Design",
      details: [
        {
          title: "Brochures & Flyers",
          description:
            "We design informative brochures and flyers that visually communicate your products or services, creating a lasting impression.",
        },
        {
          title: "Business Cards",
          description:
            "Our business card designs are carefully crafted to reflect your brand’s identity and make a lasting impact with every handshake.",
        },
        {
          title: "Posters & Banners",
          description:
            "Whether it’s for an event or a promotion, we design posters and banners that catch the eye and effectively communicate your message.",
        },
        {
          title: "Email Templates",
          description:
            "We create email templates that align with your brand’s design aesthetic while being optimized for readability and conversion.",
        },
        {
          title: "Presentation Decks",
          description:
            "We design professional PowerPoint or Google Slides presentations that are visually engaging and help convey your message clearly.",
        },
        {
          title: "Trade Show & Event Materials",
          description:
            "From trade show booths to promotional giveaways, we design materials that help elevate your brand presence at events and expos.",
        },
      ],
    },
    {
      service: "Brand Strategy Development",
      details: [
        {
          title: "Market Research & Analysis",
          description:
            "We conduct in-depth research to understand your market, competitors, and consumer behavior, which helps us develop a strategy that differentiates your brand.",
        },
        {
          title: "Target Audience Identification",
          description:
            "We help you identify and understand your target audience, ensuring all brand messaging is tailored to meet their needs and preferences.",
        },
        {
          title: "Positioning & Messaging",
          description:
            "We develop unique positioning strategies that help your brand stand out in the market, and create messaging frameworks to consistently communicate your value.",
        },
        {
          title: "Brand Architecture",
          description:
            "We design the structure of your brand’s various products and services, ensuring clarity and coherence across the entire brand portfolio.",
        },
      ],
    },
    {
      service: "Brand Naming",
      details: [
        {
          title: "Creative Brainstorming",
          description:
            "We engage in a comprehensive brainstorming process to create brand names that are catchy, meaningful, and market-appropriate.",
        },
        {
          title: "Domain Name Availability",
          description:
            "We ensure the name you choose is available as a domain, so your digital presence is consistent with your brand.",
        },
        {
          title: "Cultural & Linguistic Considerations",
          description:
            "Our team takes into account cultural relevance and potential linguistic issues, ensuring the name works globally if needed.",
        },
        {
          title: "Trademark & Legal Check",
          description:
            "We perform trademark checks to ensure your brand name is legally available and protected.",
        },
      ],
    },
    {
      service: "Content Creation & Copywriting",
      details: [
        {
          title: "Brand Storytelling",
          description:
            "We craft compelling narratives that communicate your brand’s history, values, and mission, connecting emotionally with your audience.",
        },
        {
          title: "Website Copywriting",
          description:
            "We write high-quality, SEO-friendly copy for your website that captures your brand’s voice while ensuring maximum search engine visibility.",
        },
        {
          title: "Ad Copywriting",
          description:
            "Whether it's for print, digital, or social media ads, our team creates copy that speaks directly to your audience and drives conversions.",
        },
        {
          title: "Blog & Article Writing",
          description:
            "We provide high-quality blog posts and articles to engage your audience and establish your brand as an industry leader.",
        },
      ],
    },
    {
      service: "Print Design & Materials",
      details: [
        {
          title: "Brochures & Catalogs",
          description:
            "We design visually appealing brochures and catalogs that provide valuable information about your products or services while reflecting your brand identity.",
        },
        {
          title: "Flyers & Posters",
          description:
            "Our flyers and posters are designed to capture attention, whether for an event, promotion, or new product launch, driving foot traffic and awareness.",
        },
        {
          title: "Stationery Design",
          description:
            "We create personalized stationery—letterheads, envelopes, business cards—that help maintain a professional and cohesive brand presence.",
        },
        {
          title: "Annual Reports & Corporate Materials",
          description:
            "We design annual reports, corporate brochures, and other important print materials that maintain a professional tone while showcasing your brand’s accomplishments.",
        },
      ],
    },
    {
      service: "Event Branding & Design",
      details: [
        {
          title: "Event Branding Strategy",
          description:
            "We design a full branding strategy for your event, ensuring everything from invitations to signage aligns with your overall brand identity.",
        },
        {
          title: "Booth Design",
          description:
            "We create engaging, on-brand trade show booths that attract visitors and encourage interaction, boosting your brand’s visibility.",
        },
        {
          title: "Signage & Banners",
          description:
            "We design impactful signage and banners that direct attendees while maintaining your brand’s messaging and aesthetics.",
        },
        {
          title: "Promotional Materials",
          description:
            "We design event-specific marketing materials like brochures, giveaways, and swag that carry your brand’s identity and leave a lasting impression.",
        },
      ],
    },
    {
      service: "Digital & Interactive Design",
      details: [
        {
          title: "Interactive Web Elements",
          description:
            "From animations to hover effects, we design engaging digital elements that enhance the user experience on your website.",
        },
        {
          title: "App Interface Design",
          description:
            "We design user-friendly interfaces for mobile apps and digital products that reflect your brand’s identity while providing an excellent user experience.",
        },
        {
          title: "Email Design",
          description:
            "We craft visually appealing email templates for newsletters, promotional campaigns, and transactional emails that maintain consistency with your brand and drive conversions.",
        },
        {
          title: "Digital Ads",
          description:
            "Our digital ad designs, including Google Ads, Facebook Ads, and banner ads, are created to grab attention and drive traffic while staying true to your brand.",
        },
      ],
    },
    {
      service: "Custom Illustrations & Iconography",
      details: [
        {
          title: "Unique Illustrations",
          description:
            "Whether for website elements, marketing materials, or product packaging, we create custom illustrations that reinforce your brand’s message and make it stand out.",
        },
        {
          title: "Icons & Graphics",
          description:
            "Our team designs a set of custom icons and graphics to represent your services, products, or concepts, enhancing your digital and print materials with a personal touch.",
        },
      ],
    },
  ];

  const para =
    "Great branding is about creating trust and forming lasting connections with customers";

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

      <div className="my-20">
        <motion.article className="flex container justify-center lg:justify-start items-center text-slate-950 gap-3">
          {["Our", "Branding", "and", "Design", "Services", "includes"].map(
            (text, index) => (
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
            )
          )}
        </motion.article>
        <div className="container grid grid-cols-1 mt-7 gap-6">
          {designServices.map((service, index) => (
            <div
              key={index}
              className=" p-6 bg-pruple bg-purple-50 rounded-lg"
            >
              <h2 className="text-2xl font-Grostek font-semibold text-gray-800 mb-4">
                {service.service}
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {service.details.map((detail, i) => (
                  <div key={i} className="p-3 rounded-lg bg-purple-100">
                    <h3 className="text-xl font-medium text-gray-700">
                      {detail.title}
                    </h3>
                    <p className="text-gray-600">{detail.description}</p>
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
              Let's Create Something Amazing Together
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              Ready to elevate your brand? Get in touch with us today and let’s
              start building a brand that connects, inspires, and delivers.
              Whether you're launching a new brand or rebranding your business,
              Insight Vision is here to help you shine.
            </p>

            <button className="mt-5 px-4 py-2 bg-white text-slate-900 font-SplineSans rounded-lg font-[400]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
