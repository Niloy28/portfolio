import Link from "next/link";
import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { capitalizeFirstLetter } from "@/lib/utils";

const NavLink = ({ destination }: { destination: string }) => {
	return (
		<Link href={`/${destination.toLowerCase()}`} legacyBehavior passHref>
			<NavigationMenuLink className="group text-2xl transition delay-150 ease-in-out hover:scale-110 hover:-translate-0.5">
				{capitalizeFirstLetter(destination)}
				<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600" />
			</NavigationMenuLink>
		</Link>
	);
};

export default NavLink;
