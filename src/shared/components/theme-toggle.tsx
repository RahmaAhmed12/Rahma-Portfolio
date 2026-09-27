import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-lg border border-gray-300 px-4 py-2 transition-colors
                 dark:border-gray-700"
        aria-label="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default ThemeToggle;
