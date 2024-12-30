"use client";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Form = () => {
  return (
    <div className=" w-full   font-Satoshi bg-purple-100 py-24 font-bold mb-[0px]">
      <div className="container h-full">
        <motion.article className="flex justify-center lg:justify-center items-center text-black gap-3">
          {["Give", "Us", "a", "Sign"].map((text, index) => (
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
              className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight"
            >
              {text}
            </motion.h1>
          ))}
        </motion.article>
        <div className="w-full h-full mt-5">
          <div className="w-full">
            <div className="w-full flex flex-col items-center justify-start gap-5">
              <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="w-full">
                  <label>First Name</label>
                  <input
                    placeholder="Enter First name"
                    className="w-full placeholder:text-gray-500 bg-slate-100  px-4 py-3   border border-slate-900 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <label>Last Name</label>
                  <input
                    placeholder="Enter Last name"
                    className="w-full placeholder:text-gray-500 bg-slate-100  px-4 py-3   border border-slate-900 rounded-md"
                  />
                </div>
              </div>

              <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="w-full">
                  <label>Email</label>
                  <input
                    placeholder="Enter Email"
                    className="w-full placeholder:text-gray-500 bg-slate-100  px-4 py-3   border border-slate-900 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <label>Phone</label>
                  <input
                    placeholder="Enter Phone"
                    className="w-full placeholder:text-gray-500 bg-slate-100  px-4 py-3   border border-slate-900 rounded-md"
                  />
                </div>
              </div>
              <div className="w-full">
                <label>Message</label>
                <textarea
                  placeholder="Enter Message"
                  className="w-full h-40 px-4 placeholder:text-gray-500  py-3 resize-none bg-slate-100 border border-slate-900 rounded-md"
                />
              </div>
            </div>

            <div className="mt-5">
              <Button
                className="bg-indigo-300 active:shadow-none hover:bg-indigo-200 text-blue-950"
                loading={false}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
