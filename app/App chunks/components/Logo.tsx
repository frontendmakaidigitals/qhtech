import React from "react";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <div className={`w-[220px] ${className}`}>
        <img src={"/Logo.png"} />
      </div>
    </Link>
  );
};

export default Logo;
