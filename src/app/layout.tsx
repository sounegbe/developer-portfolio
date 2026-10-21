import type { Metadata } from "next";
import AnimatedBackground from "@/components/animated-background";
import CustomCursor from "@/components/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sounegbe | AI Engineer",
  description: "AI engineering projects, technical skills, and software development journey.",
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
