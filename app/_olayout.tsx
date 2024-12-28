import "./globals.css";
import { Inter } from "next/font/google";
import PortfolioMetaTags from "@/components/Metatags";

const inter = Inter({ subsets: ["latin"] });
const url = "https://ngeno-kelvin.vercel.app";
export const metadata = {
  title: "Kelvin Ngeno",
  meta: [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    {
      name: "description",
      content:
        "Kelvin Ng'eno is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch.",
    },
    {
      name: "keywords",
      content:
        "Kelvin Ng'eno, software engineer, portfolio, web development, full stack development",
    },
    { name: "author", content: "Kelvin Ng'eno" },
    {
      property: "og:title",
      content: "Kelvin Ng'eno - Software Engineer Portfolio",
    },
    {
      property: "og:description",
      content:
        "Kelvin Ng'eno is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch.",
    },
    {
      property: "og:image",
      content: `${url}/kelvin.jpg`,
    },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Kelvin Ng'eno - Software Engineer Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Kelvin Ng'eno is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch.",
    },
    {
      name: "twitter:image",
      content: `${url}/kelvin.jpg`,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Kelvin Ng'eno is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch."
        />
        <meta
          name="keywords"
          content="Kelvin Ng'eno, software engineer, portfolio, web development, full stack development"
        />
        <meta name="author" content="Kelvin Ng'eno" />
        <meta
          property="og:title"
          content="Kelvin Ng'eno - Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Kelvin Ng'eno is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/path/to/your/image.jpg"
        />
        <meta property="og:url" content="https://ngeno-kelvin.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kelvin Ng'eno - Software Engineer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Kelvin Ng'eno is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch."
        />
        <meta name="twitter:image" content={`${url}/kelvin.jpg`} />
        <title>Kelvin Ng&apos;eno - Software Engineer Portfolio</title>
        {/* logo */}
        <link rel="icon" href="/kelvin.jpg" />
      </head>

      <body className={""}>{children}</body>
    </html>
  );
}
