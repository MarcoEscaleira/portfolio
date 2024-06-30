import { Button } from "@material-tailwind/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="text"
      className="duration-200 hover:scale-110 active:scale-100 text-white-500 dark:text-gray-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Color mode switch"
    >
      {theme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </Button>
  );
};
