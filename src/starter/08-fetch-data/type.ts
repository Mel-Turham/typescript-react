import { z } from 'zod';
import axios from 'axios';
const url = 'https://www.course-api.com/react-tours-project';

export const toursSchema = z.object({
	id: z.string(),
	name: z.string(),
	image: z.string(),
	info: z.string(),
	price: z.string(),
});

export type Tour = z.infer<typeof toursSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
	const response = await axios.get<Tour[]>(url);
	const result = toursSchema.array().safeParse(response.data);
	console.log(result);
	if (!result.success) {
		throw new Error('Failed to parse tours');
	}
	return result.data;
};
