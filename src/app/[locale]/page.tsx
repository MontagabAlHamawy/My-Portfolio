"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
export const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const t = useTranslations("Home");
  const localActive = useLocale();
  const [isPending, setTransition] = useTransition();
  const currentPath = usePathname();
  const linked = localActive + "/about";


  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={` flex flex-col-reverse mt-60 xl:mt-0 ${localActive === "en" ? "xl:flex-row" : "xl:flex-row-reverse"} justify-center xl:justify-between items-center mt-20 xl:mt-0 xl:pl-40 xl:pr-32 h-[90vh] gap-y-10 gap-x-20`}
    >
      <div className={`flex-1 flex justify-center ${localActive === "en" ? "items-start" : "items-end"} gap-y-5 flex-col px-4 xl:px-0 mb-44 xl:mb-0 xl:pl-0 text-white/80 text-xl xl:text-lg font-extralight`}>
        <motion.h1
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`text-2xl w-full xl:text-4xl ${localActive === "ar" ? "rtl" : ""} text-white font-500 uppercase  `}
        >
          {t("job")}
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className={`font-500 text-white/80 ${localActive === "ar" ? "rtl" : ""}`}
        >
          {t("hello")}{" "}
          <span className="text-accent font-normal">{t("name")}</span> ,
          {t("text")}
        </motion.p>
        <Link
          href={linked}
          aria-label="About"
          className="flex justify-center items-center"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="btn btn-sm btn-accent w-[164px] xl:mb-0"
          >
            <p className="text-base font-400 text-white">about</p>
          </motion.div>
        </Link>
      </div>
      <div className="mx-auto">
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 1)}
          className="bg-accent shadow-sm w-[270px]   flex items-center justify-center rounded-tl-full "
        >
          <Image
            src={"/m2.png"}
            width={300}
            height={300}
            alt="montagab"
            // className=" rounded-br-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

