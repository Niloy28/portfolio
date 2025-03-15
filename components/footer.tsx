import { Copyright, Mail } from "lucide-react";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
	return (
		<footer className="flex flex-col gap-4 justify-center items-center p-8 pb-12">
			<div className="flex flex-col sm:flex-row justify-center items-center gap-2 font-bold text-foreground/50">
				<p className="flex gap-2">
					Copyright <Copyright /> {new Date().getFullYear()} Farhan Ishrak
					Islam.
				</p>
				<p>All Rights Reserved.</p>
			</div>
			<div className="flex items-center gap-2">
				<SocialIcon url="https://www.linkedin.com/in/farhan-ishrak-islam-26a7111b1/" />
				<SocialIcon url="https://github.com/Niloy28" />
				<a href="mailto:niloy28@live.com">
					<Mail size={48} className="rounded-full bg-foreground/40 p-3" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
