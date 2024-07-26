import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/layouts/NavBar/NavBar";
import "@/styles/global.css";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mirae hagwon",
  description: "Place to learn and grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NavBar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
