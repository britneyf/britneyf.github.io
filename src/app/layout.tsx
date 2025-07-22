import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const title = "Britney Forsyth";
const description = "Data Scientist. Machine Learning Engineer. Studied Biomedical Engineering & Mathematics at Penn State. Data Science at Columbia University.";


export const metadata: Metadata = {
	title: {
		default: title,
		template: `%s | ${title}`,
	},
	description: description,
	keywords: ["Britney Forsyth", "britney", "forsyth", "britneyforsyth", "stanford", "startup", "founder", "design", "engineer", "builder", "machine learning", "ai", "computer science", "product design"],
	authors: [{ name: "Britney Forsyth" }],
	creator: "Britney Forsyth",
	publisher: "Britney Forsyth",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: title,
		description: description,
		siteName: title,
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Britney Forsyth",
				type: "image/png",
			},
		],
		url: "https://britneyforsyth.com",
	},
	twitter: {
		title: title,
		description: description,
		images: [
			{
				url: "/twitter-image.png",
				width: 1200,
				height: 630,
				alt: "Britney Forsyth",
				type: "image/png",
			},
		],
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
		apple: [{ url: "/apple-icon.png", type: "image/png" }],
	},
	metadataBase: new URL("https://britneyforsyth.com"),
	alternates: {
		canonical: "https://britneyforsyth.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
