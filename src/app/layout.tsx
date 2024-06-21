import type { Metadata } from "next";
import { Inter, Kelly_Slab } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'


const univers = localFont({
  src: [
    {
      path: '../../public/fonts/UniversExtendedBQ-Black.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Univers LT 73 Black Extended Oblique.ttf',
      weight: '400'
    }
  ],
  variable: '--font-univers'
})


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
    <html lang="en" className={`${univers.variable} font-sans`}>
      <body className={`${inter.variable} ${kelly.variable}`}>{children}</body>
    </html>
  );
}
