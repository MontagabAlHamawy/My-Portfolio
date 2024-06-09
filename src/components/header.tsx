"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";
import { HeadData } from "./links";

export default function Header() {
  const t = useTranslations("Index");
  const locale = t("language");
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="flex flex-col backdrop-blur-sm xl:flex-row gap-y-4 justify-between px-10 py-0 xl:py-6 w-full items-center ">
        <motion.div variants={fadeIn("down", "tween", 0.2, 1)}>
          <Link href="/" aria-label="Home">
            <h1 className="text-xl mt-4 xl:mt-0 text-accent backdrop-blur-sm drop-shadow-sm">
              MONTAGAB
            </h1>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="flex justify-center items-center mb-2 xl:mb-0 gap-x-5 xl:gap-x-3 "
        >
          {HeadData.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                aria-label={link.name}
                className="border-body hover:border-accent text-white hover:text-accent border-solid border-[2px] p-1 rounded-full bg-body  transition-all"
              >
                <nav
                  className={`text-2xl xl:text-xl rounded-full cursor-pointer `}
                >
                  {link.icon}
                </nav>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
