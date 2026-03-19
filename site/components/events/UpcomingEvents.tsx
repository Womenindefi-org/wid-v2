/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { inter } from '@/app/layout';
import { cn } from '@/lib/utils';
import { useCallback, useEffect, useState } from 'react';
import { client, urlFor } from '@/lib';
import { Icon } from '@iconify/react';
import { toast } from 'sonner';
import { Button } from '../common';
import useEmblaCarousel from 'embla-carousel-react';

interface Event {
	_id: string;
	title: string;
	description: string;
	image: any;
	eventDate?: string;
	location?: string;
	ctaText: string;
	ctaLink: string;
}

const UpcomingEvents = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const [loading, setLoading] = useState(true);
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		dragFree: false,
		align: 'center',
	});
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const data = await client.fetch(
					`*[_type == "event" && (!defined(eventDate) || eventDate > now())] | order(eventDate asc)[0...5]`
				);
				setEvents(data || []);
			} catch {
				toast.error('Error fetching events!');
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		const selectedIndex = emblaApi.selectedScrollSnap();
		setActiveIndex(selectedIndex);
	}, [emblaApi]);

	useEffect(() => {
		if (emblaApi) {
			emblaApi.on('select', onSelect);
			onSelect();
		}
	}, [emblaApi, onSelect]);

	if (loading) {
		return (
			<section
				id='upcoming'
				className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-8 md:py-20'
			>
				<div className='max-w-350 mx-auto'>
					<div className='text-center'>
						<div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0A74EF] border-r-transparent'></div>
					</div>
				</div>
			</section>
		);
	}

	if (!events || events.length === 0) {
		return (
			<section
				id='upcoming'
				className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-8 md:py-20'
			>
				<div className='max-w-350 mx-auto'>
					<h2 className='font-semibold text-center text-[1.25rem] md:text-[2.5rem] mb-2 md:mb-5'>
						Upcoming Events
					</h2>
					<p
						className={cn(
							inter?.className,
							'text-[0.75rem] md:text-[1rem] font-normal text-center leading-5 md:leading-8 mb-6 md:mb-12'
						)}
					>
						Have a quick perusal of our catalogue of upcoming events, and join us.
					</p>
					<p className='text-[1.25rem] md:text-[2.5rem] font-medium text-black text-center'>
						No upcoming Events at the moment
					</p>
				</div>
			</section>
		);
	}

	return (
		<section
			id='upcoming'
			className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-8 md:py-20'
		>
			<div className='max-w-350 mx-auto'>
				<h2 className='font-semibold text-center text-[1.25rem] md:text-[2.5rem] mb-2 md:mb-5'>
					Upcoming Events
				</h2>
				<p
					className={cn(
						inter?.className,
						'text-[0.75rem] md:text-[1rem] font-normal text-center leading-5 md:leading-8 mb-6 md:mb-12'
					)}
				>
					Have a quick perusal of our catalogue of upcoming events, and join us.
				</p>

				<div
					className='embla overflow-hidden'
					ref={emblaRef}
				>
					<div className='embla__container flex'>
						{events.map((event) => {
							const eventDate = event.eventDate ? new Date(event.eventDate) : null;

							return (
								<div
									key={event._id}
									className='embla__slide shrink-0 grow-0 basis-full min-w-0 px-2'
								>
									<div className='max-w-350 flex flex-col md:flex-col-reverse lg:flex-row gap-6 md:gap-10 items-start mx-auto'>
										{event.image && (
											<img
												src={urlFor(event.image).width(800).height(800).url()}
												alt={event.image.alt || event.title}
												className='w-full lg:w-77 rounded-xl md:rounded-[1.25rem]'
											/>
										)}

										<div className='flex-1 w-full'>
											<h3 className='text-[1.25rem] md:text-[2.5rem] tracking-[0.75px] md:tracking-[1.2px] text-center md:text-left font-semibold md:font-medium mb-3 md:mb-4'>
												{event.title}
											</h3>

											{event.description && (
												<p
													className={cn(
														inter?.className,
														'text-black leading-5! md:leading-8! mb-4 md:mb-5 text-justify font-normal text-[0.75rem] md:text-[1rem]'
													)}
												>
													{event.description}
												</p>
											)}

											<div className='space-y-3 md:space-y-4 mb-4 md:mb-5'>
												<div className='flex items-center gap-3'>
													<Icon
														icon='mdi:calendar-clock'
														width='20'
														height='20'
														className='text-[#0A74EF] md:w-6 md:h-6'
													/>
													<span className='text-[0.75rem] md:text-[1rem] text-black font-normal'>
														{eventDate
															? eventDate.toLocaleDateString('en-US', {
																	weekday: 'long',
																	year: 'numeric',
																	month: 'long',
																	day: 'numeric',
															  })
															: 'TBA'}
													</span>
												</div>

												{eventDate && (
													<div className='flex items-center gap-3'>
														<Icon
															icon='mdi:clock-outline'
															width='20'
															height='20'
															className='text-[#0A74EF] md:w-6 md:h-6'
														/>
														<span className='text-[0.75rem] md:text-[1rem] text-black font-normal'>
															{eventDate.toLocaleTimeString('en-US', {
																hour: '2-digit',
																minute: '2-digit',
															})}
														</span>
													</div>
												)}

												{event.location && (
													<div className='flex items-center gap-3'>
														<Icon
															icon='mdi:map-marker'
															width='20'
															height='20'
															className='text-[#0A74EF] md:w-6 md:h-6'
														/>
														<span className='text-[0.75rem] md:text-[1rem] text-black font-normal'>
															{event.location}
														</span>
													</div>
												)}
											</div>

											{event.ctaLink && (
												<Button
													url={event.ctaLink}
													target='_blank'
													className='p-[.75rem_1.5rem] mx-auto md:ml-0 md:p-[1.25rem_2.5rem] w-fit'
												>
													{event.ctaText || 'Register Now'}
												</Button>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{events.length > 1 && (
					<div className='flex items-center w-fit mx-auto mt-6 md:mt-8 gap-2'>
						{Array.from({ length: events.length }, (_, index) => (
							<button
								key={`pagination__${index}`}
								className={`transition-all duration-300 ${
									index === activeIndex
										? 'bg-[#0A74EF] w-8 md:w-12 rounded-[20px] h-2 md:h-3'
										: 'bg-[#0A74EF33] rounded-full w-2 md:w-3 h-2 md:h-3'
								}`}
								onClick={() => emblaApi?.scrollTo(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export { UpcomingEvents };
