import { cn } from "@/lib/utils";
import React from "react";

const SkillSection = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<section
			className={cn(
				"flex flex-col items-center sm:items-start sm:justify-between",
				className
			)}
		>
			{children}
		</section>
	);
};

export default SkillSection;
