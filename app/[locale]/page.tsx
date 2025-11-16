import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects/projects";
import Resume from "@/components/resume";
import Skills from "@/components/skills/skills";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<div className="flex flex-col items-center justify-items-center h-full p-12 pb-20 gap-12 sm:p-20 font-(family-name:--font-geist-sans)">
			<Hero />
			<Resume />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
