"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/toaster-provider";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <Provider store={store}>{children}</Provider>
          <Toaster />
        </body>
      </html>
  );
}
