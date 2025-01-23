"use client";
import React, { useEffect } from "react";
import { X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
interface SliderFormProps {
  isFormOpen: boolean;
  setIsFormOpen: (isOpen: boolean) => void;
}
import { useLenis } from "lenis/react";
const SliderForm: React.FC<SliderFormProps> = ({
  isFormOpen,
  setIsFormOpen,
}) => {
  const lenis = useLenis();
  useEffect(() => {
    if (isFormOpen === true) {
      document.body.style.overflow = "hidden";
      (
        document.getElementsByClassName("HeadNavigation")[0] as HTMLElement
      ).style.zIndex = "-99";
      lenis?.stop();
    } else {
      document.body.style.overflow = "auto";
      (
        document.getElementsByClassName("HeadNavigation")[0] as HTMLElement
      ).style.zIndex = "99999";

      lenis?.start();
    }

    // Optional cleanup to reset the styles when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
      (
        document.getElementsByClassName("HeadNavigation")[0] as HTMLElement
      ).style.zIndex = "initial";
    };
  }, [isFormOpen]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isFormOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.7 }}
            className="fixed z-[999999999999] flex px-2 justify-center lg:justify-end items-center top-0 left-0 w-screen h-screen
             bg-slate-50/30"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.7 }}
              className="w-[500px] p-6 bg-slate-50 rounded-lg"
            >
              <div className="flex justify-end text-slate-950">
                <button
                  className="flex px-4 py-2 transition-colors duration-300 hover:bg-red-300 rounded-full items-center gap-2"
                  onClick={() => setIsFormOpen(false)}
                >
                  Close <X />
                </button>
              </div>

              <h2 className="text-4xl font-Synonym font-[500] ">
                Have a Question?
              </h2>
              <p className="font-SplineSans font-[300] mt-1 text-slate-800">
                Contact us today to see how we can help you find the right
                solution fro your financial needs.
              </p>

              <form className="grid grid-cols-1 gap-4 mt-5">
                <div className="w-full">
                  <label>Full Name</label>
                  <input
                    placeholder="Enter your full name"
                    className="w-full font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3 "
                  />
                </div>
                <div className="w-full">
                  <label>Contact Number</label>
                  <input
                    placeholder="Enter Contact number"
                    className="w-full font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3 "
                  />
                </div>
                <div className="w-full">
                  <label>Email</label>
                  <input
                    placeholder="Enter your email"
                    className="w-full font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3 "
                  />
                </div>
                <div className="w-full">
                  <label>What service would you like help with?</label>
                  <textarea
                    placeholder="Enter your message"
                    className="w-full resize-none h-32 font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3 "
                  />
                </div>
                <div className="w-full flex justify-start  ">
                  <button className="px-5 py-2 bg-black text-slate-50 rounded-full">
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default SliderForm;
