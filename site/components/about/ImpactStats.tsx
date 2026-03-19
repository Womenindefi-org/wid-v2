'use client';

import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import FlipNumbers from 'react-flip-numbers';
import { useInView } from 'react-intersection-observer';

const ImpactStats = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	const [startCount, setStartCount] = useState(false);

	useEffect(() => {
		if (inView) {
			setTimeout(() => setStartCount(true), 200);
		}
	}, [inView]);

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-6'>
			<div
				ref={ref}
				className='max-w-350 items-center mx-auto gap-2 md:gap-6 lg:gap-15.25 flex flex-col lg:flex-row'
			>
				<h4 className='text-white text-[1.25rem] md:text-[2.25rem] font-semibold lg:w-33.25 text-center lg:text-left'>
					Our Impact
				</h4>
				<div className='w-45 lg:w-0.5 h-[0.6px] md:h-px lg:h-48.25 bg-white' />
				<div className='flex flex-wrap lg:flex-nowrap flex-1 justify-center lg:justify-between items-center gap-6 lg:gap-0'>
					{[
						{ number: 8, suffix: 'k+', content: 'Community Members' },
						{ number: 16, suffix: '+', content: 'Chapters across Africa' },
						{ number: 1, suffix: 'M+', content: 'Online Impressions' },
						{ number: 4, suffix: 'k+', content: 'Program Beneficiaries' },
						{ number: 4, suffix: '+', content: 'Physical Events' },
					]?.map(({ number, suffix, content }, index) => (
						<div
							key={`__item__${index}`}
							className='flex flex-col items-center md:gap-2'
						>
							<h5 className='text-white font-bold text-[1.25rem] md:text-[2.5rem] flex items-center'>
								{startCount && (
									<FlipNumbers
										height={window.innerWidth >= 768 ? 40 : 20}
										width={window.innerWidth >= 768 ? 23 : 13}
										color='white'
										background='transparent'
										play
										perspective={1000}
										numbers={String(number)}
										duration={2}
										delay={index * 0.1}
									/>
								)}
								<span>{suffix}</span>
							</h5>
							<p
								className={cn(
									`text-white font-medium text-[0.75rem] md:text-[1.5rem] text-center`,
									index === 4 ? 'w-32 lg:w-40' : 'w-40 lg:w-50.75'
								)}
							>
								{content}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export { ImpactStats };
