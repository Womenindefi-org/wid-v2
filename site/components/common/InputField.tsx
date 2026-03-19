/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
	ChangeEvent,
	ComponentType,
	FC,
	FocusEvent,
	forwardRef,
	InputHTMLAttributes,
	memo,
	Ref,
	TextareaHTMLAttributes,
	useEffect,
	useRef,
	useState,
} from 'react';
import Select, {
	ClearIndicatorProps,
	components,
	ControlProps,
	DropdownIndicatorProps,
	GroupBase,
	MultiValueGenericProps,
	MultiValueRemoveProps,
	OptionProps,
} from 'react-select';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { inter } from '@/app/layout';

export type SelectOption = {
	value: string | number | null;
	label: string;
};
export type IInputTypes =
	| 'text'
	| 'number'
	| 'textarea'
	| 'select'
	| 'multi-select'
	| 'rich-text'
	| 'date'
	| 'datetime-local'
	| 'tel'
	| 'password'
	| 'email';

type BaseProps = {
	type?: IInputTypes;
	name?: string;
	label?: string | null;
	error?: string;
	placeholder?: string;
	value?:
		| string
		| number
		| null
		| SelectOption
		| SelectOption[]
		| readonly string[]
		| undefined;
	onChange?:
		| ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
		| ((event: {
				target: {
					name?: string;
					value: any;
				};
		  }) => void);
	onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	selectOptions?: SelectOption[];
	disabled?: boolean;
	telProps?: {
		inputProps?: {
			disabled?: boolean;
			name?: string;
			value?: string;
			placeholder?: string;
			onChange?: (
				event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => void;

			onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
		};
		selectProps?: {
			name?: string;
			placeholder?: string;
			disabled?: boolean;
			value?: string;
			onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

			onChange?: (event: {
				target: {
					name?: string;
					value: string;
				};
			}) => void;
		};
	};
};

// Merge common attributes from input and textarea
type MergedHTMLAttributes = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'value' | 'onChange' | 'onBlur'
> &
	Omit<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		'value' | 'onChange' | 'onBlur'
	>;

export interface InputFieldProps extends BaseProps, MergedHTMLAttributes {}

const CustomOption: FC<OptionProps<unknown, boolean, GroupBase<any>>> = (
	props
) => {
	const { isSelected, label, data, options } = props;

	const isLastOption =
		(options[options.length - 1] as { value: string })?.value ===
		(data as { value: string })?.value;

	return (
		<components.Option {...props}>
			<li
				className={`flex cursor-pointer items-center justify-between rounded-md p-[0.625rem_0.5rem] text-[#101828] ${
					isSelected && 'bg-[#F9FAFB]'
				} transition-all duration-[.4s] hover:bg-[#F9FAFB] ${
					isLastOption ? '' : 'mb-1'
				} text-[.75rem] md:text-[1rem] font-normal leading-6`}
			>
				{label}
				{isSelected && (
					<Icon
						icon={'hugeicons:checkmark-circle-01'}
						color='#007FFF'
					/>
				)}
			</li>
		</components.Option>
	);
};

const CustomControl: FC<ControlProps<unknown, boolean, GroupBase<unknown>>> = ({
	children,
	...props
}) => (
	<components.Control {...props}>
		<div
			className='md:text-[1rem] text-[.75rem]'
			style={{
				padding: '0px 0.1875rem 0px 0.875rem',
				alignItems: 'center',
				margin: 0,
				width: '100%',
				height: '100%',
				display: 'flex',
			}}
		>
			{children}
		</div>
	</components.Control>
);

const CustomMultiValueContainer: FC<
	MultiValueGenericProps<unknown, boolean, GroupBase<any>>
> = (props) => <components.MultiValueContainer {...props} />;

const CustomMultiValueLabel: FC<
	MultiValueGenericProps<unknown, boolean, GroupBase<any>>
> = (props) => {
	return <components.MultiValueLabel {...props} />;
};

// CustomMultiValueRemove
const CustomMultiValueRemove = (props: MultiValueRemoveProps) => {
	return (
		<components.MultiValueRemove {...props}>
			<Icon
				icon={'hugeicons:cancel-circle'}
				color='#98A2B3'
			/>
		</components.MultiValueRemove>
	);
};

const InputField = memo(
	forwardRef<any, InputFieldProps>(
		(
			{
				type = 'text',
				name = 'input',
				label = 'Email',
				error,
				placeholder = 'john@altariahub.com',
				value,
				onChange,
				selectOptions,
				disabled,
				telProps,
				onBlur,
				...rest
			},
			ref
		) => {
			const [showPassword, setVisibility] = useState(false);
			const controlRef = useRef<HTMLDivElement>(null);
			const [hydrated, setHydrated] = useState(false);

			const {
				inputProps: {
					disabled: telInputDisabled,
					name: telInputName,
					value: telInputValue,
					placeholder: telInputPlaceholder,
					onChange: telInputChange,
					onBlur: telInputBlur,
					...otherTelInputProps
				} = {},
				selectProps: {
					name: telSelName,
					onChange: telSelChange,
					value: telSelValue,
					disabled: telSelDisabled,
					onBlur: telSelBlur,
					placeholder: telSelPlaceholder,
					...otherTelSelProps
				} = {},
			} = telProps || {};

			const CustomDropdownIndicator = (props: DropdownIndicatorProps) => {
				return (
					<components.DropdownIndicator {...props}>
						{error && type !== 'tel' ? (
							<Icon
								icon={'hugeicons:information-circle'}
								color='#F04438'
							/>
						) : (
							<Icon
								icon={'hugeicons:arrow-up-01'}
								color={props.isFocused ? '#007FFF' : '#0A74EF80'}
								height={'1.25rem'}
								width={'1.25rem'}
								style={{
									transition: 'all .4s',
									transform: !props.selectProps.menuIsOpen
										? 'rotate(180deg)'
										: undefined,
								}}
							/>
						)}
					</components.DropdownIndicator>
				);
			};
			useEffect(() => {
				if (typeof window !== 'undefined') setHydrated(true);
			}, []);
			if (hydrated)
				return (
					<div className='flex w-full flex-col gap-1.5 transition-all duration-[.4s]'>
						{label && (
							<label
								htmlFor={name}
								className={cn(
									inter?.className,
									'text-[.75rem] md:text-[1rem] font-normal text-black'
								)}
							>
								{label}
							</label>
						)}
						<div className='relative group h-fit w-full'>
							{type === 'textarea' ? (
								<textarea
									disabled={!!disabled}
									id={name}
									name={name}
									placeholder={placeholder}
									value={value as string}
									onChange={onChange && onChange}
									onBlur={onBlur && onBlur}
									ref={ref as Ref<HTMLTextAreaElement>}
									className={`border outline-none ${
										!!error
											? 'border-[#FDA29B] text-[#F04438]'
											: 'border-[#0A74EF80] text-black'
									} h-25 w-full rounded-lg bg-transparent p-[0.625rem_0.875rem] text-[.75rem] md:text-[1rem] font-normal leading-6 placeholder:font-light placeholder:opacity-[.7]`}
									{...rest}
								/>
							) : type === 'select' || type === 'multi-select' ? (
								<Select
									instanceId={'client'}
									isDisabled={!!disabled}
									isMulti={type === 'multi-select'}
									options={selectOptions && selectOptions}
									value={
										type === 'multi-select'
											? (value as string)
													?.split(',')
													?.map((val) => val.trim())
													?.map((val) =>
														selectOptions?.find((option) => option.value === val)
													)
													.filter(Boolean)
											: selectOptions?.find((option) => option.value === value)
									}
									menuPlacement='auto'
									menuPosition='fixed'
									menuPortalTarget={document.body}
									onChange={(selectedOptions) => {
										const syntheticEvent = {
											target: {
												name: name || 'select',
												value: Array.isArray(selectedOptions)
													? selectedOptions.map((option) => option.value).join(', ') // Convert to a string with commas
													: (selectedOptions as SelectOption)?.value, // For single select, get the value directly
												selectedOptions,
											},
										};

										onChange?.(
											syntheticEvent as ChangeEvent<
												HTMLInputElement | HTMLTextAreaElement
											> & {
												target: {
													name?: string | undefined;
													value: any;
													selectedOptions?: SelectOption[] | undefined;
												};
											}
										);
									}}
									onBlur={onBlur && onBlur}
									placeholder={placeholder}
									ref={ref}
									components={{
										Option: CustomOption,
										Control: CustomControl,
										DropdownIndicator: CustomDropdownIndicator,
										MultiValueContainer: CustomMultiValueContainer,
										MultiValueLabel: CustomMultiValueLabel,
										MultiValueRemove: CustomMultiValueRemove,
										ClearIndicator: null as unknown as ComponentType<
											ClearIndicatorProps<any, boolean, GroupBase<any>>
										>,
									}}
									closeMenuOnSelect={!(type === 'multi-select')}
									hideSelectedOptions={false}
									styles={{
										menuPortal: (base) => ({ ...base, zIndex: 9999 }),
										valueContainer: (provided) => ({
											...provided,
											padding: 0,
										}),
										menu: (provided) => ({
											...provided,
											backgroundColor: '#fff',
											minHeight: 0,
											height: 'fit-content',
											marginTop: '0.25rem',
											overflow: 'auto',
											padding: '0.25rem 0.375rem',
											borderRadius: '0.5rem',
											border: !!error ? '1px solid #FDA29B' : '1px solid #EAECF0',
											boxShadow:
												'0px 0.75rem 1rem -0.25rem rgba(16, 24, 40, 0.08), 0px 0.25rem 0.375rem -2px rgba(16, 24, 40, 0.03)',
										}),
										multiValueRemove: () => ({}),
										indicatorSeparator: () => ({
											display: 'none',
										}),
										option: () => ({
											padding: '0',
											margin: '0',
										}),
										placeholder: (provided) => ({
											...provided,
											margin: 0,
											padding: 0,
											opacity: 0.7,
											fontWeight: 300,
										}),
										singleValue: (provided) => ({
											...provided,
											fontWeight: 400,
											color: '#667085',
										}),
										multiValue: () => ({
											display: 'flex',
											alignItems: 'center',
											backgroundColor: '#fff',
											gap: '0.1875rem',
											width: 'max-content',
											boxSizing: 'border-box',
											border: '1px solid #0A74EF80',
											padding: '0.25rem',
											borderRadius: '0.375rem',
											margin: 0,
											marginRight: '0.375rem',
										}),
										multiValueLabel: () => ({
											fontSize: '0.875rem',
											color: '#344054',
											fontWeight: 400,
											lineHeight: '1.25rem',
										}),
										control: (baseStyles, state) => ({
											...baseStyles,
											outline: 'none',
											borderColor: !!error
												? '#FDA29B'
												: state.isFocused
												? '#007FFF'
												: '#0A74EF80',
											minHeight: 0,
											height: '2.75rem',
											cursor: 'pointer',
											fontSize: '1rem',
											fontWeight: 400,
											borderRadius: '0.5rem',
											overflow: 'hidden',
											boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
											'& .css-19bb58m': {
												padding: 0,
												margin: 0,
											},
											'& .css-9jq23d': {
												padding: 0,
												paddingRight: '0.625rem',
												margin: 0,
											},
											'& .css-hlgwow': {
												padding: 0,
												margin: 0,
											},
											'& .css-1mjpsdc': {
												padding: 0,
												margin: 0,
											},
											'&:hover': {
												borderColor: '#007FFF',
											},
										}),
									}}
									{...rest}
								/>
							) : type === 'tel' ? (
								<div
									ref={controlRef}
									className={`border outline-none transition-all duration-[.4s] ${
										!!error
											? 'border-[#FDA29B] text-[#F04438]'
											: 'border-[#0A74EF80] text-black focus-within:border-[#007FFF]'
									} flex h-11 w-full overflow-hidden rounded-lg bg-transparent`}
								>
									<Select
										instanceId={'client'}
										isDisabled={telSelDisabled || disabled}
										isMulti={false}
										options={selectOptions && selectOptions}
										value={
											!!telSelValue
												? selectOptions?.find((option) => option?.value === telSelValue)
												: undefined
										}
										menuPlacement='auto'
										className='w-[20%]'
										menuPosition='fixed'
										menuPortalTarget={document.body}
										onChange={(selectedOptions) => {
											const syntheticEvent = {
												target: {
													name: telSelName || 'select',
													value: (selectedOptions as SelectOption)?.value,
												},
											};

											telSelChange?.(
												syntheticEvent as ChangeEvent<
													HTMLInputElement | HTMLTextAreaElement
												> & {
													target: {
														name?: string | undefined;
														value: string;
														selectedOptions?: SelectOption[] | undefined;
													};
												}
											);
										}}
										onBlur={telSelBlur && telSelBlur}
										placeholder={telSelPlaceholder}
										components={{
											Option: CustomOption,
											Control: CustomControl,
											DropdownIndicator: CustomDropdownIndicator,
											MultiValueContainer: CustomMultiValueContainer,
											MultiValueLabel: CustomMultiValueLabel,
											MultiValueRemove: CustomMultiValueRemove,
											ClearIndicator: null as unknown as ComponentType<
												ClearIndicatorProps<any, boolean, GroupBase<any>>
											>,
										}}
										closeMenuOnSelect={true}
										hideSelectedOptions={false}
										styles={{
											menuPortal: (base) => ({
												...base,
												zIndex: 9999,
												width: controlRef?.current?.clientWidth,
												left: controlRef?.current?.getBoundingClientRect().left,
												position: 'fixed',
											}),
											valueContainer: (provided) => ({
												...provided,
												padding: 0,
											}),
											menu: (provided) => ({
												...provided,
												backgroundColor: '#fff',
												minHeight: 0,
												height: 'fit-content',
												marginTop: '0.25rem',
												overflow: 'auto',
												padding: '0.25rem 0.375rem',
												borderRadius: '0.5rem',
												border: !!error ? '1px solid #FDA29B' : '1px solid #EAECF0',
												boxShadow:
													'0px 0.75rem 1rem -0.25rem rgba(16, 24, 40, 0.08), 0px 0.25rem 0.375rem -2px rgba(16, 24, 40, 0.03)',
											}),
											multiValueRemove: () => ({}),
											indicatorSeparator: () => ({
												display: 'none',
											}),
											option: () => ({
												padding: '0',
												margin: '0',
											}),
											placeholder: (provided) => ({
												...provided,
												margin: 0,
												padding: 0,
												opacity: 0.7,
												fontWeight: 300,
											}),
											singleValue: (provided) => ({
												...provided,
												fontWeight: 400,
												color: '#667085',
											}),
											multiValue: () => ({
												display: 'flex',
												alignItems: 'center',
												backgroundColor: '#fff',
												gap: '0.1875rem',
												width: 'max-content',
												boxSizing: 'border-box',
												border: '1px solid #D0D5DD',
												padding: '0.25rem',
												borderRadius: '0.375rem',
												margin: 0,
												marginRight: '0.375rem',
											}),
											multiValueLabel: () => ({
												fontSize: '0.875rem',
												color: '#344054',
												fontWeight: 400,
												lineHeight: '1.25rem',
											}),
											control: (baseStyles) => ({
												...baseStyles,
												outline: 'none',
												borderColor: 'transparent',
												minHeight: 0,
												height: '100%',
												cursor: 'pointer',
												fontSize: '1rem',
												fontWeight: 400,
												borderRadius: '0.5rem',
												overflow: 'hidden',
												boxShadow: 'none',
												'& .css-19bb58m': {
													padding: 0,
													margin: 0,
												},
												'& .css-9jq23d': {
													padding: 0,
													paddingRight: '0.625rem',
													margin: 0,
												},
												'& .css-hlgwow': {
													padding: 0,
													margin: 0,
												},
												'& .css-1mjpsdc': {
													padding: 0,
													margin: 0,
												},
												'&:hover': {
													borderColor: 'transparent',
												},
											}),
										}}
										{...otherTelSelProps}
									/>
									<input
										id={telInputName}
										disabled={telInputDisabled || !!disabled}
										name={telInputName}
										type='text'
										placeholder={telInputPlaceholder}
										onBlur={telInputBlur}
										onChange={telInputChange && telInputChange}
										value={telInputValue}
										className={`h-full w-[80%] rounded-r-lg bg-transparent p-[0.625rem_0.875rem_0.625rem_0] text-[.75rem] md:text-[1rem] font-normal leading-6 placeholder:font-light placeholder:opacity-[.7]`}
										{...otherTelInputProps}
									/>
								</div>
							) : (
								<input
									id={name}
									disabled={!!disabled}
									name={name}
									type={type === 'password' && showPassword ? 'text' : type}
									placeholder={placeholder}
									value={value as string}
									onChange={onChange && onChange}
									onBlur={onBlur && onBlur}
									ref={ref}
									className={`border outline-none ${
										!!error
											? 'border-[#FDA29B] text-[#F04438]'
											: 'border-[#0A74EF80] text-black'
									} h-11 w-full rounded-lg bg-transparent p-[0.625rem_0.875rem] text-[.75rem] md:text-[1rem] font-normal leading-6 placeholder:font-light placeholder:opacity-[.7]`}
									{...rest}
								/>
							)}
							{!!error &&
								type !== 'email' &&
								type !== 'password' &&
								type !== 'date' &&
								type !== 'datetime-local' &&
								type !== 'multi-select' &&
								type !== 'select' && (
									<Icon
										className='absolute bottom-0 right-3.5 translate-y-[-85%]'
										icon={'hugeicons:information-circle'}
										color='#F04438'
									/>
								)}

							{type === 'email' &&
								(!!error ? (
									<Icon
										className='absolute bottom-0 right-3.5 translate-y-[-85%]'
										icon={'hugeicons:information-circle'}
										color='#F04438'
									/>
								) : (
									<Icon
										className='absolute group-focus-within:text-[#007FFF] transition-all duration-[.4s] text-[#0A74EF80] bottom-0 right-3.5 translate-y-[-85%]'
										icon={'hugeicons:mail-01'}
									/>
								))}
							{type === 'password' && (
								<button
									onClick={() => setVisibility((formerVisibility) => !formerVisibility)}
									type='button'
									className='cursor-pointer'
								>
									<Icon
										height='1rem'
										width='1rem'
										className={`absolute bottom-0 right-3.5 transition-all duration-[.4s] translate-y-[-85%] ${
											!!error
												? 'text-[#F04438]'
												: 'group-focus-within:text-[#007FFF] text-[#0A74EF80]'
										}`}
										icon={!showPassword ? 'hugeicons:view-off' : 'hugeicons:view'}
									/>
								</button>
							)}
						</div>
						{!!error && (
							<p className='text-[.625rem] md:text-[0.875rem] font-normal leading-5 text-[#F04438]'>
								{error}
							</p>
						)}
					</div>
				);
		}
	)
);

InputField.displayName = 'InputField';

export { InputField };
