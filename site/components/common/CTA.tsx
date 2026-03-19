import { cn } from '@/lib/utils';
import { Button } from './Button';

const CTA = ({
	title,
	content,
	cta,
	className,
}: {
	title: string;
	content: string;
	className?: string;
	cta?: {
		text: string;
		url?: string;
		target?: '_blank' | '_self' | '_parent' | '_top' | undefined;
		onClick?: () => void;
		disabled?: boolean;
	};
}) => {
	return (
		<section
			className={cn(
				'px-6 lg:px-10 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-8 md:py-10',
				className
			)}
		>
			<div className='max-w-350 mx-auto'>
				<h3 className='text-[1.25rem] md:text-[2.5rem] text-white font-medium tracking-[0.8px] md:tracking-[1.6px] text-center'>
					{title}
				</h3>
				<p className='text-white max-w-full md:max-w-232.25 mx-auto text-[0.75rem] md:text-[1rem] font-normal mb-4 md:mb-5 text-center'>
					{content}
				</p>
				<Button
					url={cta?.url || (undefined as unknown as string)}
					target={cta?.target}
					disabled={cta?.disabled}
					onClick={cta?.onClick}
					theme='secondary'
					className='mx-auto p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem] w-fit block'
				>
					{cta?.text}
				</Button>
			</div>
		</section>
	);
};

export { CTA };
