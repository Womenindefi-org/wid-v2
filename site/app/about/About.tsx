/* eslint-disable @next/next/no-img-element */
import {
	AboutOverview,
	DonationCTA,
	ImpactStats,
	PartnershipCTA,
} from '@/components/about';
import { Button, CTA, HeroV2 } from '@/components/common';
import { PartnerLogoStrip } from '@/components/partners';
import { TestimonialCarousel } from '@/components/testimonials';
import { inter } from '../layout';

const About = () => {
	return (
		<>
			<HeroV2 bgUrl='about-hero-img.png'>
				<h1 className='text-white text-[1.5rem] md:text-[2.5rem] font-semibold w-full lg:w-301 mx-auto text-center'>
					Building Women Who Build the Future
				</h1>
			</HeroV2>

			<AboutOverview />

			<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-6 md:py-10 lg:py-14.5'>
				<div className='max-w-350 items-center mx-auto gap-5 md:gap-6 lg:gap-27.75 flex flex-col lg:flex-row'>
					<h4 className='text-white text-[1.25rem] md:text-[2.25rem] font-semibold lg:w-33.25 text-center lg:text-left'>
						Core Values
					</h4>
					<div className='w-45 lg:w-0.5 h-[0.6px] md:h-px lg:h-48.25 bg-white' />
					<div className='flex flex-wrap lg:flex-nowrap flex-1 justify-center lg:justify-between items-center gap-3 md:gap-4 lg:gap-6'>
						{['Integrity', 'Advocacy', 'Sustainability', 'Community']?.map(
							(item, index) => (
								<Button
									theme='secondary'
									className='p-[.75rem_1.5rem] md:p-[1rem_2rem] lg:p-[1.25rem_2.5rem] text-[0.875rem] md:text-[1rem]'
									key={`__button__${index}`}
								>
									{item}
								</Button>
							),
						)}
					</div>
				</div>
			</section>

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-black font-semibold md:font-medium text-[1.25rem] md:text-[2.5rem] text-center mb-6 md:mb-10'>
						Making a Difference: Our Approach
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-[2.5rem_3.75rem]'>
						{[
							{
								title: 'Education',
								content: `Embark on your Web3 journey by joining our academy programs, including Web3 training, Skill Up Program, and other technical training under the guidance of seasoned mentors to take you to expert level.`,
								url: '/programs/academy',
							},
							{
								title: 'Community & Chapters',
								content: `Join our community and engage with over 6000+ fellow African women in the Web3 space, hailing from various corners of the continent.`,
								url: '/community',
							},
							{
								title: 'Events',
								content: `Join us for a range of events, both online and in-person, which may include the WID Summit, Twitter spaces, webinars, etc.`,
								url: '/community/events',
							},
							{
								title: 'Initiatives',
								content: `As a non-profit organization within the Web3 ecosystem, we understand the unique challenges and barriers that come with starting or advancing a career and we try to provide support the best way we can.`,
								url: '/programs/initiatives',
							},
						]?.map((item, index) => (
							<div
								key={`__item__${index}__`}
								className='border rounded-xl md:rounded-[1.25rem] overflow-hidden flex flex-col border-[#0A74EF33]'
							>
								<figure
									style={{ backgroundImage: `url(/images/about-img-${index + 2}.png)` }}
									className='flex-1 md:min-h-40! md:max-h-40! lg:min-h-70! lg:max-h-70! max-h-35 min-h-35 bg-cover'
								/>
								<div className='p-[1rem_.75rem] flex-1 md:p-[2.5rem_1.25rem] min-h-0 md:min-h-52.5 justify-between flex-col flex gap-3 md:gap-4'>
									<div className='space-y-1 flex-1 md:space-y-2'>
										<h4 className='text-black font-medium text-[1rem] md:text-[1.25rem]'>
											{item?.title}
										</h4>
										<p
											className={`leading-5 md:leading-8 font-light text-[0.75rem] md:text-[1rem] ${inter?.className} text-justify`}
										>
											{item?.content}
										</p>
									</div>
									<Button
										url={item?.url}
										target='_self'
										variant='outlined'
										className='p-[.5rem_1rem] md:p-[.75rem_1.5rem] w-fit mx-auto md:mx-0'
										icon={{
											url: 'mdi:arrow-right',
											width: '1rem',
											height: '1rem',
										}}
									>
										Learn More
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<ImpactStats />

			<PartnershipCTA />

			<PartnerLogoStrip />

			<DonationCTA />

			<TestimonialCarousel />

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-black font-semibold md:font-medium text-[1.25rem] md:text-[2.5rem] text-center mb-2 md:mb-5'>
						Visual Chronicles
					</h2>
					<p
						className={`text-black leading-5 md:leading-8 text-[0.75rem] md:text-[1rem] text-center font-normal ${inter?.className} mb-6 md:mb-10`}
					>
						Relive the spectacular moments and amazing memories from our events.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 md:mb-10 gap-4 md:gap-6 lg:gap-10'>
						{Array.from({ length: 6 }, (_, index) => (
							<img
								key={`__image__${index}__`}
								alt={`About Image ${index + 8}`}
								src={`/images/about-img-${index + 8}.png`}
								className='rounded-xl md:rounded-[1.25rem] overflow-hidden w-full h-auto object-cover'
							/>
						))}
					</div>
					<Button
						icon={{
							url: 'hugeicons:arrow-right-01',
							width: '1.5rem',
							height: '1.5rem',
						}}
						url='https://drive.google.com/drive/folders/120BcAwmfE7V3zL8b0ldZ7Dx5o-d-FSdh'
						className='p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] mx-auto w-fit'
						variant='outlined'
					>
						View More
					</Button>
				</div>
			</section>

			<CTA
				title='Recruit Top Web3 Professionals'
				content={`Connect with and recruit top-tier Web3 professionals whose technical skill and proficiency are matched by unwavering integrity and ethical standards.`}
				cta={{
					text: 'Hire Our Talent',
					target: '_self',
					url: '/hire-talent',
				}}
			/>
		</>
	);
};

export default About;
