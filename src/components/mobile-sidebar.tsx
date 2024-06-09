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
import { usePathname } from "next/navigation";
import LocalSwitcher from "./local-switcher";
export const navData = [
  { name: "Home", path: "/", icon: <PiHouse /> },
  { name: "About", path: "/about", icon: <PiUser /> },
  { name: "Projects", path: "/projects", icon: <PiProjectorScreenChart /> },
  { name: "Skills", path: "/skills", icon: <PiCode /> },
  { name: "Contact", path: "/contact", icon: <PiPhone /> },
];

export default function MobileSidebar() {
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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div>
        <div className="flex w-full xl:flex-col items-center justify-center z-30 xl:justify-center  fixed bottom-0 left-0 gap-y-1 px-0 md:px-40 xl:px-0 h-[70px] xl:h-max py-8 bg-white/10  backdrop-blur-3xl text-3xl xl:text-md rounded-tl-xl rounded-tr-xl xl:rounded-full ">
          {navData.map((link, index) => {
            const isActive = localePath === link.path;
            const linked = localActive + link.path;

            return (
              <Link
                key={index}
                href={linked}
                aria-label={link.name}
                className={`flex gap-x-1  rounded-full ${
                  isActive ? "" : "hover:bg-accent"
                }`}
              >
                <div
                  className={`absolute transition-all ${
                    localActive === "/en" ? "pl-20 left-0" : "pr-20 right-0"
                  }  hidden xl:group-hover:flex w-max`}
                >
                  <div className="bg-white/20 backdrop-blur-3xl hidden relative mt-[14px] xl:flex text-accent items-center p-[6px] rounded-[6px]">
                    <div className="text-[12px] leading-none hidden xl:block font-semibold capitalize ">
                      {link.name}
                    </div>
                    <div
                      className={`border-solid hidden xl:block  border-y-transparent border-y-[6px]  absolute  ${
                        localActive === "/en"
                          ? "border-r-white/20 border-r-8 border-l-0 -left-2"
                          : "border-l-white/20 border-l-8 border-r-0 -right-2"
                      }`}
                    ></div>
                  </div>
                </div>
                <nav
                  className={`${
                    isActive
                      ? "text-accent mb-[100%] xl:mb-0 bg-body text-2xl xl:text-2xl "
                      : "text-white mb-0 xl:mb-0 bg-transparent text-2xl xl:text-xl "
                  } rounded-full p-4 xl:p-4 cursor-pointer transition-all `}
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
