import Image from "next/image";
import React from "react";
import Profile from "@/public/profile_minified.jpg";
import { useTranslations } from "next-intl";

const Hero = () => {
	const t = useTranslations("Hero");

	return (
		<div className="flex flex-col md:flex-row justify-evenly items-center w-2xl md:w-2xl lg:w-4xl">
			<div className="w-full h-full">
				<Image
					className="rounded-full grow max-w-full h-full border-4 border-black dark:border-white object-cover m-auto"
					src={Profile}
					priority
					alt="Farhan Ishrak Islam"
				/>
			</div>
			<p className="sm:pt-10 md:pt-0 text-3xl text-center font-semibold px-12">
				{t("description")}
			</p>
		</div>
	);
};

export default Hero;
