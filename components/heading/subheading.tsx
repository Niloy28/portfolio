import { cn } from "@/lib/utils";
import React from "react";

const SubHeading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h3
			className={cn(
				"text-2xl font-semibold flex gap-2 items-center pb-4",
				className
			)}
		>
			{children}
		</h3>
	);
};

export default SubHeading;
