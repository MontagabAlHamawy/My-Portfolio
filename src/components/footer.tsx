

import { useLocale, useTranslations } from "next-intl";
import { FaCopyright } from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations("Footer");
  const localActive = useLocale();
  return (
    <div className="static bottom-0 left-0">
      <div
        className={`flex flex-col  ${
          localActive === "en" ? "xl:flex-row" : "xl:flex-row-reverse"
        }  justify-between items-center pb-28 pt-5 xl:pb-5 xl:py-5 px-10 gap-y-3 bg-white/10 text-center`}
      >
        <p className="font-extralight text-white/80 ">
          Copyright<FaCopyright className="inline mx-1" />
           {t("copyright")}
        </p>
        <p className="text-sm xl:text-base font-extralight text-white/80">
          {t("developed")} <span className="text-red-500 text-lg">❤</span>
        </p>
      </div>
    </div>
  );
}
