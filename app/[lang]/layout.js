import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { i18n } from "@/i18n.config";
import Header from "@/components/header";
import Head from "next/head";

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
      <Head>
        <script async src={adsenseUrl} crossorigin="anonymous"></script>
      </Head>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
