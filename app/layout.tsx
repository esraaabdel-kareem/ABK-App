import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "ABK CONSULTANTS",
  description:
    "ABK CONSULTANTS — Architectural consulting firm in Egypt specializing in architectural design and supervision.",
  keywords: [
    "Architecture",
    "Consulting",
    "Architectural Design",
    "Supervision",
    "Egypt",
    "Engineering",
    "ABK Consultants",
  ],

  icons: {
    icon: "/Logo.ico",
  },
  authors: [
    { name: "ABK CONSULTANTS", url: "https://abk-consultants.com" },  
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="text-foreground min-h-screen flex flex-col"
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
