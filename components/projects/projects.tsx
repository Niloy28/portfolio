import { useTranslations } from "next-intl";
import React from "react";
import Heading from "../heading/heading";
import ProjectDialog from "./project-dialog";

// TODO: Update project image references
const projects: {
	title: ProjectSymbol;
	banner: string;
	pictures: string[];
	link: string;
	repo: string;
}[] = [
	{
		title: "weathervue",
		banner: "/projects/weathervue/banner.png",
		pictures: [
			"/projects/weathervue/home.png",
			"/projects/weathervue/location.png",
			"/projects/weathervue/weather.png",
		],
		link: "https://weathervue-woad.vercel.app/",
		repo: "https://github.com/Niloy28/weathervue",
	},
	{
		title: "hana-shop",
		banner: "/projects/hana-shop/banner.png",
		pictures: [
			"/projects/weathervue/home.png",
			"/projects/weathervue/location.png",
			"/projects/weathervue/weather.png",
		],
		link: "https://hanashop.vercel.app/",
		repo: "https://github.com/Niloy28/hana-shop",
	},
	{
		title: "rhythmflow",
		banner: "/projects/rhythmflow/banner.png",
		pictures: [
			"/projects/weathervue/home.png",
			"/projects/weathervue/location.png",
			"/projects/weathervue/weather.png",
		],
		link: "https://rhythmflow.vercel.app/",
		repo: "https://github.com/Niloy28/rhtyhmflow",
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
					<ProjectDialog key={index} project={project} />
				))}
			</div>
		</article>
	);
};

export default Projects;
