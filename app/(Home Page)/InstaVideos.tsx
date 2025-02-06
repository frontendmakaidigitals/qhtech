'use client';
import React, { useEffect } from "react";

// Declare the instgrm property on the window object
declare global {
  interface Window {
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };  
  }
}

const InstaVideos = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Instagram embeds after the script loads
    script.onload = () => {
      window.instgrm.Embeds.process();
    };

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container grid grid-cols-2 grid-rows-2 place-items-top gap-5 py-14">
      {/* Instagram Video 1 */}
      <div className="instagram-video-container">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DEh7qm5NXxE/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            width: '100%',
        // Set a fixed height
          }}
        ></blockquote>
      </div>

      {/* Instagram Video 2 */}
      <div className="instagram-video-container">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DEz039YS10K/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            width: '100%',
        // Set a fixed height
          }}
        ></blockquote>
      </div>

      {/* Instagram Video 3 */}
      <div className="instagram-video-container">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DE7fK8xyPJ2/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            width: '100%',
        // Set a fixed height
          }}
        ></blockquote>
      </div>

      {/* Instagram Video 4 */}
      <div className="instagram-video-container">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DE-JjZ9yb-r/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            width: '100%',
        
          }}
        ></blockquote>
      </div>
    </div>
  );
};

export default InstaVideos;
