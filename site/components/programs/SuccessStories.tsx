import { Icon } from '@iconify/react';

const SuccessStories = ({ title = 'Success Stories' }: { title?: string }) => {
	return (
		<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-8 md:py-20'>
			<div className='max-w-350 mx-auto'>
				<h2 className='text-black font-semibold md:font-medium text-[1.25rem] md:text-[2.5rem] tracking-[0.8px] md:tracking-[1.6px] text-center mb-6 md:mb-10'>
					{title}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5'>
					{[
						{
							url: 'https://x.com/ella_jacee/status/1936520228726284762?s=46&t=p0Uj4uIjBEP0hJSD_rQwMw',
							text: `Ella's Story`,
							image: 'story-1.jpeg',
							icon: 'hugeicons:new-twitter-rectangle',
						},
						{
							url: 'https://www.youtube.com/watch?v=VHCrB4bA7yA',
							text: `Favour's Story`,
							image: 'story-2.png',
							icon: 'hugeicons:play-circle',
						},
						{
							url: 'https://x.com/faith_igwebuike/status/1998386433891938325',
							text: `Life after Skillup Cohort 3.0`,
							image: 'story-3.png',
							icon: 'hugeicons:new-twitter-rectangle',
						},
						{
							url: 'https://x.com/definursca/status/2005556870535131337',
							text: `Ajah's Story (Life after skillup)`,
							image: 'story-4.png',
							icon: 'hugeicons:new-twitter-rectangle',
						},
					]?.map((item, index) => (
						<a
							href={item?.url}
							target='_blank'
							key={`__item__${index}`}
							className='aspect-[1.02] group flex flex-col rounded-t-xl md:rounded-t-[1.25rem] overflow-hidden'
						>
							<figure
								style={{
									backgroundImage: `url(/images/${item?.image})`,
								}}
								className='flex-1 bg-center bg-cover relative'
							>
								<Icon
									className='text-transparent md:w-20 md:h-20 group-hover:text-[#0A74EF] invisible group-hover:visible transition-all duration-[.4s] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute hidden md:block'
									icon={item?.icon}
									height={'2.5rem'}
									width={'2.5rem'}
								/>
							</figure>
							<p className='py-4 md:py-6 bg-white border border-[#0A74EF33] rounded-b-xl md:rounded-b-[1.25rem] text-[0.75rem] md:text-[1rem] font-normal tracking-[0.48px] md:tracking-[.64px] text-black text-center'>
								{item?.text}
							</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export { SuccessStories };
