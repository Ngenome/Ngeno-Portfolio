import { DM_Sans } from "next/font/google";
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
// Preload fonts
const fontSans = DM_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={fontSans.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
