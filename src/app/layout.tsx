import type { Metadata } from "next";
import { Inter, Kelly_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const kelly = Kelly_Slab({ subsets: ['latin'], weight: ['400'], variable: '--font-kelly-slab', });

export const metadata: Metadata = {
  title: "SFL",
  description: "We Do it All.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kelly.variable}`}>{children}</body>
    </html>
  );
}
