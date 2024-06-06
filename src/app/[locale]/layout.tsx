import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from "@/components/header";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
 

// const inter = Inter({ subsets: ["latin"] });
const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Montagab - Home",
  description: "Front-End Developer",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <link rel="icon" href="@/favicon.ico" sizes="any" />
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header/>
          <Sidebar />
          <div className="wrapper min-h-[77.1vh] xl:min-h-[80vh] pt-40 xl:pt-0">
          {children}
          </div>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}