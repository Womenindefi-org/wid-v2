import * as yup from 'yup';

export type HireTalentFormData = yup.InferType<typeof hireTalentSchema>;

export const hireTalentSchema = yup.object({
	fullName: yup
		.string()
		.required('Full name is required')
		.min(2, 'Name must be at least 2 characters'),
	email: yup
		.string()
		.required('Email is required')
		.email('Please enter a valid email address'),
	companyName: yup
		.string()
		.required('Company name is required')
		.min(2, 'Company name must be at least 2 characters'),
	companyWebsite: yup
		.string()
		.required('Company website is required')
		.url('Please enter a valid URL (e.g., https://example.com)'),
	socialMedia: yup.string().required('Social media handle is required'),
	jobRole: yup
		.string()
		.required('Job role is required')
		.min(2, 'Job role must be at least 2 characters'),
	experienceLevel: yup.string().required('Experience level is required'),
	jobDescription: yup
		.string()
		.required('Job description is required')
		.min(50, 'Job description must be at least 50 characters'),
});
