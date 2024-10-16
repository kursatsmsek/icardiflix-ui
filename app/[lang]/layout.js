import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { i18n } from "@/i18n.config";
import Header from "@/components/header";
import Head from "next/head";
import Script from "next/script";
import { GoogleAdSense } from "nextjs-google-adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icardiflix",
  description: "Icardiflix Video Website",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <head>
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2754491409789428"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        /> */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2754491409789428"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-2754491409789428"
        ></meta>
      </head>

      {/* <GoogleAdSense publisherId="pub-2754491409789428" /> */}
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
