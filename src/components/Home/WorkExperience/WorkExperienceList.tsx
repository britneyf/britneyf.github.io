import React from "react";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<li>
		<Link text="01" href="/work/mskcc" className="text-slate-500 font-bold" />
		<div className="font-bold">MEMORIAL SLOAN KETTERING CANCER CENTER</div>
		<div>Jan 2023 - June 2025</div>
		<div>New York, NY</div>
		<div>I built tools to study colorectal cancer.</div>
	</li>
);

const Item2 = () => (
	<li>
		<Link text="02" href="/work/columbia" className="text-slate-500 font-bold" />
		<div className="font-bold">COLUMBIA UNIVERSITY</div>
		<div>Sep 2021 – Dec 2022</div>
		<div>New York, NY</div>
		<div>I trained AI to predict what people look at.</div>
	</li>
);

const Item3 = () => (
	<li>
		<Link text="03" href="/work/nih-2021" className="text-slate-500 font-bold" />
		<div className="font-bold">NATIONAL INSTITUTES OF HEALTH</div>
		<div>May 2021 – Aug 2021</div>
		<div>Bethesda, MD</div>
		<div>I built algorithms to predict stroke severity from brain scans.</div>
	</li>
);

const Item4 = () => (
	<li>
		<Link text="04" href="/work/psu" className="text-slate-500 font-bold" />
		<div className="font-bold">PENNSYLVANIA STATE UNIVERSITY</div>
		<div>Dec 2017 – May 2021</div>
		<div>University Park, PA</div>
		<div>I designed microfluidic chips to diagnose infections faster.</div>
	</li>
);

const Item5 = () => (
	<li>
		<Link text="05" href="/work/nih-2019" className="text-slate-500 font-bold" />
		<div className="font-bold">NATIONAL INSTITUTES OF HEALTH</div>
		<div>May 2019 – Aug 2019</div>
		<div>Bethesda, MD</div>
		<div>I improved MRI image quality for better brain research.</div>
	</li>
);

const WorkExperienceList = [Item1, Item2, Item3, Item4, Item5];

export default WorkExperienceList;
