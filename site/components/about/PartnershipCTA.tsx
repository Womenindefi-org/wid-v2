/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { Button } from '../common';

const PartnershipCTA = () => {
	return (
		<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20 lg:py-30'>
			<div className='max-w-350 mx-auto'>
				<div className='flex md:flex-col flex-col-reverse lg:flex-row items-center gap-3.5 md:gap-10'>
					<div className='flex-1 w-full'>
						<h2 className='text-[1.25rem] md:text-[2.5rem] text-center md:text-left text-black mb-2 md:mb-5 font-medium'>
							Powering Change Through Collaboration
						</h2>
						<p
							className={`leading-4.5 md:leading-8 text-[0.75rem] md:text-[1rem] mb-4 md:mb-5 text-justify font-normal ${inter.className}`}
						>
							We believe the future of finance is built on connection, not just code or
							straategies. At Women in DeFi, we know that we can&apos;t build a truly
							inclusive decentralized world alone, it takes friends, allies, and shared
							passion. That&apos;s why we pour energy into meaningful partnerships. We
							link arms with amazing industry leaders, innovative tech projects, and
							organizations that share our belief in women&apos;s potential in
							Blockchain and DeFi.
						</p>
						<Button
							url='/partner'
							target='_self'
							className='p-[.75rem_1.5rem] mx-auto md:ml-0 md:p-[1.25rem_2.5rem] w-fit'
						>
							Partner with Us
						</Button>
					</div>
					<img
						alt='About Image 6'
						className='md:flex-1 object-cover object-top h-70 lg:h-full w-full rounded-xl md:rounded-[1.25rem]'
						src={'/images/about-img-6.png'}
					/>
				</div>
			</div>
		</section>
	);
};

export { PartnershipCTA };
