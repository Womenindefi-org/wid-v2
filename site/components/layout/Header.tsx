'use client';

import { useState, useEffect } from 'react';
import { Button, SVGClient } from '../common';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const isActive = (url?: string, dropdown?: { url: string }[]) => {
		if (url) {
			return pathname === url;
		}
		if (dropdown) {
			return dropdown.some((item) => pathname.startsWith(item.url));
		}
		return false;
	};

	return (
		<header
			style={{ boxShadow: '0 2px 6px 0 rgba(10, 116, 239, 0.12)' }}
			className={cn(
				'bg-[#FFFFFF] lg:rounded-none fixed top-0 w-full px-6 lg:px-20 z-50 transition-all duration-300',
				isMobileMenuOpen ? 'rounded-b-[1.25rem]' : '',
			)}
		>
			<div
				className={cn(
					'flex justify-between max-w-350 mx-auto items-center transition-all duration-300',
					isScrolled ? 'lg:py-4 py-3' : 'py-6 lg:py-12',
				)}
			>
				<SVGClient
					className='hidden md:block'
					src='/svg/wid-logo.svg'
				/>

				<SVGClient
					className='md:hidden'
					src='/svg/wid-logo-3.svg'
				/>

				{/* Desktop Navigation */}
				<div className='hidden lg:flex items-center gap-10'>
					<nav className='w-full'>
						<ul className='flex gap-3'>
							{[
								{ name: 'Home', url: '/' },
								{ name: 'About Us', url: '/about' },
								{
									name: 'Programs',
									dropdown: [
										{ name: 'WID Academy', url: '/programs/academy' },
										{ name: 'Initiatives', url: '/programs/initiatives' },
										{ name: 'Be a Mentor', url: '/programs/mentor' },
									],
								},
								{ name: 'Partner', url: '/partner' },
								{
									name: 'Community',
									dropdown: [
										{ name: 'WID Community', url: '/community' },
										{ name: 'WID Chapters', url: '/community/chapters' },
										{ name: 'Events', url: '/community/events' },
									],
								},
								{ name: 'WID Store', url: '/store' },
							]?.map(({ name, url, dropdown }, index) => (
								<li
									className='p-2.5 relative'
									key={`__nav__item__${index}`}
									onMouseEnter={() => dropdown && setOpenDropdown(name)}
									onMouseLeave={() => setOpenDropdown(null)}
								>
									{dropdown ? (
										<button
											className={cn(
												'hover:text-[#0A74EF] transition-colors duration-300 text-[1rem] flex items-center gap-1 cursor-pointer',
												isActive(undefined, dropdown) ? 'text-[#0A74EF]' : 'text-[#000000]',
											)}
											type='button'
										>
											{name}
											<Icon
												icon='hugeicons:arrow-down-01'
												className={`transition-transform duration-300 ${
													openDropdown === name ? 'rotate-180' : ''
												}`}
											/>
										</button>
									) : (
										<Link
											className={cn(
												'hover:text-[#0A74EF] transition-colors duration-300 text-[1rem] flex items-center gap-1',
												isActive(url) ? 'text-[#0A74EF]' : 'text-[#000000]',
											)}
											href={url}
										>
											{name}
										</Link>
									)}
									{dropdown && (
										<div
											className={cn(
												'absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-33.25 overflow-hidden transition-all duration-300 ease-in-out',
												openDropdown === name
													? 'max-h-96 opacity-100'
													: 'max-h-0 opacity-0',
											)}
										>
											<div className='py-5 px-3'>
												{dropdown.map((item, idx) => (
													<Link
														key={idx}
														href={item.url}
														className={cn(
															`block text-[1rem] border-[#0A74EF33] text-center hover:text-[#0A74EF] transition-colors duration-300`,
															pathname === item.url ? 'text-[#0A74EF]' : 'text-black',
															idx === 0 ? 'pb-5' : idx === 2 ? 'pt-5' : 'py-5',
															idx !== 2 && 'border-b',
														)}
													>
														{item.name}
													</Link>
												))}
											</div>
										</div>
									)}
								</li>
							))}
						</ul>
					</nav>
					<Button url='https://forms.gle/sVHUHnF9bz42BJui7'>
						Join the Movement
					</Button>
				</div>

				{/* Mobile Hamburger */}
				<button
					className='lg:hidden flex flex-col gap-1 w-fit items-center justify-center'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label='Toggle menu'
				>
					<span
						className={cn(
							'w-6 h-0.75 bg-[#0A74EF] rounded-[1.25rem] transition-all duration-300',
							isMobileMenuOpen && 'rotate-45 translate-y-1.75',
						)}
					/>
					<span
						className={cn(
							'w-6 h-0.75 bg-[#0A74EF] rounded-[1.25rem] transition-all duration-300',
							isMobileMenuOpen && 'opacity-0',
						)}
					/>
					<span
						className={cn(
							'w-6 h-0.75 bg-[#0A74EF] rounded-[1.25rem] transition-all duration-300',
							isMobileMenuOpen && '-rotate-45 -translate-y-1.75',
						)}
					/>
				</button>
			</div>

			{/* Mobile Navigation */}
			<nav
				className={cn(
					'lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out',
					isMobileMenuOpen
						? 'max-h-[calc(100vh-5rem)] opacity-100'
						: 'max-h-0 opacity-0',
				)}
			>
				<ul className='md:px-6 pb-10'>
					{[
						{ name: 'Home', url: '/' },
						{ name: 'About Us', url: '/about' },
						{
							name: 'Programs',
							dropdown: [
								{ name: 'WID Academy', url: '/programs/academy' },
								{ name: 'Initiatives', url: '/programs/initiatives' },
								{ name: 'Be a Mentor', url: '/programs/mentor' },
							],
						},
						{ name: 'Partner', url: '/partner' },
						{
							name: 'Community',
							dropdown: [
								{ name: 'WID Community', url: '/community' },
								{ name: 'WID Chapters', url: '/community/chapters' },
								{ name: 'Events', url: '/community/events' },
							],
						},
						{ name: 'WID Store', url: '/store' },
					]?.map(({ name, url, dropdown }, index) => (
						<li
							key={`__mobile__nav__item__${index}`}
							className='border-b-[.5px] border-[#0A74EF33] last:border-b-0'
						>
							{dropdown ? (
								<div>
									<button
										className={cn(
											'w-full text-left py-5 flex items-center justify-between transition-colors duration-300',
											isActive(undefined, dropdown) ? 'text-[#0A74EF]' : 'text-[#000000]',
										)}
										onClick={() => setOpenDropdown(openDropdown === name ? null : name)}
										type='button'
									>
										<span className='text-[1rem]'>{name}</span>
										<Icon
											icon='hugeicons:arrow-down-01'
											className={`transition-transform duration-300 ${
												openDropdown === name ? 'rotate-180' : ''
											}`}
										/>
									</button>
									<div
										className={cn(
											'overflow-hidden transition-all duration-300',
											openDropdown === name ? 'max-h-96' : 'max-h-0',
										)}
									>
										{dropdown.map((item, idx) => (
											<Link
												key={idx}
												href={item.url}
												className={cn(
													'block py-3 pl-4 text-[0.9375rem] transition-colors duration-300',
													pathname === item.url
														? 'text-[#0A74EF]'
														: 'text-black hover:text-[#0A74EF]',
												)}
												onClick={() => setIsMobileMenuOpen(false)}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							) : (
								<Link
									className={cn(
										'block py-5 text-[1rem] transition-colors duration-300',
										isActive(url)
											? 'text-[#0A74EF]'
											: 'text-[#000000] hover:text-[#0A74EF]',
									)}
									href={url}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{name}
								</Link>
							)}
						</li>
					))}
					<li className='pt-6'>
						<Button
							url='https://forms.gle/sVHUHnF9bz42BJui7'
							className='w-full text-center'
						>
							Join the Movement
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
