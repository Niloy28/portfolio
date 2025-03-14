import React from "react";

const SubSubHeading = ({ children }: { children: React.ReactNode }) => {
	return (
		<h4 className="text-xl font-semibold flex justify-between items-center pb-2">
			{children}
		</h4>
	);
};

export default SubSubHeading;
