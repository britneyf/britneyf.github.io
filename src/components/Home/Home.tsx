import React from "react";
import Intro from "./Intro";
import Past from "./Past/Past";
import Publications from "./Publications/Publications";
import WorkExperience from "./WorkExperience/WorkExperience";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-20 sm:p-8">
			<div className="z-10 w-full max-w-7xl items-start justify-between sm:flex sm:gap-20">
				<div className="sm:w-1/5 max-w-xs pb-20 sm:sticky sm:top-0">
					<Intro />
				</div>
				{/* divider line that only shows up on xs screens like mobile */}
				<div
					className="sm:invisible sm:w-0 sm:mt-0 sm:mb-0 -mt-10 mb-10 w-full border-b border-slate-500"
				/>
				<div className="flex flex-col text-left sm:mb-0 flex-1 gap-10">
					<WorkExperience />
					<Past />
					<Publications />
				</div>
			</div>
		</main>
	);
}
