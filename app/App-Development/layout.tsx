// This is the layout for the contact page
export const metadata = {
    title: ' App Development | Custom Mobile & Web Apps by Insight Vision',
    description: 'Transform your ideas into powerful mobile and web apps with Insight Vision. We design and develop custom, high-performance applications according to your business needs.',
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
  