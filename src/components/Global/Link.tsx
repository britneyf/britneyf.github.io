import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const CustomLink = ({ text, href, className }: { text: string; href: string; className?: string }) => {
	const isInternalLink = href.startsWith("/");

	if (isInternalLink) {
		return (
			<Link href={href} className={`${className} inline`}>
				<span className="inline link">{text}</span>
				<span className="whitespace-nowrap">
					&nbsp;
					<ArrowUpRightIcon className="inline h-3.5 w-3.5" />
				</span>
			</Link>
		);
	}

	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className={`${className} inline`}>
			<span className="inline link">{text}</span>
			<span className="whitespace-nowrap">
				&nbsp;
				<ArrowUpRightIcon className="inline h-3.5 w-3.5" />
			</span>
		</a>
	);
};

export default CustomLink;
