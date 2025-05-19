"use client";
import { useState } from "react";
import Image from "next/image";
import { PiCode, PiEye } from "react-icons/pi";
import { MProjects } from "@/components/links";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  const [filterType, setFilterType] = useState("all");
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col justify-center gap-y-5 items-center px-3 mt-[-60px] mb-5 xl:mb-8 xl:mt-20"
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="text-center"
      >
        <h1
          className={`font-500 mt-10 text-3xl text-accent font-extralight uppercase`}
        >
          {t("title")}
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 0.4, 1)}
        className="flex flex-wrap justify-center items-center gap-x-9 gap-y-2 px-3 xl:px-0 xl:gap-x-6 xl:text-xl"
      >
        <p
          className={`text-accent text-lg flex justify-center cursor-pointer hover:bg-white/10 transition-all px-3 xl:px-4 py-1 rounded-lg font-light ${
            filterType === "all" && "font-bold bg-white/10"
          } `}
          onClick={() => setFilterType("all")}
        >
          All
        </p>
        <p
          className={`text-accent text-lg flex justify-center cursor-pointer hover:bg-white/10 transition-all px-3 xl:px-4 py-1 rounded-lg font-light ${
            filterType === "wordpress" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("wordpress")}
        >
          WordPress
        </p>
        <p
          className={`text-accent text-lg flex justify-center cursor-pointer hover:bg-white/10 transition-all px-3 xl:px-4 py-1 rounded-lg font-light ${
            filterType === "next" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("next")}
        >
          Next
        </p>
        <p
          className={`text-accent text-lg flex justify-center cursor-pointer hover:bg-white/10 transition-all px-3 xl:px-4 py-1 rounded-lg font-light ${
            filterType === "react" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("react")}
        >
          React
        </p>
        <p
          className={`text-accent text-lg flex justify-center cursor-pointer hover:bg-white/10 transition-all px-3 xl:px-4 py-1 rounded-lg font-light ${
            filterType === "nuxt" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("nuxt")}
        >
          Nuxt.js
        </p>
        <p
          className={`text-accent text-lg flex justify-center cursor-pointer hover:bg-white/10 transition-all px-3 xl:px-4 py-1 rounded-lg font-light ${
            filterType === "static" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("static")}
        >
          Static
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-2 xl:px-0 gap-x-5 gap-y-7 xl:gap-x-12 xl:gap-y-10 font-extralight"
      >
        {MProjects.filter(
          (dd) => filterType === "all" || dd.Type === filterType
        ).map((dd, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center group"
          >
            <div className="relative group">
              <Image
                src={dd.image}
                width={400}
                height={0}
                alt="s"
                className="rounded-lg w-[400px] xl:w-[300px] transition-all"
              />
              <div className="before:bg-white/20 before:rounded-lg before:content-[''] z-0 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:opacity-0 before:transition-all before:group-hover:opacity-100 before:group-hover:bg-white/20 before:z-10"></div>
            </div>
            <div className="flex justify-center items-center z-10 gap-5 xl:gap-10 absolute top-[30%] xl:top-[30%]">
              <Link
                href={dd.code}
                className="border-body hover:border-accent text-white hover:text-accent border-solid border-[3px] p-2 rounded-full bg-body   hidden group-hover:block transition-all"
              >
                <PiCode className=" font-black text-2xl " />
              </Link>
              <Link
                href={dd.URL}
                className="border-body hover:border-accent text-white hover:text-accent border-solid border-[3px] p-2 rounded-full bg-body   hidden group-hover:block transition-all"
              >
                <PiEye className="font-black text-2xl" />
              </Link>
            </div>
            <p className="mt-2 text-white/80 font-extralight text-xl xl:text-lg ">
              {dd.name}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
