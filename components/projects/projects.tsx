import { useTranslations } from "next-intl";
import React from "react";
import Heading from "../heading/heading";
import ProjectCard from "./project-card";

type ProjectSymbol = "hana-shop" | "weathervue" | "rhythmflow";

// TODO: Update project image references
const projects: { title: ProjectSymbol; pictures: string[] }[] = [
	{
		title: "weathervue",
		pictures: [
			"/projects/weathervue/home.png",
			"/projects/weathervue/location.png",
			"/projects/weathervue/weather.png",
		],
	},
	{
		title: "hana-shop",
		pictures: [
			"/projects/weathervue/home.png",
			"/projects/weathervue/location.png",
			"/projects/weathervue/weather.png",
		],
	},
	{
		title: "rhythmflow",
		pictures: [
			"/projects/weathervue/home.png",
			"/projects/weathervue/location.png",
			"/projects/weathervue/weather.png",
		],
	},
];

const Projects = () => {
	const t = useTranslations("Projects");

	return (
		<article
			id="projects"
			className="w-full lg:w-7/10 xl:w-3/5 m-auto flex flex-col gap-4 justify-start py-12 px-0 md:px-8"
		>
			<Heading>{t("heading")}</Heading>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 items-center">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						pictures={project.pictures}
						title={t(`projects.${project.title}.title`)}
						description={t(`projects.${project.title}.description`)}
					/>
				))}
			</div>
		</article>
	);
};

export default Projects;
