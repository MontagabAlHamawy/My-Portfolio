import type { Metadata } from "next";
import { Cairo, Roboto_Mono } from "next/font/google";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FlagsReporter } from '@vercel/flags/react';
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MobileSidebar from "@/components/mobile-sidebar";
import Script from 'next/script';

// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto_Mono({ subsets: ["latin"] });
const cairo = Cairo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Montagab - Home",
  description: "Front-End Developer",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={cairo.className}>
      <link rel="icon" href="@/favicon.ico" sizes="any" />
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="hidden xl:block">
            <Sidebar />
          </div>
          <div className="block xl:hidden">
            <MobileSidebar />
          </div>
          <ToastContainer theme="dark" />
          <div className="wrapper min-h-[77.1vh] xl:min-h-[80vh] pt-40 xl:pt-0">
            {children}
            <FlagsReporter keys={['summer-sale', 'instant-checkout']} />
            <Analytics />
            <SpeedInsights />
          </div>
          <Footer />
        </NextIntlClientProvider>
         <Script id="custom-stack-analytix" strategy="afterInteractive">
           {
             `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5186634,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
           `}
            </Script>
      </body>
    </html>
  );
}
