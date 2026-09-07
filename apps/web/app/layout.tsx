import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مجموعة لوغاريتم القابضة | Logarithm Holding Group",
  description: "منظومة استثمارية سيادية تقود الابتكار في الذكاء الاصطناعي، العقارات الذكية، التسويق الخوارزمي، واللوجستيات.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <body className="bg-[#060813] text-slate-100 antialiased selection:bg-[#00F2FE] selection:text-black">
        {children}
      </body>
    </html>
  );
}