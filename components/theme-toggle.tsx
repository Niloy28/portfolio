"use client";

import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { Skeleton } from "./ui/skeleton";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		resolvedTheme == "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<>
			{!mounted && <Skeleton className="w-20 h-6" />}
			{mounted && (
				<div className="flex justify-center items-center gap-2">
					<Moon />
					<Switch
						className="border dark:border-white not-dark:border-black"
						defaultChecked={resolvedTheme == "light"}
						onClick={toggleTheme}
					/>
					<Sun />
				</div>
			)}
		</>
	);
};

export default ThemeToggle;
