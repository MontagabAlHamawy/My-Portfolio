"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";

import {
  PiHouse,
  PiUser,
  PiCode,
  PiProjectorScreenChart,
  PiPhone,
} from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { usePathname } from "next/navigation";
import LocalSwitcher from "./local-switcher";

export const navData = [
    { name: "Home", path: "/", icon: <PiHouse /> },
    { name: "About", path: "/about", icon: <PiUser /> },
    { name: "Projects", path: "/projects", icon: <PiProjectorScreenChart /> },
    { name: "Skills", path: "/skills", icon: <PiCode /> },
  { name: "Contact", path: "/contact", icon: <PiPhone /> },
];

export default function Sidebar() {
  const t = useTranslations("Index");
  const localActive = "/" + useLocale();
  const currentPath = usePathname();

  const localePath =
    "/" +
    currentPath.substring(
      currentPath.indexOf(localActive) + localActive.length + 1
    );
  let statee: string = "right";
  localActive === "/en" ? (statee = "right") : (statee = "left");

  return (
    <motion.div
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        variants={fadeIn(statee, "tween", 0.1, 1)}
        className={`flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-[-1px]  mt-auto
     ${localActive === "/en" ? "left-0 xl:left-[2%]" : "right-0 xl:right-[2%]"}
      xl:right-[2%] z-50 top-0 w-full xl:w-16  xl:-max-w-md xl:h-screen`}
      >
        <div className="flex w-full xl:flex-col items-center justify-center xl:justify-center gap-y-1 px-0 md:px-40 xl:px-0 h-[70px] xl:h-max py-8 bg-white/10  backdrop-blur-3xl text-3xl xl:text-md rounded-tl-xl rounded-tr-xl xl:rounded-full ">
          {navData.map((link, index) => {
            const isActive = localePath === link.path;
            const linked = localActive + link.path;

            return (
              <Link
                key={index}
                href={linked}
                aria-label={link.name}
                className="flex gap-x-1 group hover:text-accent"
              >
                <div className={`absolute transition-all ${localActive === "/en" ? "pl-20 left-0" : "pr-20 right-0"}  hidden xl:group-hover:flex w-max`}>
                  <div className="bg-white/20 backdrop-blur-3xl hidden relative mt-[14px] xl:flex text-accent items-center p-[6px] rounded-[6px]">
                    <div className="text-[12px] leading-none hidden xl:block font-semibold capitalize ">
                      {link.name}
                    </div>
                    <div className={`border-solid hidden xl:block  border-y-transparent border-y-[6px]  absolute  ${localActive === "/en" ? "border-r-white/20 border-r-8 border-l-0 -left-2" : "border-l-white/20 border-l-8 border-r-0 -right-2"}`}></div>
                  </div>
                </div>
                <nav
                  className={`${
                    isActive
                      ? "text-accent mb-[100%] xl:mb-0 bg-body text-2xl xl:text-2xl hover:text-accent"
                      : "text-white mb-0 xl:mb-0 bg-transparent text-2xl xl:text-xl hover:text-accent"
                  } rounded-full p-4 xl:p-4 cursor-pointer transition-all hover:text-accent`}
                >
                  {link.icon}
                </nav>
              </Link>
            );
          })}
          <LocalSwitcher />
        </div>
      </motion.div>
    </motion.div>
  );
}
