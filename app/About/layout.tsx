// This is the layout for the contact page
export const metadata = {
  title: "Our Team | QhTech – Your Marketing Partner",
  description:
    "Discover QhTech, a marketing agency dedicated to driving business growth through innovative strategies, data-driven insights, and impactful digital solutions.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
