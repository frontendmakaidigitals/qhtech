// This is the layout for the contact page
export const metadata = {
  title: "Branding & Designing | Create a Strong Identity with QhTech",
  description:
    "Craft a memorable brand with QhTech’s branding and design services. We create visually stunning logos, designs, and strategies that resonate with your target audience.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function Branding({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
