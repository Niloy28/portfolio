import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const SkillHoverCard = ({
	children,
	name,
	experience,
	className,
}: {
	children: React.ReactNode;
	name: string;
	experience: number;
	className?: string;
}) => {
	const t = useTranslations("Skills");

	return (
		<HoverCard>
			<HoverCardTrigger asChild>{children}</HoverCardTrigger>
			<HoverCardContent
				className={cn("w-max flex flex-col items-center gap-1", className)}
			>
				<b>{name}</b>
				<p>{t("job-experience", { month: experience })}</p>
			</HoverCardContent>
		</HoverCard>
	);
};

export default SkillHoverCard;
