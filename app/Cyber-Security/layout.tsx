// This is the layout for the contact page
export const metadata = {
  title: "Cyber Security | Protect Your Business with Cyber Crimes",
  description:
    "Safeguard your digital assets with QhTech’s comprehensive cyber security services. We offer proactive solutions to protect your business from threats and vulnerabilities.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function CyberSecurity({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
