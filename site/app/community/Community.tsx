/* eslint-disable @next/next/no-img-element */
import { Button, CTA } from '@/components/common';
import { SuccessStories } from '@/components/programs';

const Community = () => {
	return (
		<>
			<section className='pt-20 lg:pt-39 bg-white'>
				<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-fullx2.png)] bg-center bg-cover py-8 md:py-20 lg:py-30'>
					<div className='max-w-350 mx-auto'>
						<h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold text-center mb-2 md:mb-3'>
							The Web3 Baddies are building. Ready to join the squad?
						</h1>
						<p className='text-[0.875rem] md:text-[1rem] font-semibold text-center mb-6 md:mb-10'>
							The most ambitious women in decentralized finance aren&apos;t just
							watching the future; they&apos;re coding it, investing in it, and leading
							it.
						</p>
						<img
							className='w-full max-w-full md:max-w-286.25 mx-auto'
							style={{
								maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
								WebkitMaskImage:
									'linear-gradient(to bottom, black 90%, transparent 100%)',
							}}
							src={'/images/community-hero-img.png'}
							alt='Community Hero'
						/>
						<div className='p-2 md:p-2.5 mt-6 md:mt-10'>
							<p className='font-normal text-center text-[0.75rem] md:text-[1rem] mb-6 md:mb-10 leading-5 md:leading-8'>
								The WID Community is a home for women who are curious and ready to grow
								in the Web3 ecosystem. It&apos;s a space built on learning, connection,
								and genuine support where members don&apos;t just join a server; they
								join a circle of women who want to see each other win. <br />
								<br />
								At its heart, the community exists to make Web3 feel accessible,
								welcoming, and less intimidating. Whether you&apos;re taking your first
								step into blockchain or already building your path in the space, the WID
								Discord gives you a place to learn, ask questions, experiment, and find
								your voice. <br />
								<br />
								Members benefit from: <br />● A safe space for women to explore
								opportunities in blockchain and DeFi without judgment. <br />● Exclusive
								learning resources shared in simple, practical formats. <br />●
								Networking and collaboration opportunities with women across different
								backgrounds and countries. <br />● Real-time support from mentors,
								facilitators, and fellow learners. <br />● Community events, AMAs, and
								workshops that spark curiosity and deepen understanding. <br />●
								Celebrations of milestones and wins, big or small because growth
								deserves recognition. <br />
								<br />
								More than anything, the WID Community is a reminder that no woman has to
								walk her Web3 journey alone. We learn together, build together, and rise
								together.
							</p>
							<Button
								url='https://forms.gle/sVHUHnF9bz42BJui7'
								className='p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] mx-auto w-fit'
							>
								Join the Sisterhood
							</Button>
						</div>
					</div>
				</section>
			</section>

			<SuccessStories title='Community Stories' />

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

export default Community;
