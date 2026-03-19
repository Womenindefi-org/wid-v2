/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { PreviousEvents, UpcomingEvents } from '@/components/events';
import { SuccessStories } from '@/components/programs';
import { cn } from '@/lib/utils';

const Events = () => {
	return (
		<>
			<section className='pt-20 lg:pt-39 bg-white'>
				<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-fullx2.png)] bg-center bg-cover py-8 md:py-20'>
					<div className='max-w-350 flex flex-col-reverse lg:flex-row gap-6 md:gap-10 lg:gap-20 items-center mx-auto'>
						<div className='flex-1 w-full'>
							<h1 className='text-[1.5rem] text-center md:text-left md:text-[2.5rem] font-semibold mb-3 md:mb-4'>
								Where Change Happens
							</h1>
							<p
								className={cn(
									inter?.className,
									'mx-auto text-center md:text-left leading-5 md:leading-8 mb-4 md:mb-5 font-normal text-[0.75rem] md:text-[1rem]'
								)}
							>
								We are committed to reaching audacious women across Africa looking to
								network, collaborate, and learn. <br />
								Check our schedule to stay updated on all our major physical and virtual
								events across Africa. <br />
								Don&apos;t wait for <b className='font-semibold'>permission</b> to{' '}
								<b className='font-semibold'>lead</b>. Find your{' '}
								<b className='font-semibold'>momentum with WID.</b>
							</p>
						</div>
						<figure className='flex-1 w-full'>
							<img
								src={'/images/community-img-11.webp'}
								alt='Bitcoin Pizza Day - WID'
								className='w-full border object-cover object-center border-[#0A74EF] rounded-xl md:rounded-[1.25rem] aspect-[1.1024]'
							/>
						</figure>
					</div>
				</section>
			</section>

			<UpcomingEvents />

			<PreviousEvents />

			<SuccessStories title='Community Stories' />
		</>
	);
};

export default Events;
