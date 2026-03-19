import { CTA, HeroV2 } from '@/components/common';
import { ProgramsGrid, SuccessStories } from '@/components/programs';

const Academy = () => {
	return (
		<>
			<HeroV2 bgUrl='programs-hero-img.png'>
				<h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold md:font-medium tracking-[0.96px] md:tracking-[1.6px] text-white'>
					WID Academy
				</h1>
				<h4 className='text-[1rem] md:text-[1.25rem] font-normal mb-3 md:mb-5 tracking-[0.64px] md:tracking-[.8px] text-white'>
					Learn. Build. Lead.
				</h4>
				<p className='text-white leading-5 md:leading-8 font-normal text-[0.75rem] md:text-[1rem] max-w-full md:max-w-260 mx-auto text-center'>
					All of our programs are <b className='font-bold'>FREE</b> and thoughtfully
					crafted to empower African girls and women in the Blockchain space,
					equipping them with the essential technical, non-technical and career
					skills necessary to advance in their respective domains.
				</p>
			</HeroV2>

			<ProgramsGrid />

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

export default Academy;
