/* eslint-disable @next/next/no-img-element */
'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { inter } from '@/app/layout';
import { Button } from '../common';

const newsData = [
	{
		title:
			'WID Marks Three Years of Impact, Education, & Financial Inclusion for African Women',
		excerpt:
			"Women in DeFi, a transformative community founded by Sarah Idahosa, is celebrating its 3rd anniversary this month, marking a significant milestone in the organization's mission to empower women in the world of decentralized finance (DeFi) and blockchain technology...",
		url: 'https://techcabal.com/2025/02/18/women-in-defi-marks-three-years-of-impact-education-and-financial-inclusion-for-african-women/',
		logoSrc: '/images/techcabal.png',
	},
	{
		title: 'Women In DeFi Summit Empowers Female Leaders In Tech',
		excerpt:
			"Over 500 African women gathered at the inaugural Women in DeFi summit themed 'Building Bridges: Connecting Women, Inspiring Innovation'. Founded by Sarah Idahosa, the platform is dedicated to empowering women in blockchain, Web3, and decentralised finance across the continent...",
		url: 'https://thestreetjournal.org/women-in-defi-summit-empowers-female-leaders-in-tech/',
		logoSrc: '/images/tsj.png',
	},
	{
		title: 'Women in DeFi summit empowers female leaders in tech',
		excerpt:
			'The premier edition of the Women in DeFi (Decentralised Finance) summit held recently with hundreds of women in attendance. Dedicated to empowering African women in blockchain, Web3, and decentralised finance, with the theme...',
		url: 'https://guardian.ng/guardian-woman/women-in-defi-summit-empowers-female-leaders-in-tech/',
		logoSrc: '/images/theguardian.webp',
	},
	{
		title: `From Knowledge to Action: Sarah Idahosa's Commitment to Women in DeFi.`,
		excerpt:
			'Sarah Idahosa is a versatile professional recognized for her expertise in Web3 community development, Web3 education, and decentralized finance research. She serves as the Partnership and Community Growth Lead at Mansa, a DeFi protocol providing liquidity to multinational blue-chip companies in emerging markets, focusing on payment financing....',
		url: 'https://www.hernetwork.co/from-knowledge-to-action-sarah-idahosas-commitment-to-women-in-defi/',
		logoSrc: '/images/hernetwork.webp',
	},
	{
		title: `Women in DeFi Summit 2025: Africa's Boldest Web3 Women Take the Stage in Lagos, Nigeria`,
		excerpt: `The future of Africa's blockchain landscape is undeniably female, and the upcoming Women in DeFi Summit 2025 is set to be a defining moment. Scheduled to take place on Saturday, April 26, at Eden Hall in Lekki, Lagos, this one-day summit is designed to bring together an inspiring mix of African women who are building, innovating, and reshaping the Web3 space...`,
		url: 'https://techpoint.africa/brandpress/women-in-defi-summit-2025-africas-boldest-web3-women-take-the-stage-in-lagos-nigeria/',
		logoSrc: '/svg/techpoint.svg',
	},
];

const NewsCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, dragFree: false, align: 'center' },
		[Autoplay({ delay: 6000, stopOnInteraction: false })]
	);
	const [activeIndex, setActiveIndex] = useState(0);

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

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20 lg:py-30'>
			<div className='max-w-350 mx-auto'>
				<h2 className='text-black font-semibold md:font-medium text-[1.25rem] md:text-[2.5rem] text-center mb-6 md:mb-10'>
					WID in the news
				</h2>

				<div
					className='embla overflow-hidden'
					ref={emblaRef}
				>
					<div className='embla__container flex'>
						{newsData.map((news, index) => (
							<div
								key={`news__${index}`}
								className='embla__slide shrink-0 grow-0 basis-full min-w-0 px-2'
							>
								<div className='flex flex-col min-h-115 md:min-h-70 md:flex-row border rounded-[1.25rem] overflow-hidden border-[#0A74EF80]'>
									<div className='flex-1 flex flex-col gap-4 md:gap-2 justify-between p-6 md:p-[2.5rem_.75rem_2.5rem_2.5rem] border-b md:border-b-0 md:border-r border-[#0A74EF80]'>
										<h6 className='font-medium text-[1rem] md:text-[1.25rem]'>
											{news.title}
										</h6>
										<p
											className={cn(
												inter?.className,
												'text-[0.75rem] md:text-[1rem] font-normal'
											)}
										>
											{news.excerpt}
										</p>
										<Button
											url={news.url}
											className='p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] w-fit'
											variant='outlined'
											icon={{
												url: 'hugeicons:arrow-right-01',
												width: '1.5rem',
												height: '1.5rem',
											}}
										>
											Read More
										</Button>
									</div>
									<figure className='p-6 md:p-[2.5rem_1.375rem] flex items-center justify-center'>
										<img
											className={cn(
												'w-full md:w-50 h-10 md:aspect-square',
												index === 1 ? 'object-cover' : ''
											)}
											alt={`News Channel Image ${index}`}
											src={news.logoSrc}
										/>
									</figure>
								</div>
							</div>
						))}
					</div>
				</div>

				{newsData.length > 1 && (
					<div className='flex items-center w-fit mx-auto mt-6 md:mt-8 gap-2'>
						{Array.from({ length: newsData.length }, (_, index) => (
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

export { NewsCarousel };
