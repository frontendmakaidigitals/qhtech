// This is the layout for the contact page
export const metadata = {
  title: "Public Relations | Build Your Brand Reputation with QhTech",
  description:
    "Strengthen your brand`s presence with QhTech`s public relations expertise. Our strategic PR services help shape your narrative, build media relationships, and boost brand visibility.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function Photography({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
