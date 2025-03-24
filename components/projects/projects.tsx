import { useTranslations } from "next-intl";
import React from "react";
import Heading from "../heading/heading";
import ProjectDialog from "./project-dialog";

const projects: {
	title: ProjectSymbol;
	banner: string;
	pictures: {
		title: string;
		src: string;
	}[];
	link: string;
	repo: string;
}[] = [
	{
		title: "weathervue",
		banner: "/projects/weathervue/banner.png",
		pictures: [
			{
				title: "Home",
				src: "/projects/weathervue/home.png",
			},
			{
				title: "Location Search",
				src: "/projects/weathervue/location.png",
			},
			{
				title: "Weather Details",
				src: "/projects/weathervue/weather.png",
			},
		],
		link: "https://weathervue-woad.vercel.app/",
		repo: "https://github.com/Niloy28/weathervue",
	},
	{
		title: "hana-shop",
		banner: "/projects/hana-shop/banner.png",
		pictures: [
			{
				title: "Home",
				src: "/projects/hana-shop/home.png",
			},
			{
				title: "Blog",
				src: "/projects/hana-shop/blog.png",
			},
			{
				title: "Products",
				src: "/projects/hana-shop/products.png",
			},
			{
				title: "Product Details",
				src: "/projects/hana-shop/product-details.png",
			},
			{
				title: "Cart",
				src: "/projects/hana-shop/cart.png",
			},
			{
				title: "Stripe Integration",
				src: "/projects/hana-shop/stripe.png",
			},
			{
				title: "Order Success",
				src: "/projects/hana-shop/order-success.png",
			},
			{
				title: "Order Cancel",
				src: "/projects/hana-shop/order-cancel.png",
			},
			{
				title: "Dashboard",
				src: "/projects/hana-shop/dashboard.png",
			},
			{
				title: "Product Form",
				src: "/projects/hana-shop/product-form.png",
			},
			{
				title: "Banner Form",
				src: "/projects/hana-shop/banner-form.png",
			},
		],
		link: "https://hanashop.vercel.app/",
		repo: "https://github.com/Niloy28/hana-shop",
	},
	{
		title: "rhythmflow",
		banner: "/projects/rhythmflow/banner.png",
		pictures: [
			{
				title: "Home",
				src: "/projects/rhythmflow/home.png",
			},
			{
				title: "Artist View",
				src: "/projects/rhythmflow/artist-view.png",
			},
			{
				title: "Album View",
				src: "/projects/rhythmflow/album-view.png",
			},
			{
				title: "Sign In Page",
				src: "/projects/rhythmflow/sign-in.png",
			},
		],
		link: "https://rhythmflow.vercel.app/",
		repo: "https://github.com/Niloy28/rhtyhmflow",
	},
];

const Projects = () => {
	const t = useTranslations("Projects");

	return (
		<article
			id="projects"
			className="w-full lg:w-7/10 xl:w-3/5 m-auto flex flex-col gap-4 justify-start py-12 px-0 md:px-8"
		>
			<Heading>{t("heading")}</Heading>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 items-center">
				{projects.map((project, index) => (
					<ProjectDialog key={index} project={project} />
				))}
			</div>
		</article>
	);
};

export default Projects;
