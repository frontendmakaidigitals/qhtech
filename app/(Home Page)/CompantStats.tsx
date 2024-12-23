'use client'
import React, {useRef} from "react";
import {useInView} from "framer-motion";
import NumberFlow from "@number-flow/react";
export const CompantStats = () => {
  const stats = [
    { data: 14, title: "worldwide awards" },
    { data: 22, title: "Yeards in Business" },
    { data: 10, title: "Happy clients" },
    { data: 1, title: "projects completed" },
  ];
  const ref= useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="w-full py-14">
      <div className="grid container grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col"
            >
              <div className="flex text-[#14062c] items-center gap-3">
                <NumberFlow
           
                  className="text-7xl  font-SplineSans font-[700]"
                  value={isInView ? stat.data : 0}
                />

                <p className="text-7xl font-SplineSans font-[500]">
                  {index === 3 && "K"}+
                </p>
              </div>
              <h1 className="text-lg font-bold text-gray-050">{stat.title}</h1>
            </div>
          ))}
        </div>
        <div className="h-full flex justify-center items-start flex-col">
          <p className="text-3xl font-SplineSans font-[500] text-start">
            The Region&apos;s Leading Luxury Digital Marketing Agency
          </p>
          <p className="text-3xl mt-2 font-Synonym text-start">
            Trusted by Hundered of Brands
          </p>
        </div>
      </div>
    </div>
  );
};
