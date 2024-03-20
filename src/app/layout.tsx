import type { Metadata } from "next";
import { Noto_Sans_KR, Figtree } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "./auth/SupabaseProvider";

const fontKR = Noto_Sans_KR({ subsets: ["latin"] });
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharediary",
  description: "share your day!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${font.className} ${fontKR.className}`}>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}