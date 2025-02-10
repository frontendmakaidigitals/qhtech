// This is the layout for the contact page
export const metadata = {
    title: 'Photography & Videography | Capture Your Brand’s Story with Insight Vision',
    description: 'Bring your brand to life with Insight Vision’s professional photography and videography services. We create stunning visuals that tell your story and engage your audience.',
  };
  
  import { ReactNode } from 'react';

  interface ContactLayoutProps {
    children: ReactNode;
  }

  export default function Photography({ children }: ContactLayoutProps) {
    return (
      <>
       {children}
      </>
    );
  }
  