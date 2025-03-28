import React from "react";
import Link from "next/link";

const Logo = ({
  className,
  source = "/Logo.png",
}: {
  className?: string;
  source?: string;
}) => {
  console.log(source);
  return (
    <Link href="/">
      <div className={`w-[220px] ${className}`}>
        <img src={source} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
