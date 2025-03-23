import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const ProjectCarousel = ({ pictures }: { pictures: string[] }) => {
	return (
		<Carousel className="w-full h-4/5 overflow-y-auto rounded-lg pb-4">
			<CarouselContent className="ml-0">
				{pictures.map((picture, index) => (
					<CarouselItem key={index} className="w-full pl-0">
						<Image
							key={index}
							src={picture}
							alt=""
							width={4000}
							height={4000}
							className="h-full w-full rounded-t-xl object-center"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="ml-16" />
			<CarouselNext className="mr-16" />
		</Carousel>
	);
};

export default ProjectCarousel;
