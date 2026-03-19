/* eslint-disable @next/next/no-img-element */
'use client';

import { inter } from '@/app/layout';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Donate = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [copiedState, setCopiedState] = useState({
		walletAddress: false,
		accountNumber: false,
	});

	const walletAddress = '0x6cb448C4414dD9c6Aq26580CBe38EC7dDcD4A057';
	const accountNumber = '6396015119';

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-8 lg:py-20'>
			<div className='max-w-350 flex flex-col lg:flex-row gap-6 lg:gap-17 items-start mx-auto'>
				<img
					src='/images/donate-img-1.png'
					alt='WID Ladies'
					className='w-full lg:w-100 aspect-square object-cover rounded-xl md:rounded-[1.25rem]'
				/>
				<div className='flex-1 w-full'>
					<h2 className='text-[1.25rem] md:text-[2.5rem] font-medium text-center md:text-left mb-2 md:mb-0'>
						Don&apos;t Just Donate; Fuel a Movement.
					</h2>
					<p
						className={cn(
							inter?.className,
							'text-black leading-5! md:leading-8! mb-4 md:mb-5 text-justify font-normal text-[0.75rem] md:text-[1rem]'
						)}
					>
						Right now, the world of finance and technology is being rebuilt. But if
						women aren&apos;t at the table, the future won&apos;t be equitable. At
						Women in DeFi (WID), we&apos;re tearing down barriers, providing
						world-class training, and connecting talented women with the opportunities
						they deserve in Web3 and decentralized finance. <br />
						<br />
						Every woman we train is a ripple of change. Your contribution is more than
						just money; it&apos;s a commitment to diversity, economic empowerment, and
						a more inclusive digital future.
					</p>
					<h3 className='text-[1.25rem] md:text-[2.5rem] font-medium text-center md:text-left mb-2 md:mb-0'>
						How to donate?
					</h3>
					<p
						className={cn(
							inter?.className,
							'text-black leading-5! md:leading-8! mb-4 md:mb-5 text-justify font-normal text-[0.75rem] md:text-[1rem]'
						)}
					>
						Make use of any of the below listed channels to donate
					</p>

					<div className='flex flex-col md:flex-row gap-3 md:gap-5 bg-[#FAF9FF] w-full md:w-fit rounded-[1.25rem] md:rounded-[2.5rem] border border-[#0A74EF33] p-3 md:p-5 mx-auto md:mx-0'>
						{['Via Crypto', 'Via Bank Transfer']?.map((buttonText, index) => (
							<button
								key={`__button__${index}`}
								onClick={() => setActiveTab(index)}
								className={cn(
									'px-6 md:px-12 transition-all py-3 md:py-3.75 font-normal text-[0.875rem] md:text-[1rem] duration-[.4s] rounded-[1.25rem] md:rounded-[2.5rem]',
									index === activeTab
										? 'bg-[#0A74EF] text-white'
										: 'bg-transparent border text-[#000000B2] border-[#0A74EF33] hover:bg-[#0A74EF08]'
								)}
							>
								{buttonText}
							</button>
						))}
					</div>

					<div
						className={cn(
							'mt-6 md:mt-10 transition-opacity duration-300',
							activeTab === 0 ? 'opacity-100' : 'opacity-0 hidden'
						)}
					>
						<p className='text-black font-normal text-[0.75rem] md:text-[1rem] mb-4 md:mb-5 text-justify'>
							Send USDT/USDC (all EVM compatible) donations to the underlisted address.
						</p>
						<div className='flex items-center gap-3 w-fit rounded-lg'>
							<span className='text-[#0A74EF] font-medium text-[0.75rem] md:text-[1rem] break-all flex-1'>
								{walletAddress}
							</span>
							<button
								onClick={() => {
									navigator.clipboard.writeText(walletAddress);
									setCopiedState((prev) => ({ ...prev, walletAddress: true }));
									setTimeout(
										() => setCopiedState((prev) => ({ ...prev, walletAddress: false })),
										2000
									);
								}}
								className='text-[#0A74EF] hover:text-[#0A74EF80] transition-colors shrink-0'
							>
								<Icon
									icon={
										copiedState?.walletAddress
											? 'hugeicons:checkmark-circle-02'
											: 'hugeicons:copy-01'
									}
									width='20'
									height='20'
								/>
							</button>
						</div>
					</div>

					<div
						className={cn(
							'mt-6 md:mt-10 transition-opacity duration-300',
							activeTab === 1 ? 'opacity-100' : 'opacity-0 hidden'
						)}
					>
						<h4 className='text-black font-medium text-[1rem] md:text-[1.5rem] mb-3 md:mb-4'>
							Pay into this account
						</h4>
						<p className='text-[#6B7280] font-normal text-[0.875rem] md:text-[1.125rem] mb-2'>
							Moniepoint Microfinance Bank
						</p>
						<div className='flex items-center gap-3 mb-1'>
							<span className='text-[#0A74EF] font-medium text-[1rem] md:text-[1.125rem]'>
								{accountNumber}
							</span>
							<button
								onClick={() => {
									navigator.clipboard.writeText(accountNumber);

									setCopiedState((prev) => ({ ...prev, accountNumber: true }));
									setTimeout(
										() => setCopiedState((prev) => ({ ...prev, accountNumber: false })),
										2000
									);
								}}
								className='text-[#0A74EF] hover:text-[#0A74EF80] transition-colors'
							>
								<Icon
									icon={
										copiedState?.accountNumber
											? 'hugeicons:checkmark-circle-02'
											: 'hugeicons:copy-01'
									}
									width='20'
									height='20'
								/>
							</button>
						</div>
						<p className='text-[#6B7280] font-normal text-[0.875rem] md:text-[1rem]'>
							Women In Defi Foundation
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Donate };
