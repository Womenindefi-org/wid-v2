import { inter } from '@/app/layout';
import { Button, CTA, HeroV2 } from '@/components/common';
import { SuccessStories } from '@/components/programs';

const Initiatives = () => {
	return (
		<>
			<HeroV2 bgUrl='programs-hero-img.png'>
				<h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold md:font-medium tracking-[0.96px] md:tracking-[1.6px] text-white'>
					Our Initiatives
				</h1>
				<h4 className='text-[1rem] md:text-[1.25rem] font-normal mb-3 md:mb-5 tracking-[0.64px] md:tracking-[.8px] text-white'>
					Learn. Build. Lead.
				</h4>
				<p className='text-white leading-5 md:leading-8 font-normal text-[0.75rem] md:text-[1rem] max-w-full md:max-w-260 mx-auto text-center'>
					At Women in DeFi (WID), we are not just talking about change, we are
					investing directly in the future of African women in technology. Our
					initiatives are designed to provide both the knowledge and the tools needed
					for any woman willing and able to thrive in the Web3 space, regardless of
					her background or age.
				</p>
			</HeroV2>

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-20 gap-6 md:gap-10 lg:gap-15 transition-opacity duration-300'>
						{[
							{
								title: 'WID Goes to School',
								content: `We are committed to empowering young women in secondary and tertiary institutions with knowledge about blockchain technology, helping them understand its impact, explore its possibilities, and discover how to build meaningful careers in the field.`,
							},
							{
								title: 'Laptop Scholarship',
								content: `An initiative that recognizes and supports credible young women with laptops, helping them stay empowered and supported on their journey towards greatness.`,
								button: {
									name: 'Apply Here',
									url: 'https://giftdice.com/giveaway/d9kwmo6S5o',
								},
							},
						]?.map((item, index) => (
							<div
								key={`__item__${index}__`}
								className='rounded-xl md:rounded-[1.25rem] overflow-hidden flex flex-col bg-[#FFFFFF] aspect-auto lg:aspect-[1.39]'
							>
								<figure
									style={{
										backgroundImage: `url(/images/programs-img-${index + 5}.png)`,
									}}
									className='flex-1 min-h-40 max-h-40 lg:max-h-full lg:min-h-0 bg-cover'
								/>
								<div className='p-[1rem_.75rem] md:p-6 min-h-0 md:min-h-57.5 flex-col flex gap-1'>
									<h4 className='text-black font-medium text-[1rem] md:text-[1.25rem]'>
										{item?.title}
									</h4>
									<p
										className={`leading-5 md:leading-8 mb-3 md:mb-5 font-light text-[0.75rem] md:text-[1rem] ${inter?.className} text-justify`}
									>
										{item?.content}
									</p>
									{!!item?.button && (
										<Button
											className='w-fit'
											url={item?.button?.url as string}
										>
											{item?.button?.name}
										</Button>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<SuccessStories />

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

export default Initiatives;
