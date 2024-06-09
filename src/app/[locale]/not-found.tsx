"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {  fadeIn } from "@/utils/motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFound() {
  const t = useTranslations("Not-Found");
  const localActive = useLocale();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`w-full xl:h-[78.4vh] gap-5 mt-20 flex flex-col justify-center items-center`}
    >
      <motion.div variants={fadeIn("down", "tween", 0.1, 1)}>
        <Image
          src={"/error.png"}
          width={500}
          height={400}
          alt="404"
          className="mt-[-120px] md:mt-[-100px] ml-[-10px] mb-[-100px]  xl:mb-0"
        />
      </motion.div>

      <div className={` mt-28 mb-10 xl:mt-0 flex flex-col justify-center xl:justify-start items-center`}>
        <motion.span
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`text-accent text-xl text-center  md:text-2xl xl:text-2xl font-normal mt-[-70px] xl:mt-[-90px]`}
        >
          {t("not1")}
        </motion.span>
        <motion.span
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`text-accent text-xl text-center  md:text-2xl xl:text-2xl font-normal mt-5`}
        >
          {t("not2")}
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
