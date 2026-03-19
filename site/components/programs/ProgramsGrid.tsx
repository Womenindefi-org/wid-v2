'use client';

import { cn } from '@/lib/utils';
import { Button } from '../common';
import { inter } from '@/app/layout';
import { useState } from 'react';

const ProgramsGrid = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 md:py-20'>
			<div className='max-w-350 mx-auto'>
				<div className='flex flex-col md:flex-row gap-3 md:gap-8 bg-[#FAF9FF] w-full md:w-fit mx-auto rounded-[1.25rem] md:rounded-[2.5rem] border border-[#0A74EF33] p-3 md:p-5'>
					{['WID Foundational Trainings', 'Skill-up Training']?.map(
						(buttonText, index) => (
							<button
								key={`__button__${index}`}
								onClick={() => setActiveTab(index)}
								className={cn(
									'w-full md:w-85.5 transition-all py-3 md:py-3.75 font-normal text-[0.875rem] md:text-[1rem] duration-[.4s] rounded-[1.25rem] md:rounded-[2.5rem]',
									index === activeTab
										? 'bg-[#0A74EF] text-white'
										: 'bg-transparent border text-[#000000B2] border-[#0A74EF33] hover:bg-[#0A74EF08]',
								)}
							>
								{buttonText}
							</button>
						),
					)}
				</div>

				{/* Foundational Trainings  */}
				<div
					className={cn(
						'grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-20 gap-6 md:gap-10 lg:gap-[2.5rem_3.75rem] transition-opacity duration-300',
						activeTab === 0 ? 'opacity-100' : 'opacity-0 hidden',
					)}
				>
					{[
						{
							title: 'Introduction to Web3',
							content: `This is the foundational six weeks training of Women In DeFi to in-still the fundamental principles of Web3 and decentralized finance. It is mandatory training for all community members. At the end of the training, participants would understand all the basic concepts of Web3 and terminologies.`,
							url: 'https://forms.gle/MEtkv23opHDZ55EcA',
						},
						{
							title: 'Web Development Training',
							content: `This is a foundational front-end development training; it is a prerequisite to our Blockchain development course. Whether you're a newbie or seeking to enhance your HTML, CSS & JavaScript skills, this training is for you.`,
							url: 'https://docs.google.com/forms/d/e/1FAIpQLScoQiZYYAu_o5G-Nq1KLXlRt6LW9mq_JlHOeMwwx2nvycTp2g/viewform',
						},
					]?.map((item, index) => (
						<div
							key={`__item__${index}__`}
							className='rounded-xl md:rounded-[1.25rem] overflow-hidden flex flex-col bg-[#FFFFFF] aspect-auto lg:aspect-[1.16]'
						>
							<figure
								style={{ backgroundImage: `url(/images/about-img-${index + 2}.png)` }}
								className='flex-1 min-h-40 max-h-40 lg:max-h-full lg:min-h-0 bg-cover'
							/>
							<div className='p-[1rem_.75rem] md:p-6 min-h-0 md:min-h-74.5 flex-col md:flex-1 justify-center flex gap-1'>
								<h4 className='text-black font-medium text-[1rem] md:text-[1.25rem]'>
									{item?.title}
								</h4>
								<p
									className={`leading-5 md:leading-8 mb-3 md:mb-5 font-light text-[0.75rem] md:text-[1rem] ${inter?.className} text-justify`}
								>
									{item?.content}
								</p>
								<Button
									url={item?.url}
									className='p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] w-fit'
								>
									Apply Here
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Skill up training  */}
				<div
					className={cn(
						'rounded-xl md:rounded-[1.25rem] mt-8 md:mt-20 max-w-full md:max-w-286.5 mx-auto overflow-hidden flex flex-col bg-[#FFFFFF] aspect-auto lg:aspect-[1.787] transition-opacity duration-300',
						activeTab === 1 ? 'opacity-100' : 'opacity-0 hidden',
					)}
				>
					<figure
						style={{ backgroundImage: `url(/images/about-img-2.png)` }}
						className='flex-1 md:min-h-80 md:max-h-80 max-h-40 lg:max-h-full lg:min-h-0 min-h-40 bg-cover bg-center'
					/>
					<div className='p-[1rem_.75rem] md:p-[1.5rem_1.125rem] items-center flex-col flex gap-1'>
						<h4 className='text-black font-medium mb-1 text-[1rem] md:text-[1.25rem]'>
							Skill-up Training
						</h4>
						<p
							className={`leading-5 md:leading-8 mb-3 md:mb-5 font-light text-[0.75rem] md:text-[1rem] ${inter?.className} text-center`}
						>
							This is an all-encompassing 3-4 months educational initiative tailored to
							equip women with the knowledge and skills needed to thrive in the Web3
							technology landscape. It offers a unique opportunity to not only acquire
							essential technical skills but also to harness Web3 to address pressing
							socio-economic challenges across Africa. The training covers tracks
							across Blockchain Development, Product Design, Product Management,
							Project Management, Community Management, Technical Writing and Advanced
							DeFi Research Methodologies.
						</p>
						<Button
							url='https://docs.google.com/forms/d/1xrdaZq32Qz_WUlxAfWRaJMddpqo-z-I4-Y21-spYwi8/'
							className='p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] w-fit'
						>
							Apply Here
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export { ProgramsGrid };
