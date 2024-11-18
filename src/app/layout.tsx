import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import ScrollToTopButton from "./components/scroll-to-top/ScrollToTop";
import WhatsApp from "./components/whats-app/WhatsApp";
import ActionButton from "./components/ActionButton/ActionButton";

export const metadata: Metadata = {
  title: "Kaushalya Genius Kid Program - Raise a Genius Kid with Scientifically Proven Methods",
  description: "Generated by create next app",
  icons: "/KGK logo SVG (2).svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        {/* <ScrollToTopButton />
        <ActionButton />
        <WhatsApp /> */}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
