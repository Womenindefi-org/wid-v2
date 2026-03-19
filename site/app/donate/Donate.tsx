import { HeroV2 } from '@/components/common';
import { Donate as DonateComp } from '@/components/donate';

const Donate = () => {
	return (
		<>
			<HeroV2 bgUrl='partner-hero-img.png'>
				<h1 className='text-white text-[1.5rem] md:text-[2.5rem] font-semibold w-full lg:w-301 mx-auto text-center'>
					Support a Woman. Shape the Future
				</h1>
			</HeroV2>

			<DonateComp />
		</>
	);
};

export default Donate;
