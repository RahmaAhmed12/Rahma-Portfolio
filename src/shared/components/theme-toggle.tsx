import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const isRtl = document.documentElement.dir === "rtl";
  const getTogglePosition = () => {
    if (isRtl) {
      return isDark ? "-translate-x-5" : "translate-x-0";
    }
    return isDark ? "translate-x-5" : "translate-x-0";
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={`relative flex h-7 w-12 items-center rounded-full p-1 transition-colors duration-300 ${
        isDark ? "bg-secondary-800" : "bg-secondary-500"
      }`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full bg-white text-sm shadow-md transition-transform duration-300 ${getTogglePosition()}`}
      >
        {isDark ? (
          <Sun className="text-primary-500 h-4 w-4 " />
        ) : (
          <Moon className="text-primary-700 h-4 w-4 " />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
