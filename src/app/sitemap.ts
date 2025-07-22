import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://britneyforsyth.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://britneyforsyth.com/profile.jpg",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://britneyforsyth.com/opengraph-image.png",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		// ... other pages
	];
}
