import { cn } from "@/lib/utils";
import React from "react";

const SkillIcon = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"w-max min-h-max hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-110 hover:-translate-y-1",
				className
			)}
		>
			{children}
		</div>
	);
};

export default SkillIcon;
