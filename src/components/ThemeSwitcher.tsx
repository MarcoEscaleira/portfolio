import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="rounded-md p-1 duration-200 hover:scale-110 active:scale-100 dark:bg-[#212933]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Color mode switch"
    >
      {theme === "light" ? <Moon className="w-4" /> : <Sun className="w-4" />}
    </button>
  );
};
