'use client';

import { cn } from '@/lib/utils';
import { inter } from '../layout';
import { Button, InputField } from '@/components/common';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { HireTalentFormData, hireTalentSchema } from '@/schemas';
import { toast } from 'sonner';
import { useHireTalent } from '@/hooks/useHireTalent';

const HireTalent = () => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<HireTalentFormData>({
		resolver: yupResolver(hireTalentSchema),
		defaultValues: {
			fullName: '',
			email: '',
			companyName: '',
			companyWebsite: '',
			socialMedia: '',
			jobRole: '',
			experienceLevel: '',
			jobDescription: '',
		},
	});

	const { submitHireTalent, isSubmitting } = useHireTalent({
		onSuccess: () => {
			toast.success("Form submitted successfully! We'll get back to you soon!.");
			reset();
		},
		onError: (error) => {
			toast.error(error);
		},
	});

	const onSubmit = async (data: HireTalentFormData) => {
		await submitHireTalent(data);
	};

	return (
		<>
			<section className='pt-20 lg:pt-39 bg-white'>
				<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-fullx2.png)] bg-center bg-cover py-8 md:py-20 lg:py-30'>
					<div className='max-w-350 mx-auto'>
						<h1 className='text-[1.5rem] md:text-[2.5rem] font-semibold text-center mb-2 md:mb-3'>
							Hire Our Talent
						</h1>
						<p
							className={cn(
								inter?.className,
								'text-black text-[0.75rem] md:text-[1rem] text-center mb-8 md:mb-16 font-normal'
							)}
						>
							Ready to hire? Accurately fill out the forms below to secure talent from
							our program.
						</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[3.75rem_7.5rem]'>
								{[
									{
										name: 'fullName' as const,
										label: 'Full Name',
										type: 'text' as const,
										placeholder: 'Johnex Doe',
									},
									{
										name: 'email' as const,
										label: 'Email address',
										type: 'email' as const,
										placeholder: 'johnex@example.com',
									},
									{
										name: 'companyName' as const,
										label: "Company's name",
										type: 'text' as const,
										placeholder: 'Acme Inc.',
									},
									{
										name: 'companyWebsite' as const,
										label: "Company's website link",
										type: 'text' as const,
										placeholder: 'https://johnex.com',
									},
									{
										name: 'socialMedia' as const,
										label: "Company's Social Media Handles",
										type: 'text' as const,
										placeholder: '@company',
									},
									{
										name: 'jobRole' as const,
										label: 'Job Role',
										type: 'text' as const,
										placeholder: 'Senior Developer',
									},
									{
										name: 'experienceLevel' as const,
										label: 'Experience Level',
										type: 'select' as const,
										placeholder: 'Select experience level',
										selectOptions: [
											{ value: 'entry', label: 'Entry Level' },
											{ value: 'intermediate', label: 'Intermediate' },
											{ value: 'senior', label: 'Senior' },
											{ value: 'lead', label: 'Lead' },
										],
									},
									{
										name: 'jobDescription' as const,
										label: 'Job Description',
										type: 'textarea' as const,
										placeholder:
											'Describe the role, responsibilities, and requirements...',
									},
								].map((field) => (
									<Controller
										key={field.name}
										name={field.name}
										control={control}
										render={({ field: { onChange, onBlur, value, ref } }) => (
											<InputField
												name={field.name}
												label={field.label}
												type={field.type}
												placeholder={field.placeholder}
												selectOptions={field.selectOptions}
												value={value}
												onChange={onChange}
												onBlur={onBlur}
												ref={ref}
												error={errors[field.name]?.message}
											/>
										)}
									/>
								))}
							</div>
							<div className='flex justify-center mt-8 md:mt-15'>
								<Button
									type='submit'
									loading={isSubmitting}
									disabled={isSubmitting}
									className='p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem]'
								>
									Submit Form
								</Button>
							</div>
						</form>
					</div>
				</section>
			</section>
		</>
	);
};

export default HireTalent;
