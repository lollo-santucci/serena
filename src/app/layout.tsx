import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manukaBold = localFont({
  src: "../../public/fonts/Manuka-Bold.woff2",
  variable: "--font-manuka-bold",
});
const messinaBold = localFont({
  src: "../../public/fonts/MessinaSans-Bold.woff2",
  variable: "--font-messina-bold",
});
const messinaSemiBold = localFont({
  src: "../../public/fonts/MessinaSans-SemiBold.woff2",
  variable: "--font-messina-semi-bold",
});
const messinaLight = localFont({
  src: "../../public/fonts/MessinaSans-Light.woff2",
  variable: "--font-messina-light",
});

export const metadata: Metadata = {
  title: "Serena",
  description: "Blog di ricette provette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manukaBold.variable} ${messinaBold.variable} ${messinaSemiBold.variable} ${messinaLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
