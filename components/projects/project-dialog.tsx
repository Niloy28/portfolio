import React from "react";
import ProjectCard from "./project-card";
import { useTranslations } from "next-intl";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import ProjectCarousel from "./project-carousel";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollArea } from "../ui/scroll-area";

type ProjectDialogProps = {
	project: {
		title: ProjectSymbol;
		banner: string;
		pictures: string[];
		link: string;
		repo: string;
	};
};

const ProjectDialog = ({ project }: ProjectDialogProps) => {
	const t = useTranslations("Projects");

	return (
		<Dialog>
			<DialogTrigger asChild>
				<ProjectCard
					banner={project.banner}
					title={t(`projects.${project.title}.title`)}
					summary={t(`projects.${project.title}.summary`)}
				/>
			</DialogTrigger>
			<DialogContent className="h-[80vh] min-w-[80vw]">
				<DialogHeader>
					<DialogTitle>{t(`projects.${project.title}.title`)}</DialogTitle>
				</DialogHeader>
				<div className="max-h-full overflow-y-auto p-2">
					<ProjectCarousel pictures={project.pictures} />
					<ScrollArea className="h-96">
						<div className="min-w-full prose *:dark:text-white **:dark:text-white">
							<Markdown remarkPlugins={[remarkGfm]}>
								{t(`projects.${project.title}.description`)}
							</Markdown>
						</div>
					</ScrollArea>
					<Separator />
					<div className="pt-4 flex flex-col gap-2 items-start justify-center">
						<Link
							className="font-semibold underline underline-offset-2"
							href={project.link}
						>
							{t("demo")}
						</Link>
						<Link
							className="font-semibold underline underline-offset-2"
							href={project.repo}
						>
							Github
						</Link>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ProjectDialog;
