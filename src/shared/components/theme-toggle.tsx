import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const isRtl = document.documentElement.dir === "rtl";
  const getTogglePosition = () => {
    if (isRtl) {
      return isDark ? "-translate-x-4.5 lg:-translate-x-5" : "translate-x-0";
    }
    return isDark ? "translate-x-4.5 lg:translate-x-5" : "translate-x-0";
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={`relative flex h-5 w-10 lg:h-6 lg:w-12 items-center rounded-full p-1 transition-colors duration-300 ${
        isDark ? "bg-secondary-800" : "bg-secondary-500"
      }`}
    >
      <span
        className={`flex h-3.5 w-3.5 lg:h-4.5 lg:w-4.5 items-center justify-center rounded-full bg-white text-sm shadow-md transition-transform duration-300 ${getTogglePosition()}`}
      >
        {isDark ? (
          <Sun className="text-primary-500 h-2.5 lg:h-3.5 w-2.5 lg:w-3.5 " />
        ) : (
          <Moon className="text-primary-700 h-2.5 lg:h-3.5 w-2.5 lg:w-3.5 " />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
