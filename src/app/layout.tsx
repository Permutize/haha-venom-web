import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mau Coin",
  description:
    "Welcome to MAU, a unique meme coin that fuses the fandom of felines with the unpredictable thrill of the crypto world. Our coin, inspired by the captivating charm of Egyptian Mau and Arabian Mau cats, is all set to make a grand impact in the Venom chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
