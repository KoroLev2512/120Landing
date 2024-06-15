import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  metadataBase: new URL("https://120-landing.vercel.app"),
  title: "120 BLOCK",
  keywords: ["120 block", "120", "ton", "telegram"],
  themeColor: "#22A6F5",
  description:
    "120 is a brand, inspired by street culture, but open to all forms of creativity. ",
  openGraph: {
    siteName: "120 BLOCK",
    title: "120 BLOCK",
    url: "https://120-landing.vercel.app",
    images: [{ url: "https://120-landing.vercel.app/assets/images/og_image.png", alt: "og image" }],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={cn(
          "bg-app-background text-black antialiased selection:bg-app-blue selection:text-white",
          GeistSans.className,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
