import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
	return (
		<footer className="flex flex-col gap-4 justify-center items-center p-8 pb-12">
			<div className="flex flex-col sm:flex-row justify-center items-center gap-2 font-bold text-foreground/70">
				<p className="flex gap-2">
					Copyright <Copyright /> {new Date().getFullYear()} Farhan Ishrak
					Islam.
				</p>
				<p>All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
