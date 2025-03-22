// This is the layout for the contact page
export const metadata = {
  title: " Performance Marketing | Drive Results with QhTech",
  description:
    " Achieve measurable growth with QhTech’s performance marketing services. We create data-driven strategies that focus on optimizing conversions, leads, and ROI.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function PerformanceMarketing({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
