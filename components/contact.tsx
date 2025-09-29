import { useTranslations } from "next-intl";
import React from "react";
import Heading from "./heading/heading";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
	const t = useTranslations("Contact");

	return (
		<article
			id="contact"
			className="w-full lg:w-7/10 xl:w-3/5 2xl:w-1/2 m-auto flex flex-col gap-4 justify-start items-start self-start py-12 px-0 md:px-8"
		>
			<Heading>{t("heading")}</Heading>

			<div className="w-full flex justify-between items-center px-4 py-8">
				<div className="flex gap-4 items-center">
					<p className="text-2xl font-semibold text-foreground/80">
						{t("socials")}:{" "}
					</p>
					<div className="flex gap-2 items-center">
						<SocialIcon url="https://github.com/Niloy28" />
						<SocialIcon url="https://www.linkedin.com/in/farhan-ishrak-islam-26a7111b1/" />
						<SocialIcon url="https://niloy28.itch.io/" />
					</div>
				</div>
				<a
					className="w-28"
					aria-label="Send mail to Farhan Ishrak Islam"
					href="mailto:niloy28@live.com"
				>
					<Button className="w-full font-semibold px-6 py-8 flex hover:cursor-pointer">
						<Mail size={64} className="w-16" /> <p>{t("mail")}</p>
					</Button>
				</a>
			</div>
		</article>
	);
};

export default Contact;
