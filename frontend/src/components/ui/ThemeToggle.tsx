import { useTheme } from "@/context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="btn btn-ghost rounded-full">
      {theme === "eas-light" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
