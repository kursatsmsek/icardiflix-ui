import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { i18n } from "@/i18n.config";
import Header from "@/components/header";
import Head from "next/head";
import Script from "next/script";
import { GoogleAdSense } from "nextjs-google-adsense";

const inter = Inter({ subsets: ["latin"] });

const adsenseUrl = process.env.NEXT_PUBLIC_ADSENSE_URL;

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
      {/* <Head>
        <script async src={adsenseUrl} crossorigin="anonymous"></script>
      </Head>
      <Script async src={adsenseUrl} crossOrigin="anonymous" />
      <GoogleAdSense publisherId="pub-2754491409789428" /> */}
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
