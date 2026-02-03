
import React from "react";
import "./globals.css";

// Metadata is typically handled by Next.js at build time. 
// In this environment, the title is already set in index.html.
export const metadata = {
  title: "Safari Embroidery Yarn | 24 Years of Global Excellence",
  description: "Premium industrial embroidery threads engineered for high-speed performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen font-sans">
      {children}
    </div>
  );
}
