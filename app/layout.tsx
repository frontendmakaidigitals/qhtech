import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./App chunks/components/Navbar";
import { ReactLenis } from "lenis/react"; // Import ReactLenis
import ToTop from "./App chunks/components/ToTop";
import Footer from "./App chunks/components/Footer";
import Template from "./Template";
import Loading from "./App chunks/components/Loader";
export const metadata: Metadata = {
  title: "Insight Vision",
  description: "A Digital Marketing Company",
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
          <div
            className="relative h-screen lg:h-[90vh]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div className="relative h-[calc(100vh+100vh)] lg:h-[calc(100vh+80vh)] -top-[100vh] lg:-top-[90vh]">
              <div className="h-screen lg:h-[90vh] sticky top-[calc(100vh-100vh)] lg:top-[calc(100vh-90vh)]">
                <Footer />
              </div>
            </div>
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
