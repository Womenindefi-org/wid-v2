import { Inter, Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/layout';
import { Toaster } from 'sonner';

export const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	subsets: ['latin', 'latin-ext', 'devanagari'],
});

export const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
	subsets: [
		'latin',
		'latin-ext',
		'cyrillic',
		'cyrillic-ext',
		'greek',
		'greek-ext',
		'vietnamese',
	],
});

export const playfairDisplay = Playfair_Display({
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-playfair-display',
	subsets: ['latin', 'latin-ext', 'cyrillic', 'vietnamese'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>
				<Toaster
					toastOptions={{
						classNames: {
							toast:
								'bg-white! border-[#0A74EF]/30! shadow-lg! text-xs! md:text-sm! text-black! backdrop-blur-md!',
							description: 'text-[#6B7280]!',
							actionButton: 'bg-[#0A74EF]! text-white!',
							cancelButton: 'bg-gray-100! text-gray-600!',
							closeButton: 'bg-white! border-[#0A74EF]/20! text-[#0A74EF]!',
							success: 'border-l-4! border-l-green-500!',
							error: 'border-l-4! border-l-red-500!',
							warning: 'border-l-4! border-l-yellow-500!',
							info: 'border-l-4! border-l-[#0A74EF]!',
						},
						className: 'md:max-w-[450px]! min-w-fit! whitespace-nowrap!',
					}}
					position='bottom-right'
					duration={6000}
				/>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
