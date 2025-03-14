import React from "react";

const SubHeading = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className="text-2xl font-semibold flex gap-2 items-center pb-4">
			{children}
		</h3>
	);
};

export default SubHeading;
