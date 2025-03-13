"use client";

import React, { useTransition } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

const LocaleSelect = () => {
	const t = useTranslations("LocaleSelect");
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	const onSelectChange = (nextLocale: string) => {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	};

	return (
		<Select disabled={isPending} onValueChange={onSelectChange}>
			<SelectTrigger>
				<SelectValue placeholder={t("locale", { locale })} />
			</SelectTrigger>
			<SelectContent>
				{routing.locales.map((cur) => (
					<SelectItem key={cur} value={cur}>
						{t("locale", { locale: cur })}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default LocaleSelect;
