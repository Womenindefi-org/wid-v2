/* eslint-disable @next/next/no-img-element */
'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { playfairDisplay } from '@/app/layout';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

const testimonialData = [
	{
		quote: `WID gave me a community and platform. It gave me a renewed mindset that growth can be attained and sustainable and wealth at a young age is achievable`,
		name: 'HederaWrites',
		imgName: 'ivy.png',
	},
	{
		quote: `I won a MiFi and got accepted into the 3.0 Technical Writing Cohort. The MiFi helped me stay consistent, and the cohort is helping me grow my Web3 knowledge and writing skills.`,
		name: 'Kuti Peace Metalayo',
		imgName: 'kuti-peace-metalayo.jpg',
	},
	{
		quote: `Being part of the DeFi Skill-up Cohort 3.0 has been incredible. I've learned so much and earned certificates along the way. Thank you, WID!`,
		name: 'Abiodun Fathia Ayomide',
		imgName: 'abiodun-fathia-ayomide.jpg',
	},
	{
		quote: `WID has been nothing short of inspiring. Winning a WiFi device at the 2025 Summit made it easier to keep learning and building. This community is true empowerment.`,
		name: 'Peace Toluwanimi Omosehin',
		imgName: 'peaceomosehin.jpg',
	},
	{
		quote: `Through programs like the Laptop and Wi-Fi support, I've been able to fully engage in Web3 learning, content creation, and community projects.`,
		name: 'Agbonyin Ifeoluwa Grace',
		imgName: 'zoeyblaze5.jpeg',
	},
	{
		quote: `Receiving a laptop sponsorship at the 2025 WID Summit changed everything. It felt like someone finally said, "We believe in you, keep going girl!"`,
		name: 'Ofili Ifeanyi Christabel',
		imgName: 'ofililfean75262.jpg',
	},
	{
		quote: `WID played a huge role in my Web3 journey. From curious explorer to community builder and educator, I've evolved into someone creating real impact in the decentralized space.`,
		name: 'Okoli Uchechi Vivian',
		imgName: 'qingvee.jpg',
	},
	{
		quote: `After finishing secondary school in 2023, I was lost. Then I found WID, and it changed me completely. I'm not where I want to be yet, but I'm not where I used to be.`,
		name: 'Victoria John',
		imgName: 'justvictorya.jpg',
	},
	{
		quote: `WID was my gateway into Web3, providing clarity and confidence. Beyond technical knowledge, it helped me cultivate diligence, discipline, and excellence in execution.`,
		name: 'Nikpis',
		imgName: 'nikpis.jpg',
	},
	{
		quote: `I joined WID at my lowest, and it's been a guiding light. Today, I'm working as a marketer for a top-tier project. I'm a proud WID Baddie!`,
		name: 'Keera',
		imgName: 'keera.jpg',
	},
];

const TestimonialCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, dragFree: false, align: 'center' },
		[Autoplay({ delay: 5000, stopOnInteraction: false })],
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF1A] py-8 md:py-20 lg:py-30'>
			<div className='max-w-350 mx-auto'>
				<h2 className='text-black text-center mb-6 md:mb-10 font-medium text-[1.25rem] md:text-[2.5rem]'>
					What WID Baddies are saying
				</h2>

				<div
					className='embla overflow-hidden'
					ref={emblaRef}
				>
					<div className='embla__container flex'>
						{testimonialData.map((testimonial, index) => (
							<div
								key={`testimonial__${index}`}
								className='embla__slide shrink-0 grow-0 basis-full min-w-0 pl-4 md:pl-6'
							>
								<div className='border border-[#0A74EF80] h-80 overflow-hidden min-h-125 md:h-100 rounded-xl md:rounded-[1.25rem] flex flex-col md:flex-row gap-0 md:gap-12.75'>
									<img
										className={cn(
											'w-full h-[60%] md:h-full md:w-100 object-cover object-center',
											index === 2 ? 'object-top md:object-center' : '',
										)}
										alt={testimonial.name}
										src={`/images/${testimonial.imgName}`}
									/>
									<div className='flex-1 flex justify-center flex-col gap-3 md:gap-5 p-6 md:p-0 md:pr-12.75'>
										<p
											className={`text-[0.875rem] md:text-[1.25rem] font-medium ${playfairDisplay.className}`}
										>
											&quot;{testimonial.quote}&quot;
										</p>
										<span className='text-black text-[0.875rem] md:text-[1.25rem] leading-6 md:leading-8 font-semibold'>
											- <b className='font-bold'>{testimonial.name}</b>
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='mt-6 md:mt-10 flex items-center gap-10 md:gap-20 w-fit mx-auto'>
					<button
						className='text-[#0A74EF] hover:opacity-70 transition-opacity'
						onClick={scrollPrev}
						aria-label='Previous testimonial'
					>
						<Icon
							height={'1.5rem'}
							width={'1.5rem'}
							className='md:h-8 md:w-8'
							icon='hugeicons:arrow-left-01'
						/>
					</button>
					<button
						className='text-[#0A74EF] hover:opacity-70 transition-opacity'
						onClick={scrollNext}
						aria-label='Next testimonial'
					>
						<Icon
							height={'1.5rem'}
							width={'1.5rem'}
							className='md:h-8 md:w-8'
							icon='hugeicons:arrow-right-01'
						/>
					</button>
				</div>
			</div>
		</section>
	);
};

export { TestimonialCarousel };
