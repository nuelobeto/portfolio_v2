import { LINKS } from "@/lib/constants";
import { useState } from "react";

export const useActiveLink = () => {
	const [activeLink, setActiveLink] = useState<string>(LINKS[0]?.href || "");

	return { activeLink, setActiveLink };
};
