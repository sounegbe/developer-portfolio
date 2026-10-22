import type { Metadata } from "next";
import AnimatedBackground from "@/components/animated-background";
import CustomCursor from "@/components/custom-cursor";
import "./globals.css";

const siteUrl = "https://developer-portfolio-nine-swart-22.vercel.app";
const title = "Sounegbe | AI Engineer";
const description =
  "Explore Sounegbe's AI engineering portfolio: NOVA AI research, Football Pulse AI Studio, and community technology projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Sounegbe Portfolio",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sounegbe Portfolio",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
