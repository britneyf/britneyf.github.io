"use client";
import Link from "@/components/Global/Link";
import { lists } from "@/constants/lists";
import ScrambleText from "@/components/Global/ScrambleText";

export default function Lists() {
	return (
		<div>
			<div className="flex min-h-screen flex-col items-start justify-start p-20 sm:p-8 font-mono text-sm">
				<a href="/" className="body pb-7">
					<ScrambleText text="[ ← back to home ]" />
				</a>
				<div className="pb-10">
					<ScrambleText text="FAVORITES I'VE COLLECTED THROUGH 19 YEARS OF LIVING" settings={{ speed: 1, tick: 5 }} />
				</div>
				<div className="grid sm:grid-cols-[65px_1fr] gap-x-10 sm:gap-y-10 gap-y-5">
					{lists.map((section, index) => (
						<div key={index} className="contents">
							<p className="text-slate-500 italic">{section.title}</p>
							<div className="flex flex-col pb-5 sm:pb-0">
								{section.items.map((item, itemIndex) => (
									<div key={itemIndex}>
										{item.link ? <Link text={item.text} href={item.link} /> : item.text}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="pt-10">
					<Link text="send me recs!" href="mailto:britneyforsyth@stanford.edu?subject=things%20i%20love%20that%20you%20should%20check%20out%20too%20:)" />
				</div>
			</div>
		</div>
	);
}
