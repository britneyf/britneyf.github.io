import React from "react";
import ScrambleText from "../../Global/ScrambleText";
import PastList from "./PastList";

const Past = () => {
	return (
		<div className="body md:space-y-15 space-y-5 pt-5 max-w-xs">
			{/* header for mobile (delayed) */}
			<div className="sm:invisible sm:-mt-5 h-0">
				<p className="font-bold underline">PROJECTS</p>
			</div>
			{/* header for desktop (shows up immediately) */}
			<p className="invisible -mt-15 h-0 sm:h-5 sm:visible font-bold underline">PROJECTS</p>
			<ul className="space-y-5">
				{PastList.map((Component, index) => (
					<Component key={index} />
				))}
			</ul>
		</div>
	);
};

export default Past;
