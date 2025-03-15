// Devicons import

// Language icons
import CsharpOriginal from "devicons-react/icons/CsharpOriginal";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import Css3Original from "devicons-react/icons/Css3Original";
import Html5Original from "devicons-react/icons/Html5Original";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";

// Framework icons
import DotnetcoreOriginal from "devicons-react/icons/DotnetcoreOriginal";
import UnityOriginal from "devicons-react/icons/UnityOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import VuejsOriginal from "devicons-react/icons/VuejsOriginal";
import JestPlain from "devicons-react/icons/JestPlain";

// Database icons
import MicrosoftsqlserverOriginal from "devicons-react/icons/MicrosoftsqlserverOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";

// Tools icons
import GitOriginal from "devicons-react/icons/GitOriginal";
import SourcetreeOriginal from "devicons-react/icons/SourcetreeOriginal";
import VisualstudioOriginal from "devicons-react/icons/VisualstudioOriginal";
import VscodeOriginal from "devicons-react/icons/VscodeOriginal";

import { Boxes, CodeXml, Database, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import Heading from "./heading/heading";
import SubHeading from "./heading/subheading";
import SkillGrid from "./skill-grid";
import SkillSection from "./skill-section";

const Skills = () => {
	const t = useTranslations("Skills");

	return (
		<article
			id="skills"
			className="w-full lg:w-7/10 xl:w-3/5 2xl:w-1/2 m-auto flex flex-col gap-4 justify-start items-start self-start py-12 px-0 md:px-8"
		>
			<Heading>{t("heading")}</Heading>

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-8 pb-4 sm:items-start sm:justify-between sm:gap-x-4 sm:gap-y-8 md:gap-x-8 md:gap-y-16">
				{/* Language Section */}
				<SkillSection>
					<SubHeading>
						<CodeXml size={40} />
						{t("language")}
					</SubHeading>
					<SkillGrid>
						<CsharpOriginal size={64} />
						<Html5Original size={64} />
						<Css3Original size={64} />
						<JavascriptOriginal size={64} />
						<TypescriptOriginal size={64} />
						<CplusplusOriginal size={64} />
						<PythonOriginal size={64} />
					</SkillGrid>
				</SkillSection>

				{/* Framework Section */}
				<SkillSection className="sm:items-end">
					<SubHeading>
						<Boxes size={40} />
						{t("frameworks")}
					</SubHeading>
					<SkillGrid className="">
						<DotnetcoreOriginal size={60} />
						<UnityOriginal size={60} />
						<ReactOriginal size={60} />
						<NextjsOriginal size={60} />
						<VuejsOriginal size={60} />
						<TailwindcssOriginal size={60} />
						<JestPlain size={60} />
					</SkillGrid>
				</SkillSection>
				{/* </div> */}

				{/* Database Section */}
				<SkillSection>
					<SubHeading>
						<Database />
						{t("database")}
					</SubHeading>
					<SkillGrid>
						<MicrosoftsqlserverOriginal size={60} />
						<PostgresqlOriginal size={60} />
					</SkillGrid>
				</SkillSection>

				{/* Tools Section */}
				<SkillSection className="sm:items-end">
					<SubHeading>
						<Wrench />
						{t("tools")}
					</SubHeading>
					<SkillGrid>
						<GitOriginal size={64} />
						<SourcetreeOriginal size={64} />
						<VisualstudioOriginal size={64} />
						<VscodeOriginal size={64} />
					</SkillGrid>
				</SkillSection>
			</div>
		</article>
	);
};

export default Skills;
