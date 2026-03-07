import type { Metadata } from "next";
import { Exo_2, Montserrat } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: "variable",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "variable",
});


export const metadata: Metadata = {
  title: "Auto Engine",
  description: "This is a car dealership website, where you can find the best cars and prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
