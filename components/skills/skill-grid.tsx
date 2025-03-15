import { cn } from "@/lib/utils";
import React from "react";

const SkillGrid = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn("w-max grid grid-cols-3 2xl:grid-cols-4 gap-4", className)}
		>
			{children}
		</div>
	);
};

export default SkillGrid;
