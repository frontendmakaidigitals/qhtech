import React from "react";
import Link from "next/link";

const Logo = ({ className, source = '/Logo.png' }: { className?: string, source?: string }) => {
  console.log(source)
  return (
    <Link href="/">
      <div className={`w-[220px] text-slate-50 ${className}`}>
        <p className="text-3xl">QhTech</p>
      </div>
    </Link>
  );
};

export default Logo;
