"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion"
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiTelegramLogo,
  PiGithubLogo,
  PiLinkedinLogo,
} from "react-icons/pi";

export const HeadData = [
  {
    name: "Facebook",
    path: "https://facebook.com/montagab.alhamawy/",
    icon: <PiFacebookLogo />,
  },
  {
    name: "Instagram",
    path: "https://instagram.com/m0ntagab/",
    icon: <PiInstagramLogo />,
  },
  {
    name: "Telegram",
    path: "https://t.me/M0ntagab/",
    icon: <PiTelegramLogo />,
  },
  {
    name: "Github",
    path: "https://github.com/MontagabAlHamawy/",
    icon: <PiGithubLogo />,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/montagab-alhamawy/",
    icon: <PiLinkedinLogo />,
  },
];

export default function Header() {
  const t = useTranslations("Index");
  const locale = t("language");
  return (
    <motion.div
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="flex flex-col backdrop-blur-sm xl:flex-row gap-y-4 justify-between px-10 py-6 w-full items-center ">
        <motion.div variants={fadeIn("down", "tween", 0.2, 1)}>
          {/* <Image src={"/logo2.png"} width={100} height={100} alt="logo" /> */}
          <Link href="/" aria-label="Home">
            <h1 className="text-xl text-accent backdrop-blur-sm drop-shadow-sm">
              MONTAGAB
            </h1>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="flex justify-center items-center gap-x-10 xl:gap-x-5 "
        >
          {HeadData.map((link, index) => {
            return (
              <Link key={index} href={link.path} aria-label={link.name}>
                <nav className="text-2xl xl:text-xl text-white hover:text-accent transition-all">
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
