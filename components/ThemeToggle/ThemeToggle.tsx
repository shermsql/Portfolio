"use client";

import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import { SunIcon, MoonIcon } from "@/components/icons/Icons";

import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Temayı Değiştir"
      title="Temayı Değiştir"
    >
      {theme === "dark" ? <SunIcon width={19} height={19} /> : <MoonIcon width={19} height={19} />}
    </button>
  );
}
