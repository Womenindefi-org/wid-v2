'use client';

import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { poppins } from '@/app/layout';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface BaseButtonProps {
	children: ReactNode;
	className?: string;
	variant?: 'outlined' | 'contained';
	theme?: 'primary' | 'secondary';
	icon?: {
		url?: string;
		height?: string;
		width?: string;
	};
	loading?: boolean;
	disableLoader?: boolean;
}

interface ButtonAsButton
	extends BaseButtonProps,
		Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
	url?: never;
	target?: never;
}

interface ButtonAsLink
	extends BaseButtonProps,
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
	url: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
}

type ButtonProps = (ButtonAsButton | ButtonAsLink) & { disabled?: boolean };

/**
 * A versatile button component that can render as a button, Next.js Link, or anchor tag.
 *
 * @component
 * @example
 * // Basic button
 * <Button onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 *
 * @example
 * // Internal navigation (Next.js Link)
 * <Button url="/about">
 *   Go to About
 * </Button>
 *
 * @example
 * // External link
 * <Button url="https://example.com" target="_blank">
 *   Visit External Site
 * </Button>
 *
 * @example
 * // Outlined variant with icon
 * <Button
 *   variant="outlined"
 *   icon={{ url: 'mdi:arrow-right' }}
 * >
 *   Next Step
 * </Button>
 *
 * @example
 * // Loading state
 * <Button loading>
 *   Submitting...
 * </Button>
 *
 * @param {ReactNode} props.children - The content to display inside the button
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {'outlined' | 'contained'} [props.variant='contained'] - Visual style of the button
 * @param {'primary' | 'secondary'} [props.theme='primary'] - Color theme (only applies to contained variant)
 * @param {Object} [props.icon] - Icon configuration object
 * @param {string} [props.icon.url] - Iconify icon name (e.g., 'mdi:arrow-right')
 * @param {string} [props.icon.height] - Custom icon height
 * @param {string} [props.icon.width] - Custom icon width
 * @param {boolean} [props.loading=false] - Shows loading spinner and disables interaction
 * @param {boolean} [props.disableLoader=false] - Hides the loading spinner even when loading is true
 * @param {string} [props.url] - If provided, renders as a link instead of button. External URLs (http/https/mailto/tel) render as <a>, internal URLs render as Next.js <Link>
 * @param {'_blank' | '_self' | '_parent' | '_top'} [props.target='_blank'] - Link target attribute (only used when url is provided)
 * @param {boolean} [props.disabled=false] - Disables the button
 * @param {...ButtonHTMLAttributes<HTMLButtonElement> | ...AnchorHTMLAttributes<HTMLAnchorElement>} props - All standard button or anchor attributes are supported depending on whether url is provided
 *
 * @returns {JSX.Element} A button, Next.js Link, or anchor element
 *
 * @remarks
 * **Rendering Logic:**
 * - Without `url`: Renders as a `<button>` element
 * - With `url` (external): Renders as an `<a>` element with proper rel attributes
 * - With `url` (internal): Renders as a Next.js `<Link>` component
 *
 * **Variant Styles:**
 * - `contained` (default): Filled background button
 *   - `primary` theme: Blue background (#0A74EF)
 *   - `secondary` theme: White background with blue text
 * - `outlined`: Border-only button with transparent background
 *
 * **Loading Behavior:**
 * - When `loading={true}`, the button is disabled and shows a spinner icon
 * - Use `disableLoader={true}` to hide the spinner while keeping disabled state
 *
 * **Icon Behavior:**
 * - Icons appear after the children content
 * - Loading spinner replaces the icon when loading
 * - Uses Iconify for icon rendering
 *
 * **Accessibility:**
 * - Disabled buttons have reduced opacity and are not clickable
 * - External links automatically include `rel="noopener noreferrer"` when target="_blank"
 * - All native button/anchor attributes are forwarded
 */
const Button = ({
	children,
	className,
	loading,
	disableLoader,
	theme = 'primary',
	variant = 'contained',
	url,
	target = '_blank',
	...props
}: ButtonProps) => {
	const baseStyles = cn(
		'rounded-[2.5rem] p-[1rem_1.5rem] text-center justify-center text-[.75rem] md:text-[1rem] flex gap-2 items-center text-nowrap cursor-pointer transition-colors duration-[.4s]',
		variant === 'outlined'
			? 'border text-[#0A74EF] border-[#0A74EF] hover:bg-[#0A74EF08] focus:bg-[#0A74EF12] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
			: theme === 'primary'
			? 'bg-[#0A74EF] text-white hover:bg-[#0862d4] focus:bg-[#0756bd] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0A74EF]'
			: 'bg-white text-[#0A74EF] hover:bg-[#f5f5f5] focus:bg-[#ebebeb] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white',
		poppins?.className,
		className
	);

	const content = (
		<>
			{children}
			{((loading && !disableLoader) ||
				((props as ButtonAsButton)?.icon && !loading)) && (
				<Icon
					height={(props as ButtonAsButton)?.icon?.height || undefined}
					width={(props as ButtonAsButton)?.icon?.width || undefined}
					icon={(props as ButtonAsButton)?.icon?.url || 'svg-spinners:ring-resize'}
					color='inherit'
				/>
			)}
		</>
	);

	// If url is provided, determine if it's external or internal
	if (url) {
		const isExternal =
			url.startsWith('http://') ||
			url.startsWith('https://') ||
			url.startsWith('mailto:') ||
			url.startsWith('tel:');

		if (isExternal) {
			// Render as anchor tag
			return (
				<a
					href={url}
					target={target}
					rel={target === '_blank' ? 'noopener noreferrer' : undefined}
					className={baseStyles}
					{...(props as Omit<
						AnchorHTMLAttributes<HTMLAnchorElement>,
						'href' | 'children'
					>)}
				>
					{content}
				</a>
			);
		}

		// Render as Next.js Link
		return (
			<Link
				href={url}
				target={target}
				rel={target === '_blank' ? 'noopener noreferrer' : undefined}
				className={baseStyles}
				{...(props as Omit<
					AnchorHTMLAttributes<HTMLAnchorElement>,
					'href' | 'children'
				>)}
			>
				{content}
			</Link>
		);
	}

	// Render as button
	return (
		<button
			disabled={loading || (props as ButtonAsButton)?.disabled}
			className={baseStyles}
			{...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>)}
		>
			{content}
		</button>
	);
};

export { Button };
