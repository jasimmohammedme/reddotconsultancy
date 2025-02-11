import type { Metadata } from "next";
import "./globals.css";
import { sans, inter, outfit, questrial } from "./fonts";
import Loading from "@/components/loading";

export const metadata: Metadata = {
  title: "Red Dot Consultancy",
  description: "Red Dot Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${inter.variable} ${outfit.variable} ${questrial.variable} antialiased`}
      >
        <Loading>
          {children}
        </Loading>
      </body>
    </html>
  );
}
