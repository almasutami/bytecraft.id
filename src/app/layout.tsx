import type { Metadata } from "next";
import { MainProviders } from "@/providers/main-providers";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "ByteCraft.id",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="ByteCraft" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col">
        <MainProviders>{children}</MainProviders>
        <ToastContainer hideProgressBar={true} />
      </body>
    </html>
  );
}
