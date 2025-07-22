export const generateStructuredData = () => {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Britney Forsyth",
		url: "https://britneyforsyth.com",
		sameAs: ["https://linkedin.com/in/britney-forsyth", "https://github.com/britneyf"],
		jobTitle: "Data Scientist, Machine Learning Engineer",
		description: "Britney Forsyth is an 19-year-old startup founder and developer building in the machine learning space.",
		image: {
			"@type": "ImageObject",
			url: "https://britneyforsyth.com/profile.jpg",
			width: "135",
			height: "180",
			caption: "Britney Forsyth",
		},
	};
};
