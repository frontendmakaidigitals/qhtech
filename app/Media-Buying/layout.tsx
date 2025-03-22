// This is the layout for the contact page
export const metadata = {
  title: "Media Buying | Maximize ROI with QhTech’s Ad Strategies",
  description:
    "Get the best ad placements at the right price with QhTech’s media buying services. We optimize campaigns to ensure maximum reach, engagement, and ROI.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function MediaBuying({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
