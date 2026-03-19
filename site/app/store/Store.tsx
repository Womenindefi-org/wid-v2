import { CTA } from '@/components/common';

const Store = () => {
	return (
		<>
			<section className='pt-20 md:pt-25 lg:pt-39 relative bg-white'>
				<section className='px-6 lg:px-10 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-4 md:py-5'>
					<div className='max-w-350 mx-auto text-[0.875rem] md:text-[1.5rem] text-white text-center leading-5 md:leading-normal'>
						Use the promo code; &quot;MISSIDAHOSA&quot; for 10% off when you place any
						order for any merch. T & Cs applies.
					</div>
				</section>
				<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-10'>
					<div className='max-w-350 mx-auto'>
						<h1 className='text-black mb-6 md:mb-10 text-[1.5rem] md:text-[2.5rem] font-semibold text-center'>
							Featured Merch
						</h1>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
							{[
								{ priceTag: '$19.99', name: 'WiD Summit Branded Hoodie' },
								{ priceTag: '$24.99', name: 'Crypto Queen T-Shirt' },
								{ priceTag: '$15.99', name: 'Blockchain Basics Tote Bag' },
								{ priceTag: '$29.99', name: 'DeFi Developer Snapback' },
								{ priceTag: '$12.99', name: 'Women in Tech Sticker Pack' },
								{ priceTag: '$34.99', name: 'Summit 2025 Zip-Up Jacket' },
							]?.map((item, index) => (
								<div
									key={`__item__${index}__`}
									className='aspect-[0.767] rounded-t-xl md:rounded-t-[2.5rem] overflow-hidden flex flex-col'
								>
									<figure
										className='flex-1 bg-cover bg-center'
										style={{
											backgroundImage: `url(/images/store-img-${(index % 2) + 1}.png)`,
										}}
									/>
									<div className='py-4 md:py-[1.5rem_1.875rem] mt-2 md:mt-2.5 flex items-center flex-col border border-[#0A74EF80] rounded-b-xl md:rounded-b-[2.5rem] overflow-hidden'>
										<h6 className='font-semibold text-[1rem] md:text-[1.25rem] text-black'>
											{item?.priceTag}
										</h6>
										<p className='font-medium text-[0.875rem] md:text-[1rem] text-black text-center px-2'>
											{item?.name}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className='absolute bg-[#ffffff90] inset-0 w-full flex items-center justify-center h-full md:px-6'>
					<div className='bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] max-w-350 w-full text-[1.5rem] md:text-[2.5rem] font-medium tracking-[0.96px] md:tracking-[1.6px] text-center text-white md:rounded-[1.25rem] mx-auto py-16 md:py-26.5'>
						Coming Soon....
					</div>
				</section>
			</section>

			<CTA
				title='Stay Ahead of the Curve'
				content={`Get the essential knowledge you need to navigate the decentralized landscape. Our blog delivers expert analysis, actionable Web3 career advice, and deep dives into the latest trends in DeFi, crypto, and blockchain technology, all through the lens of women leaders.`}
				cta={{
					text: 'Subscribe Now',
					url: 'https://medium.com/women-in-defi',
				}}
			/>
		</>
	);
};

export default Store;
