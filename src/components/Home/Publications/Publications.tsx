import Link from "@/components/Global/Link";

const publications = [
	{
		title: "Predicting Clinician Fixations on Glaucoma OCT Reports via CNN-Based Saliency Prediction Methods",
		journal: "IEEE Engineering",
		date: "2024",
		url: "https://doi.org/10.1109/OJEMB.2024.3367492",
	},
	{
		title: "Deep Learning Enables Reduced Gadolinium Dose for Contrast-Enhanced Blood-Brain Barrier Opening",
		journal: "arXiv",
		date: "2023",
		url: "https://arxiv.org/abs/2301.07248",
	},
	{
		title: "Segmentation with Residual Attention U-Net and an Edge-Enhancement Approach Preserves Cell Shape Features",
		journal: "IEEE Engineering",
		date: "2022",
		url: "https://doi.org/10.1109/EMBC48229.2022.9871026",
	},
	{
		title: "A Rapid Single-Cell Antimicrobial Susceptibility Testing Workflow for Bloodstream Infections",
		journal: "Biosensors",
		date: "2021",
		url: "https://doi.org/10.3390/bios11080288",
	},
];

const Publications = () => {
	return (
		<div className='body md:space-y-15 space-y-5 pt-5'>
			{/* header for mobile (delayed) */}
			<div className='sm:invisible sm:-mt-5 h-0'>
				<p className="font-bold underline">PUBLICATIONS</p>
			</div>
			{/* header for desktop (shows up immediately) */}
			<p className='invisible -mt-15 h-0 sm:h-5 sm:visible font-bold underline'>PUBLICATIONS</p>
			<ul className='space-y-5'>
				{publications.map((pub, idx) => (
					<li key={pub.url} className="space-y-1">
						<span className="inline-flex items-center">
							<Link
								text={String(idx + 1).padStart(2, '0')}
								href={pub.url}
								className="text-slate-500 font-bold"
							/>
							{/* <span className="ml-1">→</span> */}
						</span>
						<div className="font-bold">{pub.title}</div>
						<div className="italic">{pub.journal}</div>
						<div className="text-xs">{pub.date}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Publications;
