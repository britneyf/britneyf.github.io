import WorkExperienceList from "./WorkExperienceList";

const WorkExperience = () => {
	return (
		<div className="body md:space-y-15 space-y-5 pt-5">
			{/* header for mobile (delayed) */}
			<div className="sm:invisible sm:-mt-5 h-0">
				<p className="font-bold underline">WORK EXPERIENCE</p>
			</div>
			{/* header for desktop (shows up immediately) */}
			<p className="invisible -mt-15 h-0 sm:h-5 sm:visible font-bold underline">WORK EXPERIENCE</p>
			<ul className="space-y-5">
				{WorkExperienceList.map((Component: React.FC, index: number) => (
					<Component key={index} />
				))}
			</ul>
		</div>
	);
};

export default WorkExperience;
