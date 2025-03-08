import { Link } from "@/i18n/navigation";
import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useTranslations } from "next-intl";

type NavLinkDestination = "projects" | "skills" | "socials";

const NavLink = ({ destination }: { destination: NavLinkDestination }) => {
	const t = useTranslations("NavLink");

	return (
		<Link href={`/${destination.toLowerCase()}`} legacyBehavior passHref>
			<NavigationMenuLink className="group text-2xl transition delay-150 ease-in-out hover:scale-110 hover:-translate-0.5">
				{capitalizeFirstLetter(t(destination))}
				<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600" />
			</NavigationMenuLink>
		</Link>
	);
};

export default NavLink;
