import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterProvider  from "@/lib/ToasterProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban Home City",
  description: "Experience premier interior services in Bengaluru, where expert designers craft personalized spaces that blend style and functionality. From residential makeovers to commercial renovations, our bespoke solutions transform your environment into a stunning and practical masterpiece. Discover the best in interior design with us in Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        </head>
        <body className={inter.className}>
        <ToasterProvider/>
          <Navbar/>
          {children}
          <Footer/>
          
        </body>
       
      </html>
    </ClerkProvider>  
  );
}
