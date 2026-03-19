/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Button } from '@/components/common';
import { cn } from '@/lib/utils';

const PreviousEvents = () => {
	const [activeTab, setActiveTab] = useState(0);

	const events = [
		{
			name: 'Women In DeFi Summit 2025',
			images: [
				'community-img-11.png',
				'community-img-12.png',
				'community-img-13.png',
			],
		},
		{
			name: 'Bitcoin Pizza Day 2024',
			images: [
				'community-img-11.webp',
				'community-img-12.webp',
				'community-img-13.webp',
			],
		},
		{
			name: 'Codes, Charts and Cocktails 2023',
			images: [
				'community-img-15.png',
				'community-img-16.png',
				'community-img-17.png',
			],
		},
	];

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-full.png)] bg-center bg-cover py-8 md:py-20'>
			<div className='max-w-350 mx-auto'>
				<div className='flex flex-col lg:flex-row gap-3 md:gap-8 bg-[#FAF9FF] w-full lg:w-fit mx-auto rounded-[1.25rem] md:rounded-[2.5rem] border border-[#0A74EF33] p-3 md:p-5'>
					{events.map((event, index) => (
						<button
							key={`__button__${index}`}
							onClick={() => setActiveTab(index)}
							className={cn(
								'px-4 md:px-8 transition-all py-3 md:py-3.75 font-normal text-[0.875rem] md:text-[1rem] duration-[.4s] rounded-[1.25rem] md:rounded-[2.5rem]',
								index === activeTab
									? 'bg-[#0A74EF] text-white'
									: 'bg-transparent border text-[#000000B2] border-[#0A74EF33] hover:bg-[#0A74EF08]',
							)}
						>
							{event.name}
						</button>
					))}
				</div>

				{events.map((event, tabIndex) => (
					<div
						key={`__tab__${tabIndex}`}
						className={cn(
							'mt-6 md:mt-10 transition-opacity flex flex-col lg:flex-row gap-4 md:gap-10 duration-300',
							activeTab === tabIndex ? 'opacity-100' : 'opacity-0 hidden',
						)}
					>
						{event.images.map((image, imgIndex) => (
							<div
								key={`__image__${imgIndex}__`}
								className='w-full'
							>
								<img
									src={`/images/${image}`}
									alt={event.name}
									className='rounded-xl w-full lg:w-auto md:rounded-[1.25rem] flex-1 aspect-[1.2] object-cover'
								/>
							</div>
						))}
					</div>
				))}

				<div className='flex justify-center mt-6 md:mt-10 w-full'>
					<Button
						variant='outlined'
						url='https://drive.google.com/drive/folders/120BcAwmfE7V3zL8b0ldZ7Dx5o-d-FSdh'
						className='w-fit p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem]'
						icon={{
							url: 'hugeicons:arrow-right-01',
							width: '1.5rem',
							height: '1.5rem',
						}}
					>
						View More
					</Button>
				</div>
			</div>
		</section>
	);
};

export { PreviousEvents };
