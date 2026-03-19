import { ReactNode } from 'react';

const HeroV2 = ({
	bgUrl,
	children,
}: {
	bgUrl: string;
	children: ReactNode;
}) => {
	return (
		<section className='bg-black pt-20 lg:pt-40'>
			<div
				style={{ backgroundImage: `url(/images/${bgUrl})` }}
				className='flex bg-center bg-cover h-100 md:h-105 bg-blend-overlay bg-[#00000099] justify-center flex-col items-center px-6'
			>
				{children}
			</div>
		</section>
	);
};

export { HeroV2 };
