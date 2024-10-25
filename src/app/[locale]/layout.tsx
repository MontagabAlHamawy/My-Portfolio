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
                {`
                    (function (s, t, a, c, k) {
                        t.src = t.src;
                        var d = document.createElement('script');
                        for (var attr in t) {
                            d.setAttribute(attr, t[attr] ? t[attr] : null);
                        }
                        d.innerHTML = a;
                        d.onload = function () {
                            new StackAnalytix("" + c, "" + k).Start();
                        };
                        document.body.appendChild(d);
                    })(32, { src: 'https://api.stkeg-cdn.com/v1/tracking/pixel', type: 'text/javascript', async: null }, '', 6, 265);
                `}
            </Script>
      </body>
    </html>
  );
}
