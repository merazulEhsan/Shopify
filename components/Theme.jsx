"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function Theme() {
  const { setTheme } = useTheme();

  return (
    <div className="text-center text-gray-700 dark:text-slate-200 transition relative">
      <Button size="xs" className="bg-transparent hover:bg-transparent">
        <MoonIcon
          onClick={() => setTheme("light")}
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 border-none "
        />
        <SunIcon
          onClick={() => setTheme("dark")}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
        />

        <span className="sr-only">Toggle theme</span>
      </Button>
      <p className="text-xs leading-3 ">Theme</p>
    </div>
  );
}
