import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukesh Kumar | Agentic AI Engineer",
  description:
    "Mukesh Kumar is an AI and ML engineer in Delhi building agentic systems, RAG applications, and useful AI products.",
  openGraph: {
    title: "Mukesh Kumar | Agentic AI Engineer",
    description:
      "AI and ML engineering, agentic systems, practical explanations, and projects by Mukesh Kumar.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090908",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/mukeshbeyond.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/mukeshbeyond-particles.webp"
          media="(min-width: 761px)"
        />
        <link
          rel="preload"
          as="image"
          href="/mukeshbeyond-particles-mobile.webp"
          media="(max-width: 760px)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
