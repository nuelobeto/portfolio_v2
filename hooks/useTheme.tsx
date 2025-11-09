import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme;
		const defaultTheme = savedTheme || "dark";

		setTheme(defaultTheme);
		document.documentElement.classList.add(defaultTheme);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";

		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);

		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return { theme, toggleTheme };
};
