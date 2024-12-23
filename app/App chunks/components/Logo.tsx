import React from "react";
import Link from "next/link";
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <p
        className={`text-3xl inline-block tracking-tight font-Synonym font-semibold text-slate-50 ${className}`}
      >
        Insight Vision
      </p>
    </Link>
  );
};

export default Logo;
