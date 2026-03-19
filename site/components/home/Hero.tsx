/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import { Button } from '../common';

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const bgImages = [
		'/images/home-hero-img-1.png',
		'/images/home-hero-img-2.png',
		'/images/home-hero-img-3.png',
		'/images/home-hero-img-4.png',
		'/images/home-hero-img-5.png',
		'/images/home-hero-img-6.png',
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='bg-black lg:pt-40 pt-20'>
			<div className='relative h-150 md:h-202.5 overflow-hidden'>
				{bgImages.map((img, index) => (
					<div
						key={index}
						className='absolute inset-0 transition-opacity duration-1000 ease-in-out'
						style={{
							opacity: currentIndex === index ? 1 : 0,
							zIndex: currentIndex === index ? 1 : 0,
						}}
					>
						<div
							className='w-full h-full bg-center bg-cover'
							style={{ backgroundImage: `url(${img})` }}
						/>
					</div>
				))}
				{/* Overlay */}
				<div className='absolute inset-0 bg-[#00000099] z-10' />
				{/* Subtle Shimmer Effect */}
				<div className='absolute inset-0 z-20 hero-shimmer' />
				<div className='relative z-30 h-full flex flex-col gap-6.75 md::gap-10 justify-center items-center px-6'>
					<h1 className='text-white text-[1.5rem] md:text-[4rem] font-semibold md:font-medium w-full lg:w-301 mx-auto text-center leading-tight'>
						Empowering Women, Decentralizing the Future
					</h1>
					<div className='flex flex-col md:flex-row items-center gap-5 md:gap-20 w-fit mx-auto'>
						<Button
							className='w-full md:w-58.25 p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem]'
							url='https://forms.gle/sVHUHnF9bz42BJui7'
						>
							Join the Movement
						</Button>
						<Button
							url='/donate'
							target='_self'
							variant='outlined'
							className='w-full md:w-58.25 p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] text-white border-white'
						>
							Donate
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Hero };
