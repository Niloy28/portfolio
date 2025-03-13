import React from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "./ui/navigation-menu";
import NavLink from "./nav-link";
import ThemeToggle from "./theme-toggle";
import LocaleSelect from "./locale-select";

const NavBar = () => {
	return (
		<NavigationMenu className="pt-10 min-w-full font-bold flex justify-between">
			<NavigationMenuList className="pl-4 flex justify-center items-center gap-4">
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
			<NavigationMenuList className="pr-4 flex gap-4">
				<ThemeToggle />
				<LocaleSelect />
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavBar;
