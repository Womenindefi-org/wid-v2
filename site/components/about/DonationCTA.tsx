/* eslint-disable @next/next/no-img-element */
import { Button } from '../common';
import { inter } from '@/app/layout';

const DonationCTA = () => {
	return (
		<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20 lg:py-30'>
			<div className='max-w-350 mx-auto'>
				<div className='flex md:flex-col-reverse flex-col lg:flex-row items-center gap-3.5 md:gap-10'>
					<img
						className='md:flex-1 object-cover object-top h-70 lg:h-full w-full rounded-xl md:rounded-[1.25rem]'
						alt='About Image 7'
						src={'/images/about-img-7.png'}
					/>
					<div className='flex-1 w-full'>
						<h2 className='text-[1.25rem] md:text-[2.5rem] text-center md:text-left text-black mb-2 md:mb-5 font-medium'>
							Championing Women in DeFi
						</h2>
						<p
							className={`leading-4.5 md:leading-8 text-[0.75rem] md:text-[1rem] mb-4 md:mb-5 text-justify font-normal ${inter.className}`}
						>
							Helping to sponsor our events and initiatives gives us a much needed push
							to empower more African women in Blockchain technology via a donation or
							more. This donation will go a long way in supporting our numerous
							initiatives and facilitating our events and programs across several
							chapters across Africa.
						</p>
						<Button
							url='/donate'
							target='_self'
							className='p-[.75rem_1.5rem] mx-auto md:ml-0 md:p-[1.25rem_2.5rem] w-fit'
						>
							Donate Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export { DonationCTA };
