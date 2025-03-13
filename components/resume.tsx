import {
	Calendar,
	GraduationCap,
	MapPin,
	MonitorSmartphone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

type WorkplacesType = "cuore" | "ccs";

const Resume = () => {
	const t = useTranslations("Resume");
	const keys: WorkplacesType[] = ["cuore", "ccs"];

	return (
		<article className="w-full xl:w-7/10 m-auto flex flex-col gap-4 justify-start items-start self-start py-12 px-0 md:px-8">
			<header>
				<h2 className="text-3xl font-bold">{t("heading")}</h2>
			</header>
			{/* Experience Section */}
			<section className="w-full">
				<h3 className="text-2xl font-semibold flex gap-2 items-center pb-4">
					<MonitorSmartphone />
					{t("experience-heading")}
				</h3>
				<ol className="list-none ml-8">
					{keys.map((key) => (
						// TODO: Add timeline
						<li key={key} className="pb-8">
							<h4 className="text-xl font-semibold flex justify-between items-center pb-2">
								{t(`experience.${key}.title`)}
								<span className="flex gap-2 items-center">
									<MapPin />
									{t(`experience.${key}.place`)}
								</span>
							</h4>
							<h5 className="flex justify-between items-center pb-2">
								{t(`experience.${key}.job`)}
								<span className="flex gap-2 items-center">
									<Calendar />
									{t(`experience.${key}.period`)}
								</span>
							</h5>
							<div>
								<ul className="list-disc ml-4 flex gap-1 flex-col">
									{t
										.raw(`experience.${key}.content`)
										.map(
											(
												item: { title: string; description: string | number },
												index: number
											) => (
												<li key={index}>
													<h5 className="font-semibold">{item.title}</h5>
													<p>{item.description}</p>
												</li>
											)
										)}
								</ul>
							</div>
						</li>
					))}
				</ol>
			</section>

			{/* Education Section */}
			<section className="w-full">
				<h3 className="text-2xl font-semibold flex gap-2 items-center pb-4">
					<GraduationCap />
					{t("education-heading")}
				</h3>
				<ol className="list-none ml-8">
					<li>
						<h4 className="text-xl font-semibold flex justify-between items-center pb-2">
							{t("education.place")}
							<span className="flex gap-2 items-center">
								<MapPin />
								{t("education.location")}
							</span>
						</h4>
						<span className="flex justify-between items-center pb-2">
							{t("education.subject")}
							<span className="flex gap-2 items-center">
								<Calendar />
								{t("education.period")}
							</span>
						</span>
						<div>
							<ul className="list-disc ml-4 flex gap-1 flex-col">
								<li>
									{t("education.courses.thesis-heading")}:{" "}
									{t("education.courses.thesis")}
								</li>
								<li>
									{t("education.courses.regular-heading")}:{" "}
									{t("education.courses.regular")}
								</li>
							</ul>
						</div>
					</li>
				</ol>
			</section>
		</article>
	);
};

export default Resume;
