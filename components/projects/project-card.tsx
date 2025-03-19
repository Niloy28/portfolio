import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const ProjectCard = ({
	banner,
	title,
	summary,
}: {
	banner: string;
	title: string;
	summary: string;
}) => {
	return (
		<Card className="pt-0 h-full hover:cursor-pointer">
			<CardContent className="flex h-full flex-col justify-between p-0">
				<Image
					src={banner}
					alt={title}
					width={400}
					height={400}
					className="w-full h-full rounded-t-xl"
				/>
				<div className="flex w-full flex-col pt-4 items-center justify-center">
					<div className="px-1 text-center text-lg md:text-xl">{title}</div>
					<div className="line-clamp-2 px-1 text-center text-base text-muted-foreground md:text-lg">
						{summary}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
