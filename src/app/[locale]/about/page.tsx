"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import {
  PiUser,
  PiFlag,
  PiMapPin,
  PiGraduationCap,
  PiBagSimpleBold,
  PiHourglass,
} from "react-icons/pi";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  const localActive = useLocale();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={` flex  ${
        localActive === "en"
          ? "flex-col-reverse xl:flex-row"
          : "flex-col-reverse xl:flex-row-reverse"
      } justify-center items-center xl:pl-40  xl:my-0 xl:pr-32 min-h-[90vh] gap-y-5 xl:gap-y-10 gap-x-20`}
    >
      <div
        className={`flex gap-y-5 xl:gap-y-10 flex-col ${
          localActive === "en" ? "items-start" : "items-start rtl"
        } pt-7 xl:pt-36 pb-10 xl:pb-20 px-4 xl:px-0 font-extralight`}
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 1)}
          className={`text-3xl xl:text-4xl text-accent font-500 uppercase`}
        >
          {t("title")}
        </motion.h1>
        <div>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-white/80 font-500 text-xl xl:text-lg "
          >
            {t("text1")}
          </motion.p>
          <br />
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-white/80 font-500 text-xl xl:text-lg "
          >
            {t("text2")}
          </motion.p>
          <br />
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-white/80 font-500 text-xl xl:text-lg "
          >
            {t("text3")}
          </motion.p>
           <br />
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-white/80 font-500 text-xl xl:text-lg"
          >
          <h1 className="text-lg font-bold text-accent">{t("title1")}</h1>
            <p>- {t("t1")}</p>
            <p>- {t("t2")}</p>
            <p>- {t("t3")}</p>
            <p>- {t("t4")}</p>
          </motion.div>
          <br />
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-white/80 font-500 text-xl xl:text-lg "
          >
            {t("text4")}
          </motion.p>
           <br />
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-white/80 font-500 text-xl xl:text-lg "
          >
            {t("text5")}
          </motion.p>
        </div>
        <div
          className={`${
            localActive === "en" ? "xl:mr-[-200px]" : "xl:ml-[-90px]"
          } flex gap-x-4 gap-y-3 flex-col xl:flex-row  pt-5 xl:pt-0 `}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={` flex flex-col gap-y-3 justify-center items-start`}
          >
            <nav className="flex justify-center items-center gap-x-1">
              <PiUser className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p className="font-light text-white/70">{t("namen")}:</p>
              <span className="text-accent font-bold  xl:text-sm">
                {t("name")}
              </span>
            </nav>
            <nav className="flex justify-center items-center gap-x-1">
              <PiFlag className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p className="font-light text-white/70"> {t("nationalityn")}:</p>
              <span className="text-accent font-bold xl:text-sm">
                {t("nationality")}
              </span>
            </nav>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex flex-col gap-y-3 justify-center items-start"
          >
            <nav className="flex justify-center items-center gap-x-1">
              <PiHourglass className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p className="font-light text-white/70">{t("agen")}:</p>
              <span className="text-accent font-bold xl:text-sm">
                {t("age")}
              </span>
            </nav>
            <nav className="flex justify-center items-center gap-x-1">
              <PiMapPin className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p className="font-light text-white/70">{t("addressn")}:</p>
              <span className="text-accent font-bold xl:text-sm">
                {t("address")}
              </span>
            </nav>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex flex-col gap-y-3 justify-center items-start"
          >
            <nav className="flex justify-center items-center gap-x-1">
              <PiGraduationCap className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p className="font-light text-white/70">{t("studyn")}:</p>
              <span className="text-accent font-bold xl:text-sm">
                {t("study")}
              </span>
            </nav>
            <nav className="flex justify-center items-center gap-x-1">
              <PiBagSimpleBold className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p className="font-light text-white/70">{t("experiencen")}:</p>
              <span className="text-accent font-bold xl:text-sm">
                {t("experience")}
              </span>
            </nav>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("down", "tween", 0.6, 1)}
        className="xl:container pl-0 flex justify-center items-center w-full mr-0 pt-0 xl:pt-48 xl:pb-20  xl:mr-[-50px]"
      >
        <div className="bg-accent shadow-sm pb-10 pt-10 flex items-center justify-center rounded-tl-full rounded-br-full mx-auto">
          <Image
            src={"/About.jpg"}
            width={300}
            height={0}
            alt="about"
            className="rounded-tl-xl rounded-br-xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
