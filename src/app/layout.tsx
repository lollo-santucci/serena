import type { Metadata } from "next";
import { interBold, manukaBold, messinaBold, messinaSemiBold, messinaLight } from '@/fonts';
import "./globals.css";

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
      <body className={`
        ${interBold.variable} ${manukaBold.variable} ${messinaBold.variable} ${messinaSemiBold.variable} ${messinaLight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
