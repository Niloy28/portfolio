import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<header>
			<h2 className={cn("text-3xl font-bold", className)}>{children}</h2>
		</header>
	);
};

export default Heading;
