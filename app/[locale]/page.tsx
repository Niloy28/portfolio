import Hero from "@/components/hero";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<div className="flex flex-col items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Hero />
		</div>
	);
}
