import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sounegbe | AI Engineer",
  description: "AI engineering projects, technical skills, and software development journey.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
