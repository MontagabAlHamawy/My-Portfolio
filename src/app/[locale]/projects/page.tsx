"use client";
import { useState } from "react";
import Image from "next/image";
import { PiCode, PiEye } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { Roboto_Mono } from "next/font/google";
import { useTranslations } from "next-intl";
export const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const M_Projects = [
  {
    name: "3aqarat",
    Type: "next",
    image: "/projects/3aqarat.jpg",
    URL: "https://3aqarat.vercel.app/",
    code: "https://github.com/MontagabAlHamawy/3aqarat",
  },
  {
    name: "DR-Needs",
    Type: "wordpress",
    image: "/projects/dr-needs.png",
    URL: "https://dr-needs.com/",
    code: "https://dr-needs.com/",
  },
  {
    name: "Dwana",
    Type: "wordpress",
    image: "/projects/dwana.png",
    URL: "https://dwana.net/",
    code: "https://dwana.net/",
  },
  {
    name: "Klinder-Design",
    Type: "wordpress",
    image: "/projects/klinder-design.png",
    URL: "https://klinder-design.com/",
    code: "https://klinder-design.com/",
  },
  {
    name: "Metaverse",
    Type: "next",
    image: "/projects/metaverse.png",
    URL: "https://metaverse.klinder-design.com/",
    code: "https://github.com/MontagabAlHamawy/Metaverse",
  },
  {
    name: "Next-Blog",
    Type: "next",
    image: "/projects/next-blog.png",
    URL: "https://klinder-blog.vercel.app/",
    code: "https://github.com/MontagabAlHamawy/Next-Blog",
  },
  {
    name: "React-Blog",
    Type: "react",
    image: "/projects/react-blog.png",
    URL: "https://montagabalhamawy.github.io/WP-React/",
    code: "https://github.com/MontagabAlHamawy/WP-React",
  },
  {
    name: "Sniper",
    Type: "static",
    image: "/projects/sniper.png",
    URL: "https://montagabalhamawy.github.io/Sniper/",
    code: "https://github.com/MontagabAlHamawy/Sniper",
  },
  {
    name: "Klinder",
    Type: "static",
    image: "/projects/klinder.png",
    URL: "https://montagabalhamawy.github.io/Klinder/",
    code: "https://github.com/MontagabAlHamawy/Klinder",
  },
  {
    name: "X-O Game",
    Type: "static",
    image: "/projects/x-o.png",
    URL: "https://montagabalhamawy.github.io/X-O-Game/",
    code: "https://github.com/MontagabAlHamawy/X-O-Game",
  },
  {
    name: "Notes",
    Type: "static",
    image: "/projects/note.png",
    URL: "https://montagabalhamawy.github.io/Notes/",
    code: "https://github.com/MontagabAlHamawy/Notes",
  },
];

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
        <h1 className={`font-500 mt-10 text-2xl text-white font-extralight uppercase ${roboto.className}`}>
          {t("title")}
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 0.4, 1)}
        className="grid grid-cols-2 xl:grid-cols-5 gap-x-9 gap-y-2 px-3 xl:px-0 xl:gap-x-6 xl:text-xl"
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
        {M_Projects.filter(
          (dd) => filterType === "all" || dd.Type === filterType
        ).map((dd, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center group"
          >
            <div className="relative group">
              <img
                src={dd.image}
                alt=""
                className="rounded-lg w-[400px] xl:w-[300px] transition-all"
              />
              <div className="before:bg-white/20 before:rounded-lg before:content-[''] z-0 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:opacity-0 before:transition-all before:group-hover:opacity-100 before:group-hover:bg-white/20 before:z-10"></div>
            </div>
            <div className="flex justify-center items-center z-10 gap-5 xl:gap-10 absolute top-[30%] xl:top-[30%]">
              <Link
                href={dd.code}
                className="border-accent border-solid border-[2px] p-2 rounded-full hover:bg-black/30 hidden group-hover:block transition-all"
              >
                <PiCode className="text-accent font-black text-2xl" />
              </Link>
              <Link
                href={dd.URL}
                className="border-accent border-solid border-[2px] p-2 rounded-full hover:bg-black/30 hidden group-hover:block transition-all"
              >
                <PiEye className="text-accent font-black text-2xl" />
              </Link>
            </div>
            <p className="mt-2 text-white/80 font-extralight text-xl xl:text-lg ">
              {dd.name}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
