import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ai単語",
  description: "ai単語は、複数の英単語から、文章を作成できる単語帳です。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-background text-base text-black">{children}</body>
    </html>
  );
}
