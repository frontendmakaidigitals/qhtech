"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const BreadCrumb = () => {
  const path = usePathname();
  return (
    <div className="flex text-slate-300 font-SplineSans items-start gap-1">
      <Link href={"/"}>Home /</Link>
      <div>
        {path.split("/").map(
          (item, index) =>
            item !== "/" && (
              <p className="text-slate-50" key={index}>
                {item}
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
