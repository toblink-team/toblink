import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toblink — اول بپوش بعد بخر",
  description: "Toblink — کشف استایل، پرو با هوش مصنوعی و خرید از فروشگاه واقعی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
