import { Metadata } from 'next';
import HomePage from './Home';

export const metadata: Metadata = {
	metadataBase: new URL('https://womenindefi.org'),
	title: {
		default: 'Women in DeFi | Empowering Women Globally',
		template: '%s | Women in DeFi',
	},
	description: `Women in DeFi is dedicated to empowering women globally through decentralized finance education, advocacy, and community growth. Join us in transforming the financial world through Web3 and blockchain technology.`,
	applicationName: 'Women in DeFi',
	authors: [
		{ name: 'Women in DeFi Team', url: 'https://womenindefi.org' },
		{ name: 'Women in DeFi Organization', url: 'https://womenindefi.org' },
	],
	generator: 'Next.js',
	keywords: [
		// Core mission
		'women in defi',
		'women in blockchain',
		'women in crypto',
		'women in web3',
		'women empowerment',
		'women in tech',
		'women in fintech',

		// Education & Community
		'defi education for women',
		'blockchain education',
		'crypto literacy for women',
		'decentralized finance education',
		'web3 education',
		'blockchain training programs',
		'defi training programs',
		'crypto communities for women',
		'blockchain mentoring for women',
		'women supporting women in crypto',

		// DeFi & Technology
		'decentralized finance',
		'DeFi communities',
		'blockchain technology',
		'cryptocurrency education',
		'digital assets',
		'decentralized applications',
		'smart contracts',
		'digital currencies',

		// Leadership & Advocacy
		'female blockchain leaders',
		'women in technology leadership',
		'women entrepreneurs in crypto',
		'female crypto advocates',
		'women-led crypto projects',
		'female investors in crypto',
		'gender equality in blockchain',
		'gender diversity in fintech',

		// Regional Focus
		'africa defi',
		'nigeria web3',
		'women in emerging tech',
		'inclusive finance',
		'financial inclusion',

		// Investment & Finance
		'women in investment',
		'women in financial technology',
		'women in digital assets',
		'defi for women',
		'blockchain for women',

		// Community & Networking
		'defi networking',
		'women in cryptocurrency education',
		'blockchain communities',
		'web3 communities',
		'crypto advocacy',
	],
	creator: 'Women in DeFi',
	publisher: 'Women in DeFi',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://womenindefi.org',
	},
	icons: {
		icon: [
			{
				url: 'https://womenindefi.org/seo/wid.ico',
				type: 'image/x-icon',
			},
		],
		shortcut: 'https://womenindefi.org/seo/wid.ico',
		apple: [
			{
				url: 'https://womenindefi.org/seo/wid.ico',
				type: 'image/x-icon',
			},
		],
	},
	openGraph: {
		type: 'website',
		url: 'https://womenindefi.org',
		title: 'Women in DeFi | Empowering Women Globally',
		description:
			'Women in DeFi is dedicated to empowering women globally through decentralized finance education, advocacy, and community growth. Join us in transforming the financial world.',
		siteName: 'Women in DeFi',
		images: [
			{
				url: 'https://womenindefi.org/seo/seo-img.jpg',
				width: 1200,
				height: 630,
				alt: 'Women in DeFi - Empowering Women Through Blockchain & DeFi',
				type: 'image/jpeg',
			},
		],
		locale: 'en_US',
		alternateLocale: ['en_GB', 'en_CA', 'en_AU', 'en_NG'],
		countryName: 'Global',
		emails: ['info@womenindefi.org'],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@womenindefi_org',
		creator: '@womenindefi_org',
		title: 'Women in DeFi | Empowering Women Globally',
		description:
			'Join Women in DeFi and discover how decentralized finance is transforming the financial world for women globally through education, advocacy, and community.',
		images: {
			url: 'https://womenindefi.org/seo/seo-img.jpg',
			alt: 'Women in DeFi | Empowering Women Globally',
			width: 1200,
			height: 630,
			type: 'image/jpeg',
		},
	},
	category: 'Education',
	classification: 'Non-Profit Organization & Educational Platform',
	referrer: 'strict-origin-when-cross-origin',
	other: {
		// Robots meta tags
		robots:
			'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
		googlebot:
			'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
		'google-site-verification': 'your-google-site-verification-code-here',

		// OpenGraph extended properties
		'og:site_name': 'Women in DeFi',
		'og:locale:alternate': 'en_GB',
		'og:updated_time': new Date().toISOString(),
		'og:email': 'info@womenindefi.org',

		// Twitter Card extended
		'twitter:domain': 'womenindefi.org',
		'twitter:url': 'https://womenindefi.org',
		'twitter:label1': 'Organization Type',
		'twitter:data1': 'Education & Community Empowerment',
		'twitter:label2': 'Focus Areas',
		'twitter:data2': 'DeFi Education, Advocacy, Community Growth',

		// Mobile & PWA optimization
		'theme-color': '#8B5CF6',
		'msapplication-TileColor': '#8B5CF6',
		'msapplication-navbutton-color': '#8B5CF6',
		'msapplication-starturl': '/',
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-status-bar-style': 'black-translucent',
		'apple-mobile-web-app-title': 'Women in DeFi',
		'mobile-web-app-capable': 'yes',
		'application-name': 'Women in DeFi',
		HandheldFriendly: 'True',
		MobileOptimized: '320',

		// Organization specific meta tags
		'organization:mission': 'empowering-women-through-defi-education',
		'organization:focus': 'education,advocacy,community,blockchain,web3',
		'organization:scope': 'global',
		'organization:type': 'non-profit-educational',

		// SEO enhancement tags
		rating: 'general',
		distribution: 'global',
		'revisit-after': '3 days',
		expires: 'never',
		'content-language': 'en',
		'geo.region': 'Global',
		'geo.placename': 'Worldwide',

		// Article/Content properties
		'article:publisher': 'https://womenindefi.org',
		'article:section': 'Education & Community',
		'article:tag':
			'women-empowerment,defi-education,blockchain,web3,crypto-literacy',
		'article:modified_time': new Date().toISOString(),

		// Security headers
		referrer: 'strict-origin-when-cross-origin',
		'x-frame-options': 'SAMEORIGIN',
		'x-content-type-options': 'nosniff',

		// Schema.org structured data
		'schema:WebSite': JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'Women in DeFi',
			alternateName: 'WiD - Women in Decentralized Finance',
			url: 'https://womenindefi.org',
			description:
				'Women in DeFi is dedicated to empowering women globally through decentralized finance education, advocacy, and community growth',
			potentialAction: {
				'@type': 'SearchAction',
				target: 'https://womenindefi.org/search?q={search_term_string}',
				'query-input': 'required name=search_term_string',
			},
			sameAs: [
				'https://twitter.com/womenindefi_org',
				'https://www.instagram.com/womenindefi_org/',
				'https://www.linkedin.com/company/womenindefi/',
				'https://youtube.com/@womenindefi',
				'https://www.facebook.com/womenindefi',
			],
		}),

		'schema:Organization': JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Women in DeFi',
			alternateName: 'WiD',
			url: 'https://womenindefi.org',
			logo: 'https://womenindefi.org/seo/seo-img.jpg',
			description:
				'Women in DeFi is dedicated to empowering women globally through decentralized finance education, advocacy, and community growth',
			foundingDate: '2019',
			contactPoint: {
				'@type': 'ContactPoint',
				contactType: 'customer service',
				email: 'info@womenindefi.org',
			},
			sameAs: [
				'https://twitter.com/womenindefi_org',
				'https://www.instagram.com/womenindefi_org/',
				'https://www.linkedin.com/company/womenindefi/',
				'https://youtube.com/@womenindefi',
				'https://www.facebook.com/womenindefi',
			],
			areaServed: 'Worldwide',
			knowsAbout: [
				'Decentralized Finance',
				'Blockchain Technology',
				'Cryptocurrency',
				'Web3',
				'Financial Education',
				'Women Empowerment',
			],
		}),

		'schema:EducationalOrganization': JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'EducationalOrganization',
			name: 'Women in DeFi',
			url: 'https://womenindefi.org',
			description:
				'Providing education and advocacy for women in decentralized finance, blockchain, and Web3 technologies',
			educationalCredentialAwarded: 'DeFi & Blockchain Education',
			offers: {
				'@type': 'Offer',
				category: 'Educational Programs',
				description:
					'Free and accessible DeFi education, mentorship, and community support for women globally',
			},
		}),

		// Business/commercial tags
		'business:contact_data:email': 'info@womenindefi.org',
		'business:contact_data:country_name': 'Global',

		// Verification and ownership
		author: 'Women in DeFi Team',
		owner: 'Women in DeFi',
		'reply-to': 'info@womenindefi.org',
		copyright: `© ${new Date().getFullYear()} Women in DeFi. All rights reserved.`,

		// Additional OpenGraph
		'og:country-name': 'Global',

		// Additional Twitter properties
		'twitter:app:name:iphone': 'Women in DeFi',
		'twitter:app:name:ipad': 'Women in DeFi',
		'twitter:app:name:googleplay': 'Women in DeFi',

		// Custom app-specific properties
		'womenindefi:version': '2.0.0',
		'womenindefi:environment': process.env.NODE_ENV || 'production',
		'womenindefi:mission':
			'empowering-women-through-defi-education-advocacy-community',
		'womenindefi:focus-areas':
			'education,mentorship,advocacy,community-building,blockchain,web3',
	},
};

export default HomePage;
