/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { Button, CTA, HeroV2 } from '@/components/common';
import { SuccessStories } from '@/components/programs';
import { cn } from '@/lib/utils';

const Mentor = () => {
	return (
		<>
			<HeroV2 bgUrl='programs-hero-img.png'>
				<h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold md:font-medium tracking-[0.96px] md:tracking-[1.6px] text-white'>
					Be A Mentor
				</h1>
				<h4 className='text-[1rem] md:text-[1.25rem] font-normal mb-3 md:mb-5 tracking-[0.64px] md:tracking-[.8px] text-white'>
					Learn. Build. Lead.
				</h4>
				<p className='text-white leading-5 md:leading-8 font-normal text-[0.75rem] md:text-[1rem] max-w-full md:max-w-260 mx-auto text-center'>
					Have you successfully navigated the complexities of Web3, DeFi, or the
					broader tech industry? Your experience is invaluable. Mentoring is the most
					direct way to accelerate the careers of aspiring women who are ready to
					build, but just need a guiding voice.
				</p>
			</HeroV2>

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-[5rem_11.25rem]'>
				<div className='max-w-350 flex flex-col md:flex-col-reverse lg:flex-row gap-6 md:gap-10 items-start mx-auto'>
					<img
						src='/images/programs-img-7.png'
						alt='Meet The Mentors'
						className='w-full lg:w-77 rounded-xl md:rounded-[1.25rem]'
					/>
					<div className='flex-1 w-full'>
						<h3 className='text-[1.25rem] md:text-[2.5rem] tracking-[0.75px] md:tracking-[1.2px] text-center md:text-left font-semibold md:font-medium mb-3 md:mb-4'>
							Become A Mentor
						</h3>
						<p
							className={cn(
								inter?.className,
								'text-black leading-5! md:leading-8! mb-4 md:mb-5 text-justify font-normal text-[0.75rem] md:text-[1rem]',
							)}
						>
							Women in DeFi is recruiting mentors to join our academy programs
							dedicated to supporting African women pursuing careers in Web3. This
							initiative provides an opportunity to develop leadership and coaching
							skills while creating a lasting impact on the next generation of women in
							Web3. Mentors will be recognized publicly and awarded a certificate of
							contribution. We are seeking mid- to senior-level professionals with at
							least three years of experience in any of our program tracks, who are
							committed to active participation and comfortable with virtual mentorship
							and communication.
						</p>
						<Button
							url='https://forms.gle/EAa441K38eoMcVtQ8'
							className='p-[.75rem_1.5rem] mx-auto md:ml-0 md:p-[1.25rem_2.5rem] w-fit'
						>
							Apply Here
						</Button>
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

export default Mentor;
