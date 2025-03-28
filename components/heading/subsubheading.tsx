import { cn } from "@/lib/utils";
import React from "react";

const SubSubHeading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h4
			className={cn(
				"text-xl font-semibold flex justify-between items-center pb-2",
				className
			)}
		>
			{children}
		</h4>
	);
};

export default SubSubHeading;
