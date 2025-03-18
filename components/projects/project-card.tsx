import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

const ProjectCard = ({
	pictures,
	title,
	description,
}: {
	pictures: string[];
	title: string;
	description: string;
}) => {
	return (
		<Card className="pt-0 h-full">
			<CardContent className="flex h-full flex-col justify-between p-0">
				<Carousel className="w-full rounded-lg pb-4">
					<CarouselContent className="ml-0">
						{pictures.map((picture, index) => (
							<CarouselItem key={index} className="w-full pl-0">
								<Image
									key={index}
									src={picture}
									alt=""
									width={600}
									height={600}
									className="h-full w-full rounded-t-xl"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="ml-16" />
					<CarouselNext className="mr-16" />
				</Carousel>
				<div className="flex h-1/3 w-full flex-col items-center justify-center">
					<div className="px-1 text-center text-lg md:text-xl">{title}</div>
					<div className="line-clamp-2 px-1 text-center text-base text-muted-foreground md:text-lg">
						{description}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
