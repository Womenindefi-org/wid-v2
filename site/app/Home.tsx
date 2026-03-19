import { CTA } from '@/components/common';
import {
	AboutOverview,
	DonationCTA,
	ImpactStats,
	PartnershipCTA,
} from '@/components/about';
import { PartnerLogoStrip } from '@/components/partners';
import { TestimonialCarousel } from '@/components/testimonials';
import { Hero, NewsCarousel } from '@/components/home';

export default function Home() {
	return (
		<>
			<Hero />

			<AboutOverview />

			<ImpactStats />

			<PartnershipCTA />

			<PartnerLogoStrip />

			<DonationCTA />

			<TestimonialCarousel />

			<CTA
				title='Tired of building alone?'
				content={`Success in Web3 shouldn't be solitary. Join Women in DeFi: a
					supportive community dedicated to seeing every woman succeed. Connect with
					builders, unlock exclusive resources, and collaboratively shape a more
					equitable industry future.`}
				cta={{
					text: 'Join the Sisterhood',
					url: 'https://forms.gle/sVHUHnF9bz42BJui7',
				}}
			/>

			<NewsCarousel />
		</>
	);
}
