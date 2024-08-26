import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/whitepaper`,
			lastModified: new Date(),
		},
	];
}
