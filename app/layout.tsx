import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import { Suspense } from "react";
import GoogleAnalyticsScript from "@/app/GoogleAnalyticsScript";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

// local custom font
const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins", // define the name the font will be reference with in css e.g. Inside tailwind config
});

//SEO metadata
export const metadata: Metadata = {
  title: "NextJs With Mosh",
  description: "A crash course on nextjs with tailwind css",
  /*  openGraph: {
    title: "...",
    description: "...",
  },*/
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //specify daisy theme here
    <html lang="en" data-theme="luxury">
      <GoogleAnalyticsScript />
      <body className={poppins.variable}>
        <NavBar />
        <div className="p-5">
          {/*Adding suspense to loading route*/}
          <Suspense> {children}</Suspense>
        </div>
      </body>
    </html>
  );
}
