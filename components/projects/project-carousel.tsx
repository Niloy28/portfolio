import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const ProjectCarousel = ({
	pictures,
}: {
	pictures: { title: string; src: string }[];
}) => {
	return (
		<Carousel className="w-full h-4/5 overflow-y-auto rounded-lg pb-4">
			<CarouselContent className="ml-0">
				{pictures.map((picture, index) => (
					<Dialog key={index}>
						<DialogTrigger asChild>
							<CarouselItem className="w-full pl-0 hover:cursor-pointer">
								<Image
									key={index}
									src={picture.src}
									alt=""
									width={4000}
									height={4000}
									className="h-full w-full rounded-t-xl object-center"
								/>
							</CarouselItem>
						</DialogTrigger>
						<DialogContent className="h-[80vh] min-w-[80vw] flex flex-col gap-2 items-center">
							<DialogTitle className="font-semibold text-xl">
								{picture.title}
							</DialogTitle>
							<Image
								key={index}
								src={picture.src}
								alt=""
								width={5000}
								height={5000}
								className="h-full w-full grow object-contain overflow-y-scroll"
							/>
						</DialogContent>
					</Dialog>
				))}
			</CarouselContent>
			<CarouselPrevious className="ml-16" />
			<CarouselNext className="mr-16" />
		</Carousel>
	);
};

export default ProjectCarousel;
