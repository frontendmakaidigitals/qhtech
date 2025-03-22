// This is the layout for the contact page
export const metadata = {
  title: "Social Media Marketing | Grow Your Brand with QhTech",
  description:
    "Boost engagement and drive results with QhTech’s social media marketing services. We create strategies for impactful brand growth. We have experts handling all the platforms. ",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function SocialMediaMarketing({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
