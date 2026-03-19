'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { inter } from '../layout';
import { CTA } from '@/components/common';

const Team = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<section className='pt-20 lg:pt-39 bg-white'>
				<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-fullx2.png)] bg-center bg-cover py-8 md:py-20 lg:py-30'>
					<div className='max-w-350 mx-auto'>
						<h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold text-center mb-2 md:mb-3'>
							Meet the Team
						</h1>
						<p className='text-black text-[0.75rem] md:text-[1rem] font-normal leading-5 md:leading-8 text-center max-w-full md:max-w-271.75 mx-auto mb-6 md:mb-10'>
							Meet the people who turn our initiatives into impact. These are the
							committed builders and strategists working daily to provide the
							education, mentorship, and support that empowers women to thrive in the
							decentralized finance space.
						</p>

						<div className='flex flex-col md:flex-row gap-3 md:gap-5 bg-[#FAF9FF] mx-auto w-full md:w-fit rounded-[1.25rem] md:rounded-[2.5rem] border border-[#0A74EF33] p-3 md:p-5'>
							{['Leadership Team', 'Support Team']?.map((buttonText, index) => (
								<button
									key={`__button__${index}`}
									onClick={() => setActiveTab(index)}
									className={cn(
										'px-6 md:px-12 transition-all w-full md:w-85.5 py-3 md:py-3.75 font-normal text-[0.875rem] md:text-[1rem] duration-[.4s] rounded-[1.25rem] md:rounded-[2.5rem]',
										index === activeTab
											? 'bg-[#0A74EF] text-white'
											: 'bg-transparent border text-[#000000B2] border-[#0A74EF33] hover:bg-[#0A74EF08]',
									)}
								>
									{buttonText}
								</button>
							))}
						</div>

						<div
							className={cn(
								'py-6 md:py-10 transition-opacity duration-300',
								activeTab === 0 ? 'opacity-100' : 'opacity-0 hidden',
							)}
						>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
								{[
									{ name: 'Sarah Idahosa', title: 'Founder' },
									{ name: 'Onone Peace Ega', title: 'Programs Lead' },
									{ name: 'Francis Rachael Biobelemoye', title: 'Partnership Manager' },
									{ name: 'Progress Ochuko Eyaadah', title: 'DevRel Lead' },
									{ name: 'Victory Adewojo', title: 'Integration Specialist' },
									{ name: 'Ogechi Welechi', title: 'Marketing & PR Lead' },
								]?.map((item, index) => (
									<div
										key={`__item__${index}`}
										className='aspect-25/33 flex flex-col rounded-t-xl md:rounded-t-[1.25rem] overflow-hidden'
									>
										<figure
											style={{ backgroundImage: `url(/images/team-img-${index + 1}.png)` }}
											className='flex-1 bg-cover'
										/>
										<div className='p-4 md:p-5 bg-white border border-[#0A74EF80] rounded-b-xl md:rounded-b-[1.25rem]'>
											<h6 className='text-black text-[0.875rem] md:text-[1rem] font-medium leading-6 md:leading-8'>
												{item?.name}
											</h6>
											<p
												className={cn(
													inter?.className,
													'text-[0.75rem] md:text-[1rem] font-normal leading-5 md:leading-8 text-black',
												)}
											>
												{item?.title}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-10 lg:max-w-[66.666%] lg:mx-auto'>
								{[
									{ name: 'Tega Claire Agbadagri', title: 'Content Lead' },
									{ name: 'Ovuo Ofure Blessing', title: 'Designer' },
								]?.map((item, index) => (
									<div
										key={`__item__${index + 6}`}
										className='aspect-25/33 flex flex-col rounded-t-xl md:rounded-t-[1.25rem] overflow-hidden'
									>
										<figure
											style={{ backgroundImage: `url(/images/team-img-${index + 7}.png)` }}
											className='flex-1 bg-cover'
										/>
										<div className='p-4 md:p-5 bg-white border border-[#0A74EF80] rounded-b-xl md:rounded-b-[1.25rem]'>
											<h6 className='text-black text-[0.875rem] md:text-[1rem] font-medium leading-6 md:leading-8'>
												{item?.name}
											</h6>
											<p
												className={cn(
													inter?.className,
													'text-[0.75rem] md:text-[1rem] font-normal leading-5 md:leading-8 text-black',
												)}
											>
												{item?.title}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div
							className={cn(
								'py-6 md:py-10 transition-opacity duration-300',
								activeTab === 1 ? 'opacity-100' : 'opacity-0 hidden',
							)}
						>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
								{[
									{ name: 'Mary Sule', title: 'Programs Associate' },
									{ name: 'Aishat Inikpi Abdullahi', title: 'Programs Associate' },
									{ name: 'Ayo Ibrahim', title: 'Community Associate' },
									{ name: 'Yunusa Oluwatobiloba', title: 'Community Associate' },
									{ name: 'Praise Abieyuwa', title: 'Associate Partnership Manager' },
									{
										name: 'Owolawi Boluwatife Mercy',
										title: 'Marketing and PR Associate',
									},
									{ name: 'Ayomide Akinwale', title: 'Content Associate' },
									{ name: 'Ofili Ifeanyi Christabel', title: 'Partnership Support' },
									{ name: 'Victoria Adedayo', title: 'DevRel Support' },
									{ name: 'Orjimazi Favour', title: 'DevRel Support' },
									{ name: 'Choice Gift Olowu', title: 'DevRel Support' },
									{ name: 'Stephanie Okudo', title: 'Content Support' },
								]?.map((item, index) => (
									<div
										key={`__item__${index}`}
										className='aspect-25/33 flex flex-col rounded-t-xl md:rounded-t-[1.25rem] overflow-hidden'
									>
										<figure
											style={{
												backgroundImage: `url(/images/team-img-${index + 10}.png)`,
											}}
											className='flex-1 bg-cover'
										/>
										<div className='p-4 md:p-5 bg-white border border-[#0A74EF80] rounded-b-xl md:rounded-b-[1.25rem]'>
											<h6 className='text-black text-[0.875rem] md:text-[1rem] font-medium leading-6 md:leading-8'>
												{item?.name}
											</h6>
											<p
												className={cn(
													inter?.className,
													'text-[0.75rem] md:text-[1rem] font-normal leading-5 md:leading-8 text-black',
												)}
											>
												{item?.title}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className='grid grid-cols-1 gap-6 md:gap-10 mt-6 md:mt-10 md:max-w-[50%] md:mx-auto lg:max-w-[33.333%]'>
								{[{ name: 'Lawal Simbiat Olamide', title: 'Content Support' }]?.map(
									(item, index) => (
										<div
											key={`__item__${index + 12}`}
											className='aspect-25/33 flex flex-col rounded-t-xl md:rounded-t-[1.25rem] overflow-hidden'
										>
											<figure
												style={{
													backgroundImage: `url(/images/team-img-${index + 22}.png)`,
												}}
												className='flex-1 bg-cover'
											/>
											<div className='p-4 md:p-5 bg-white border border-[#0A74EF80] rounded-b-xl md:rounded-b-[1.25rem]'>
												<h6 className='text-black text-[0.875rem] md:text-[1rem] font-medium leading-6 md:leading-8'>
													{item?.name}
												</h6>
												<p
													className={cn(
														inter?.className,
														'text-[0.75rem] md:text-[1rem] font-normal leading-5 md:leading-8 text-black',
													)}
												>
													{item?.title}
												</p>
											</div>
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</section>
			</section>

			<CTA
				title='Tired of building alone?'
				content={`Success in Web3 shouldn't be solitary. Join Women in DeFi: a
					supportive community dedicated to seeing every woman succeed. Connect with
					builders, unlock exclusive resources, and collaboratively shape a more
					equitable industry future.`}
				cta={{
					url: 'https://forms.gle/sVHUHnF9bz42BJui7',
					text: 'Join the Sisterhood',
				}}
			/>
		</>
	);
};

export default Team;
