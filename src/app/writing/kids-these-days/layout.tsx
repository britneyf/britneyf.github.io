import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kids These Days | Britney Forsyth",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
