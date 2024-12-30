"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";
export const CompantStats = () => {
  const stats = [
    { data: 14, title: "worldwide awards" },
    { data: 22, title: "Yeards in Business" },
    { data: 10, title: "Happy clients" },
    { data: 1, title: "projects completed" },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="w-full py-14 overflow-hidden bg-red-100">
      <div className="grid container grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col"
            >
              <div className="flex text-[#14062c] items-center gap-3">
                <NumberFlow
                  className="text-7xl  font-SplineSans font-[700]"
                  value={isInView ? stat.data : -5000}
                />

                <p className="text-7xl font-SplineSans font-[500]">
                  {index === 3 && "K"}+
                </p>
              </div>
              <h1 className="text-lg font-bold text-gray-950 capitalize">
                {stat.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="h-full flex mt-6 lg:mt-0 justify-center items-start flex-col">
          <p className="text-3xl font-SplineSans font-[500] text-center lg:text-start ">
            The Region&apos;s Leading Luxury Digital Marketing Agency
          </p>
          <p className="text-3xl mt-2 font-Synonym text-center lg:text-start">
            Trusted by Hundered of Brands
          </p>
        </div>
      </div>
    </div>
  );
};
