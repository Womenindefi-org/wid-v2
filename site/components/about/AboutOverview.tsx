/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { Icon } from '@iconify/react';

const AboutOverview = () => {
	return (
		<section className='px-6 md:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-30'>
			<div className='max-w-350 mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-5 md:mb-20 justify-between gap-3.5 lg:gap-0'>
					<div className='w-full lg:w-155.5'>
						<h2 className='text-[1.25rem] text-center md:text-left md:text-[2.5rem] text-black mb-2 md:mb-5 font-medium'>
							About Us
						</h2>
						<p
							className={`leading-5 md:leading-8 text-[0.75rem] md:text-[1rem] text-justify self-stretch font-normal ${inter.className}`}
						>
							Women in DeFi is a pan-African nonprofit organization empowering women
							through education, access, and leadership in blockchain and decentralized
							finance. We exist to bridge the gender gap in Web3 by equipping women
							with the knowledge, skills, and confidence to lead, build, and innovate
							across the global blockchain ecosystem.
						</p>
					</div>
					<img
						alt='About Image 1'
						className='w-full lg:w-145.5 rounded-xl md:rounded-[1.25rem]'
						src={'/images/about-img-1.png'}
					/>
				</div>
				<div className='flex flex-col lg:flex-row gap-3 lg:gap-5 items-stretch'>
					{[
						{
							icon: 'hugeicons:target-01',
							title: 'Mission',
							content:
								'To educate, empower, and elevate girls and women across Africa and beyond by providing access to blockchain and DeFi education, resources, and community-driven opportunities.',
						},
						{
							icon: 'hugeicons:idea-01',
							title: 'Vision',
							content:
								'An Africa where women lead and innovate in the Web3 revolution, driving inclusion, innovation, and equity across emerging markets.',
						},
					]?.map(({ content, icon, title }, index) => (
						<div
							key={`__item__${index}`}
							className='p-3 md:p-10 bg-[#56AEFF33] flex-1 rounded-xl md:rounded-[1.25rem]'
						>
							<div className='flex gap-2 md:gap-3.25 mb-2 md:mb-5 items-center flex-col'>
								<Icon
									icon={icon}
									height='1.4375rem'
									width='1.4375rem'
									color='#0A74EF'
									className='md:w-12.5 md:h-12.5'
								/>
								<h3 className='leading-[0.6125rem] md:leading-8 text-[0.75rem] md:text-[1.25rem] font-semibold tracking-[0.015rem] md:tracking-[0.025rem]'>
									{title}
								</h3>
							</div>
							<p
								className={`text-black leading-4.5 md:leading-8 self-stretch text-[0.75rem] md:text-[1rem] tracking-[0.015rem] md:tracking-[0.02rem] text-justify font-normal`}
							>
								{content}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export { AboutOverview };
