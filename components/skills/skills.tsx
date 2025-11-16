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
import JqueryOriginal from "devicons-react/icons/JqueryOriginal";
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
import Heading from "../heading/heading";
import SubHeading from "../heading/subheading";
import SkillGrid from "./skill-grid";
import SkillSection from "./skill-section";
import SkillHoverCard from "./skill-hover-card";
import SkillIcon from "./skill-icon";

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
						<SkillHoverCard name="C#" experience={2}>
							<SkillIcon>
								<CsharpOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="HTML" experience={2}>
							<SkillIcon>
								<Html5Original size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="CSS" experience={2}>
							<SkillIcon>
								<Css3Original size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="JavaScript" experience={2}>
							<SkillIcon>
								<JavascriptOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="TypeScript" experience={0}>
							<SkillIcon>
								<TypescriptOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="C++" experience={0}>
							<SkillIcon>
								<CplusplusOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="Python" experience={0}>
							<SkillIcon>
								<PythonOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
					</SkillGrid>
				</SkillSection>

				{/* Framework Section */}
				<SkillSection className="sm:items-end">
					<SubHeading>
						<Boxes size={40} />
						{t("frameworks")}
					</SubHeading>
					<SkillGrid>
						<SkillHoverCard name=".NET & ASP.NET" experience={2}>
							<SkillIcon>
								<DotnetcoreOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="jQuery" experience={1.5}>
							<SkillIcon>
								<JqueryOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="Unity" experience={12}>
							<SkillIcon>
								<UnityOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="React" experience={12}>
							<SkillIcon>
								<ReactOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="Jest" experience={6}>
							<SkillIcon>
								<JestPlain size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="Next.js" experience={0}>
							<SkillIcon>
								<NextjsOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="Vue.js" experience={0}>
							<SkillIcon>
								<VuejsOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="TailwindCSS" experience={0}>
							<SkillIcon>
								<TailwindcssOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
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
						<SkillHoverCard name="Microsoft SQL Server" experience={9}>
							<SkillIcon>
								<MicrosoftsqlserverOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="PostgreSQL" experience={0}>
							<SkillIcon>
								<PostgresqlOriginal size={60} />
							</SkillIcon>
						</SkillHoverCard>
					</SkillGrid>
				</SkillSection>

				{/* Tools Section */}
				<SkillSection className="sm:items-end">
					<SubHeading>
						<Wrench />
						{t("tools")}
					</SubHeading>
					<SkillGrid>
						<SkillHoverCard name="Git" experience={2.5}>
							<SkillIcon>
								<GitOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="SourceTree" experience={1.5}>
							<SkillIcon>
								<SourcetreeOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="Visual Studio" experience={1.5}>
							<SkillIcon>
								<VisualstudioOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
						<SkillHoverCard name="Visual Studio Code" experience={12}>
							<SkillIcon>
								<VscodeOriginal size={64} />
							</SkillIcon>
						</SkillHoverCard>
					</SkillGrid>
				</SkillSection>
			</div>
		</article>
	);
};

export default Skills;
