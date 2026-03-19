import { useState } from 'react';
import axios from 'axios';
import { HireTalentFormData } from '@/schemas';

interface UseHireTalentOptions {
	onSuccess?: () => void;
	onError?: (error: string) => void;
}

export const useHireTalent = (options?: UseHireTalentOptions) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitHireTalent = async (data: HireTalentFormData) => {
		setIsSubmitting(true);

		try {
			await axios.post('/api/hire-talent', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			options?.onSuccess?.();
		} catch (error) {
			const errorMessage = axios.isAxiosError(error)
				? error.response?.data?.message || 'Failed to submit form'
				: 'An unexpected error occurred';

			options?.onError?.(errorMessage);
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		submitHireTalent,
		isSubmitting,
	};
};
