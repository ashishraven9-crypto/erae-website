import { Inter, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: 'swap',
});

const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: 'swap',
});

export const metadata = {
  title: "Eraé | Thoughtful Everyday Fashion",
  description: "Deliberate design is the foundation of your wardrobe. The SOLACE collection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
