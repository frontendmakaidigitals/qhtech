// This is the layout for the contact page
export const metadata = {
    title: ' Web Development | Custom Websites & Scalable Solutions – Insight Vision',
    description: 'Build a fast, responsive, and scalable website with Insight Vision. Our expert web development team creates custom solutions to elevate your online presence.',
  };
  
  import { ReactNode } from 'react';

  interface ContactLayoutProps {
    children: ReactNode;
  }

  export default function ContactLayout({ children }: ContactLayoutProps) {
    return (
      <>
       {children}
      </>
    );
  }
  