import Image from "next/image";
import React from "react";
import Profile from "@/public/profile_minified.jpg";
import { useTranslations } from "next-intl";

const Hero = () => {
	const t = useTranslations("Hero");

	return (
		<>
			<div className="w-80 h-80 md:w-96 md:h-96">
				<Image
					className="rounded-full max-w-full h-full border-4 border-black dark:border-white object-cover"
					src={Profile}
					alt="Farhan Ishrak Islam"
					width={384}
					height={384}
				/>
			</div>
			<p className="pt-10 text-3xl text-center font-semibold px-12">
				{t("description")}
			</p>
		</>
	);
};

export default Hero;
