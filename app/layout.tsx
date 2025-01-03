import type { Metadata } from "next";
import { Fira_Code, Fira_Mono } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanzala's Blog",
  description:
    "Hey there! This is where i share my thoughts. Hope you like it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${firaMono.variable} antialiased border-2 border-slate-800 m-2 rounded-md`}
      >
        {children}
        <footer>
          <p className="font-extralight text-center text-sm p-2">
            Copyright hanzala-waseem@proton.me
          </p>
        </footer>
      </body>
    </html>
  );
}
