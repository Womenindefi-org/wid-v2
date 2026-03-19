/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { CTA } from '@/components/common';
import { cn } from '@/lib/utils';

const Chapters = () => {
	return (
		<>
			<section className='pt-20 lg:pt-39 bg-white'>
				<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20 lg:py-30'>
					<div className='max-w-350 mx-auto'>
						<h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold text-center mb-2 md:mb-3'>
							All Our WID Chapters Across The Globe
						</h1>
						<p
							className={cn(
								inter?.className,
								'text-center w-full md:w-193.25 mx-auto leading-5 md:leading-8 mb-6 md:mb-8.25 font-normal text-[0.75rem] md:text-[1rem]',
							)}
						>
							Join our community and engage with over 8000+ fellow African women in the
							Web3 space, hailing from various corners of the continent.
						</p>
						<div className='flex flex-col gap-4 md:gap-5 md:grid md:grid-cols-2 lg:grid-cols-4'>
							{Array.from({ length: 4 }).map((_, colIndex) => {
								const isOddColumn = colIndex % 2 === 0;
								const isOddRow = colIndex % 2 === 0;
								const firstImageIndex = colIndex * 2 + 1;
								const secondImageIndex = colIndex * 2 + 2;

								return (
									<div
										key={`col-${colIndex}`}
										className='grid grid-cols-7 h-50 gap-4 md:grid-rows-7 md:grid-cols-1 md:h-125 md:gap-5'
									>
										<div
											className={cn(
												'relative overflow-hidden rounded-xl md:rounded-[1.25rem]',
												isOddRow ? 'col-span-4' : 'col-span-3',
												isOddColumn
													? 'md:col-span-1 md:row-span-4'
													: 'md:col-span-1 md:row-span-3',
											)}
										>
											<img
												src={`/images/community-img-${firstImageIndex}.png`}
												alt={`Community Image ${firstImageIndex}`}
												className='w-full h-full object-cover'
											/>
										</div>
										<div
											className={cn(
												'relative overflow-hidden rounded-xl md:rounded-[1.25rem]',
												!isOddRow ? 'col-span-4' : 'col-span-3',
												!isOddColumn
													? 'md:col-span-1 md:row-span-4'
													: 'md:col-span-1 md:row-span-3',
											)}
										>
											<img
												src={`/images/community-img-${secondImageIndex}.png`}
												alt={`Community Image ${secondImageIndex}`}
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</section>

			<CTA
				title='Start A WID Chapter In Your Region'
				content={`Join a powerful sisterhood dedicated to advancing women in decentralized finance. Connect with talented, like-minded individuals, unlock exclusive resources and events, and actively contribute to shaping an inclusive future for the entire DeFi industry.`}
				className='py-20'
				cta={{
					disabled: true,
					text: 'Start a Chapter (Coming)',
				}}
			/>

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-black font-semibold mb-2 md:mb-3 text-[1.25rem] md:text-[2.5rem] text-center'>
						WID Chapters
					</h2>
					<p
						className={cn(
							inter?.className,
							'text-black text-[0.75rem] md:text-[1rem] leading-5 md:leading-8 font-normal text-center mb-6 md:mb-10',
						)}
					>
						Ready to become a Blockchain Baddie? Join a WID chapter in your region
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[1.69rem_1.75rem]'>
						{[
							{ title: 'WID Abuja', url: 'https://linktr.ee/widabujaa' },
							{ title: 'WID Akwa-Ibom State', url: 'https://linktr.ee/widakwaibom' },
							{ title: 'WID Anambra State', url: 'https://linktr.ee/WIDAnambra' },
							{ title: 'WID Bayelsa State', url: 'https://linktr.ee/widbayelsa' },
							{
								title: 'WID Cross Rivers State',
								url: 'https://chat.whatsapp.com/EGWi8Zrg2J6IifDiUU6Sgw',
							},
							{
								title: 'WID Delta State',
								url: 'https://chat.whatsapp.com/HRPvxR2DubVDB3sRDKCB8G',
							},
							{ title: 'WID Edo State', url: 'https://linktr.ee/WID_EDO' },
							{ title: 'WID Enugu State', url: 'https://linktr.ee/WID_Enugu' },
							{ title: 'WID Kano State', url: 'https://linktr.ee/widkano' },
							{ title: 'WID Kogi State', url: 'https://linktr.ee/WID_Kogi1' },
							{ title: 'WID Lagos State', url: 'http://linktr.ee/WIDLagos' },
							{ title: 'WID Nairobi', url: 'https://linktr.ee/wid_nairobi' },
							{
								title: 'WID Ogun State',
								url: 'https://linktr.ee/womenindefiogunchapter',
							},
							{ title: 'WID Osun State', url: 'https://linktr.ee/WID_osun' },
							{ title: 'WID Oyo State', url: 'https://linktr.ee/widoyo' },
							{ title: 'WID Plateau State', url: 'https://linktr.ee/Widplateau' },
							{ title: 'WID Rivers State', url: 'https://linktr.ee/widrivers' },
						].map((item, index) => (
							<div
								key={`__item__${index}`}
								className='aspect-square flex flex-col rounded-t-xl md:rounded-t-[1.25rem] overflow-hidden'
							>
								<figure className='flex-1 bg-no-repeat bg-cover bg-[url(/images/community-img-9.png)]' />
								<div className='flex flex-col items-center bg-white border border-[#0A74EF80] rounded-b-xl md:rounded-b-[1.25rem] p-4 md:p-[1.25rem_2.125rem]'>
									<h6 className='text-black text-[0.875rem] md:text-[1rem] font-normal leading-6 md:leading-8 text-center'>
										{item?.title}
									</h6>
									<a
										className='leading-6 md:leading-8 text-[0.875rem] md:text-[1rem] font-normal text-[#0A74EF]'
										href={item?.url}
										target='_blank'
									>
										Join Community
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Chapters;
