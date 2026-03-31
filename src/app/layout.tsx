import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venturabuilders.com"),
  title: "Ventura Builders Group | Design. Build. Remodel. | Cincinnati, OH",
  description:
    "Ventura Builders Group is a Cincinnati-based residential and commercial building company specializing in custom design, construction, remodeling, and investment properties.",
  keywords:
    "Cincinnati builders, residential construction, commercial construction, home remodel, investment properties, Pete Ventura, Miranda Ventura",
  icons: {
    icon: "/favicon.png",
    apple: "/vbg-logo.png",
  },
  openGraph: {
    title: "Ventura Builders Group",
    description: "Design. Build. Remodel. Cincinnati-based builders.",
    images: [{ url: "/vbg-logo.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
