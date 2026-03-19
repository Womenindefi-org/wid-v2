import { HeroV2 } from '@/components/common';
import { cn } from '@/lib/utils';
import { inter } from '../layout';

const CodeOfConduct = () => {
	return (
		<>
			<HeroV2 bgUrl='about-hero-img.png'>
				<h1 className='text-white text-[1.5rem] md:text-[2.5rem] font-semibold w-full lg:w-301 mx-auto text-center'>
					The WID Community&apos;s Code of Conduct
				</h1>
			</HeroV2>

			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 lg:py-20'>
				<div className='max-w-350 mx-auto'>
					{[
						{
							title: 'Respect and Inclusion.',
							content:
								"We value and respect every member's voice, regardless of background, experience, or expertise. We commit to creating an inclusive environment where everyone feels heard and valued.",
						},
						{
							title: 'Harassment-Free Zone',
							content:
								'Harassment, discrimination, or any form of intimidation will not be tolerated. This includes but is not limited to offensive language, unwelcome advances, or any behavior that creates discomfort or fear.',
						},
						{
							title: 'Constructive Communication',
							content:
								'We encourage open and constructive dialogue. Disagreements should be addressed respectfully, focusing on ideas rather than personal attacks.',
						},
						{
							title: 'Privacy and Confidentiality',
							content:
								"Respect members' privacy and do not share personal information without explicit consent. Any information shared within the community should be treated confidentially.",
						},
						{
							title: 'Professionalism',
							content:
								'Maintain a high level of professionalism in all interactions, both within the community and in any external representation of the organization.',
						},
						{
							title: 'Intellectual Property',
							content:
								"Respect copyright and intellectual property rights. Give proper credit and seek permission when using or referencing others' work.",
						},
						{
							title: 'Compliance with Applicable Laws',
							content:
								'Members are expected to comply with all local, national, and international laws and regulations while participating in the community.',
						},
						{
							title: 'No Solicitation or Spam',
							content:
								'Avoid unsolicited promotion or spamming of products, services, or events. Self-promotion should be relevant and appropriate.',
						},
						{
							title: 'Reporting Violations',
							content:
								'If you witness or experience any behavior that violates this code of conduct, please report it promptly to the designated community moderators or administrators. You can also reach out to us via mail.',
						},
						{
							title: 'Enforcement of the Code',
							content:
								'Violation of this code may result in warnings, temporary suspension, or, in severe cases, permanent expulsion from the community.',
						},
					].map((section, index) => (
						<div key={index}>
							<h2 className='text-[#0A74EF] font-medium text-[0.875rem] md:text-[1.25rem] mb-1 md:mb-2'>
								{index + 1}. {section.title}
							</h2>
							<p
								className={cn(
									inter?.className,
									'text-black font-normal text-[0.75rem] md:text-[1rem] leading-5 md:leading-8 mb-4 md:mb-5'
								)}
							>
								{section.content}
							</p>
						</div>
					))}

					<p
						className={cn(
							inter?.className,
							'text-black font-normal text-[0.75rem] md:text-[1rem] leading-5 md:leading-8 mb-6 md:mb-10'
						)}
					>
						By participating in this community, you agree to abide by this Code of
						Conduct. We are committed to providing a safe and empowering space for all
						members. Together, we can build a stronger and more inclusive blockchain
						ecosystem.
					</p>

					<div className='mt-8 md:mt-15'>
						<p className='text-black font-normal text-[0.75rem] md:text-[1rem] mb-1 md:mb-2'>
							Date: <span className='font-medium'>25th September, 2023</span>
						</p>
						<p className='text-black font-normal text-[0.75rem] md:text-[1rem] mb-1 md:mb-2'>
							Signed: <span className='font-medium'>Sarah Idahosa</span>
						</p>
						<p className='text-black font-medium text-[0.75rem] md:text-[1rem]'>
							Founder, Women In DeFi Foundation
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default CodeOfConduct;
