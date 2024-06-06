"use client";

import Error from "next/error";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const t = useTranslations("Not-Found");
  const localActive = useLocale();
  const [isPending, setTransition] = useTransition();
  const currentPath = usePathname();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`w-full xl:h-[78.4vh] mt-20 flex ${localActive === "ar" ? "flex-col xl:flex-row" : "flex-col xl:flex-row-reverse"} justify-center items-center`}
    >
      <motion.div variants={fadeIn("down", "tween", 0.1, 1)}>
        <img
          src={"/404.png"}
          width={700}
          className=" md:mt-[-50px] ml-[-10px]"
        />
      </motion.div>

      <div className={`${localActive === "ar" ? " xl:mr-80" : " xl:ml-80"} mt-28 mb-10 xl:mt-0 flex flex-col justify-center xl:justify-start items-center`}>
        <motion.span
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`text-accent text-xl text-center ${localActive === "ar" ? "rtl " : ""} md:text-2xl xl:text-2xl font-normal mt-[-50px] md:mt-[-100px] xl:mt-[-100px]`}
        >
          {t("not")}
        </motion.span>

        <Link
          href={"/"}
          aria-label="home"
          className="flex justify-center items-center"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="btn btn-sm btn-accent w-[164px] mt-5 xl:mb-0"
          >
            <p className="text-base font-400 text-white">Home</p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
