"use client";
import Home from "@/components/Home/Home";
import { generateStructuredData } from "./structured-data";

export default function Index() {
	return (
		<div>
			<Home />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateStructuredData()),
				}}
			/>
		</div>
	);
}
