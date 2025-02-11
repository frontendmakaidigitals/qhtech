"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import Head from "next/head";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import {
  FacebookLogo,
  InstagramLogo,
  SealCheck,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Button from "../App chunks/components/Button";
import emailjs from "@emailjs/browser";
import Link from "next/link";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "", // Added fullName
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      updatedData.fullName =
        `${updatedData.firstName} ${updatedData.lastName}`.trim();
      return updatedData;
    });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const templateParams = {
        from_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      try {
        await emailjs.send(
          "service_k34vn0n", // Replace with your EmailJS service ID
          "template_0ao3rbn", // Replace with your EmailJS template ID
          templateParams,
          "dwtj2-cJpAOHH2pwy" // Replace with your EmailJS public key
        );

        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("FAILED...", error);
        alert("Failed to send the message, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Your Company</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries, support, or feedback. We are here to help you!"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <motion.div className=" bg-white" ref={containerRef}>
        <motion.div>
          <div className="w-full overflow-hidden relative">
            <div className="w-full  flex relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <BackgroundGradientAnimation
                  gradientBackgroundStart="#FFEAD3"
                  gradientBackgroundEnd="#FFEAD3"
                  firstColor="#FFCA8F"
                  secondColor="#FFCA8F"
                />
              </div>
              <div
                style={{ marginTop: `${height + 10}px` }}
                className="container py-10 relative z-[99] h-auto"
              >
                <BreadCrumb />
                <div className="mt-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <motion.article className="flex justify-center lg:justify-start items-center text-slate-950 gap-3">
                        {["Contact", "Us"].map((text, index) => (
                          <motion.h1
                            key={index}
                            transition={{
                              delay: index * 0.1,
                              duration: 0.7,
                              ease: [0.22, 0.61, 0.36, 1],
                            }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
                          >
                            {text}
                          </motion.h1>
                        ))}
                      </motion.article>
                      <p className="mt-3">
                        At Insight Vision, we&apos;re here to help you elevate
                        your brand and reach your business goals. Whether
                        you&apos;re looking for a marketing strategy or just
                        need expert advice, our team is ready to assist.
                        <br /> <br /> Have a project idea, or just want to
                        discuss how we can help you reach your marketing goals?
                        Drop us a message, and one of our team members will be
                        in touch shortly!
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        <h4 className="font-Grostek text-xl mt-5 font-bold ">
                          Talk to our team today to
                        </h4>
                        <motion.div
                          initial={{ y: 100 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="flex items-start gap-2 w-fit bg-white px-4 py-1 rounded-sm bg-opacity-60 backdrop-filter backdrop-blur-lg"
                        >
                          <div className="mt-1">
                            <SealCheck
                              weight="fill"
                              className="text-green-600"
                            />
                          </div>
                          <p className="font-Synonym font-[500]">
                            Understand more about pricing.
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ y: 100 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="flex items-start gap-2 w-fit bg-white px-4 py-1 rounded-sm bg-opacity-60 backdrop-filter backdrop-blur-lg"
                        >
                          <div className="mt-1">
                            <SealCheck
                              weight="fill"
                              className="text-green-600"
                            />
                          </div>
                          <p className="font-Synonym font-[500]">
                            Get a customized quote for your business.
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ y: 100 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="flex items-start gap-2 w-fit bg-white px-4 py-1 rounded-sm bg-opacity-60 backdrop-filter backdrop-blur-lg"
                        >
                          <div className="mt-1">
                            <SealCheck
                              weight="fill"
                              className="text-green-600"
                            />
                          </div>
                          <p className="font-Synonym font-[500]">
                            Discover the capabilities and get answer to you
                            questions.
                          </p>
                        </motion.div>
                      </div>
                      <div className="mt-5">
                        <h4 className="font-Grostek text-xl mt-5 font-bold ">
                          Stay Connected with us
                        </h4>
                        <div className="flex text-3xl mt-1 justify-start items-center gap-5">
                          <Link
                            href={
                              "https://www.facebook.com/share/1B8MhGwsoX/?mibextid=wwXIfr"
                            }
                          >
                            <FacebookLogo
                              weight="fill"
                              className="hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                            />
                          </Link>
                          <Link
                            href={
                              "https://www.instagram.com/insightvision.marketing?igsh=enp5bGcxc255MmJr"
                            }
                          >
                            <InstagramLogo
                              weight="fill"
                              className="hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                            />
                          </Link>
                          <Link
                            href={
                              "https://www.linkedin.com/company/insight-vision-marketing"
                            }
                          >
                            <LinkedinLogo
                              weight="fill"
                              className="hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <motion.div className="w-full p-5 grid rounded-lg grid-cols-1 gap-4 bg-white/60 ">
                        <p className="text-2xl font-SplineSans font-[500]">
                          Get in Touch
                        </p>
                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="w-full">
                            <label className="font-Grostek text-lg font-[500]">
                              First Name
                            </label>
                            <input
                              name="firstName"
                              value={formData.firstName}
                              placeholder="Enter First name"
                              onChange={handleChange}
                              className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md"
                            />
                            {errors.firstName && (
                              <p className="text-red-500 text-sm">
                                {errors.firstName}
                              </p>
                            )}
                          </div>
                          <div className="w-full">
                            <label className="font-Grostek text-lg font-[500]">
                              Last Name
                            </label>
                            <input
                              name="lastName"
                              value={formData.lastName}
                              placeholder="Enter Last name"
                              onChange={handleChange}
                              className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md"
                            />
                            {errors.lastName && (
                              <p className="text-red-500 text-sm">
                                {errors.lastName}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="w-full">
                            <label className="font-Grostek text-lg font-[500]">
                              Email
                            </label>
                            <input
                              name="email"
                              value={formData.email}
                              placeholder="Enter Email"
                              onChange={handleChange}
                              className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm">
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div className="w-full">
                            <label className="font-Grostek text-lg font-[500]">
                              Phone
                            </label>
                            <input
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter Phone"
                              type={"number"}
                              className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md"
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-sm">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="w-full">
                          <label className="font-Grostek text-lg font-[500] ">
                            Message
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter Message"
                            name="message"
                            className="w-full border border-slate-950 bg-transparent resize-none px-3 py-2 mt-1 h-40 rounded-md"
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm">
                              {errors.message}
                            </p>
                          )}
                        </div>
                        <div>
                        <Button
                    type="submit"
                    className="bg-indigo-300 active:shadow-none hover:bg-indigo-200 text-blue-950"
                    loading={isSubmitting}
                    loadingText="Submitting"
                  >
                    Submit
                  </Button>
                        </div>
                      </motion.div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Page;
