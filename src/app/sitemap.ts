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
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/first-season`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/en`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/en/nft-games`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/en/telegram-ton-games`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/en/choose-first-game`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/en/play-to-earn`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/en/ton-games`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/en/passive-income`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/ru`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/ru/nft-games`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/ru/telegram-ton-games`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/ru/choose-first-game`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/ru/play-to-earn`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/ru/ton-games`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/wiki/ru/passive-income`,
			lastModified: new Date(),
		},
	];
}
