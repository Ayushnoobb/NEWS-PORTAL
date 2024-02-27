import { khand, mukta } from "@/assets/fonts";

export const metadata = {
  title: "Abhiral News",
  description: "By Udip Rai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/logo_small.png" type="image/png" />
      </head>
      <body className={`${khand.variable} ${mukta.variable}`}>{children}</body>
    </html>
  );
}
