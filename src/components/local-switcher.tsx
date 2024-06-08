"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useTransition } from "react";
import { useLocale } from "use-intl";


export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const [isPending, setTransition] = useTransition();
  const currentPath = usePathname();
  const localePath = currentPath.substring(
    currentPath.indexOf(localActive) + localActive.length + 1
  );

  const toggleLocale = () => {
    const nextLocale = localActive === "en" ? "ar" : "en";
    setTransition(() => {
      router.replace(`/${nextLocale}/${localePath}`);
    });
  };

  return (
    <>

      <button
         onClick={toggleLocale}
         disabled={isPending}
        className="flex gap-x-5 group hover:bg-accent hover:text-white rounded-full"
      >
        <div className={`absolute transition-all ${localActive === "en" ? "pl-20 left-0" : "pr-20 right-0"} hidden xl:group-hover:flex w-max`}>
          <div className="bg-white/20 backdrop-blur-3xl hidden relative mt-[14px] xl:flex text-accent items-center p-[6px] rounded-[6px]">
            <div className="text-[12px] leading-none hidden xl:block font-semibold capitalize ">
            {localActive === "en" ? "Arabic" : "English"}
            </div>
            <div className={`border-solid hidden xl:block  border-y-transparent border-y-[6px]  absolute ${localActive === "en" ? "border-r-white/20 border-r-8 border-l-0 -left-2" : "border-l-white/20 border-l-8 border-r-0 -right-2"}`}></div>
          </div>
        </div>
        <nav
          className="text-white  xl:mb-0 font-thin text-xl xl:text-xl hover:text-accentv rounded-full px-4 py-3 cursor-pointer transition-all"
        >
          {localActive === "en" ? "Ar" : "En"}
        </nav>
      </button>
    </>
  );
}
