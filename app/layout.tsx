import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./App chunks/components/Navbar";
import { ReactLenis } from "lenis/react"; // Import ReactLenis
import ToTop from "./App chunks/components/ToTop";
import Footer from "./App chunks/components/Footer";
import Template from "./Template";
import Loading from "./App chunks/components/Loader";
export const metadata: Metadata = {
  title: " Insight Vision | Result-Driven Marketing Agency in Dubai",
  description:
    "Elevate your brand with Insight Vision, a data-driven marketing agency specializing in SEO, PPC, social media, and content marketing. Get measurable results today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&f[]=synonym@200,300,400,500,600,700&f[]=spline-sans@300,400,500,600,700&f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body className={`antialiased`}>
        {/* Initialize Lenis Smooth Scrolling */}
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            smoothWheel: true,
            duration: 1.5,
          }}
        >
          <Loading />
          <div className="w-full relative">
            <NavBar />
          </div>
          <ToTop />
          <Template>{children}</Template>
          <Footer />
        </ReactLenis>

            {/* Google Analytics */}
        <script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LCZ9WDCSYP"
        />
        <script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LCZ9WDCSYP');
          `}
        </script>

      </body>
    </html>
  );
}
