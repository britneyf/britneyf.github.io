import React from "react";
import Link from "@/components/Global/Link";

const Project1 = () => (
	<li>
		<a href="/projects/kndrd" className="text-slate-500 font-bold underline mr-2">01</a>
		<div className="font-bold">Kndrd</div>
		<div>Co-founder/CTO. Built a platform for co-living, featured in Business Insider and backed by top tech leaders.</div>
	</li>
);

const Project2 = () => (
	<li>
		<a href="/projects/fintech-unbanked" className="text-slate-500 font-bold underline mr-2">02</a>
		<div className="font-bold">Fintech for the Unbanked</div>
		<div>Developed award-winning software to improve financial access, won World Series of Innovation.</div>
	</li>
);

const Project3 = () => (
	<li>
		<a href="/projects/voice-app" className="text-slate-500 font-bold underline mr-2">03</a>
		<div className="font-bold">Voice App for the Visually Impaired</div>
		<div>Created an NLP-based app recognized by U.S. Congress for accessibility innovation.</div>
	</li>
);

const Project4 = () => (
	<li>
		<a href="/projects/nyt-poetry" className="text-slate-500 font-bold underline mr-2">04</a>
		<div className="font-bold">NYT Poetry & Awards</div>
		<div>Published in the New York Times; youngest Atlanta Review International Poetry Award recipient.</div>
	</li>
);

const Project5 = () => (
	<li>
		<a href="/projects/sxsw-fusion" className="text-slate-500 font-bold underline mr-2">05</a>
		<div className="font-bold">SXSW Fusion Reactor</div>
		<div>Spoke at SXSW about building a nuclear fusion reactor in my garage at 17.</div>
	</li>
);

const Project6 = () => (
	<li>
		<a href="/projects/forthcoming" className="text-slate-500 font-bold underline mr-2">06</a>
		<div className="font-bold">Forthcoming</div>
		<div>forthcoming (2025)</div>
	</li>
);

const PastList = [Project1, Project2, Project3, Project4, Project5, Project6];

export default PastList;
