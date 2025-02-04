// This is the layout for the contact page
export const metadata = {
    title: 'Content Marketing | Engage & Convert Your Channels with Insight Vision',
    description: 'Elevate your brand with Insight Vision’s content marketing services. We create compelling, SEO-optimized content that drives traffic, engagement, and conversions. We create content for each platform in different formats.  ',
  };
  
  import { ReactNode } from 'react';

  interface ContactLayoutProps {
    children: ReactNode;
  }

  export default function ContentMarketing({ children }: ContactLayoutProps) {
    return (
      <>
       {children}
      </>
    );
  }
  