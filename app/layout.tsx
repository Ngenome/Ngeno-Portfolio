import {
  DM_Sans,
  JetBrains_Mono,
  Kodchasan,
  Rethink_Sans,
} from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Kelvin Ng'eno - Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer and AI Engineer specializing in web development, mobile apps, and artificial intelligence solutions.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Mobile App Developer",
    "Machine Learning Engineer",
    "Kenya",
    "Software Engineer",
  ].join(", "),
};

import localFont from "next/font/local";

// Preload fonts
const fontSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const kodchasan = Kodchasan({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-kodchasan",
});

const fontDisplay = localFont({
  src: "../public/fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={fontSans.style} lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={` ${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
