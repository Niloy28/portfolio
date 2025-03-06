import React from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import NavLink from "./nav-link";

const NavBar = () => {
	return (
		<NavigationMenu className="m-2 p-2 pt-10 min-w-full font-bold">
			<NavigationMenuList className="flex justify-center items-center gap-4">
				<NavigationMenuItem>
					<NavLink key="projects" destination="projects" />
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavLink key="skills" destination="skills" />
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavLink key="socials" destination="socials" />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavBar;
