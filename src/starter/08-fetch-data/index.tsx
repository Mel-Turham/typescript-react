import { fetchTours } from './type';
import { useQuery } from '@tanstack/react-query';

const FetchToursData = () => {
	const {
		isPending,
		isError,
		error,
		data: tours,
	} = useQuery({
		queryKey: ['tours'],
		queryFn: fetchTours,
	});

	if (isPending) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	}

	if (isError) {
		return (
			<div>
				<h2>Error: {error.message}</h2>
			</div>
		);
	}

	return (
		<div>
			<h1 className='mb-1'>Tours</h1>
			{tours.map((tour) => {
				return (
					<p className='mb-1' key={tour.id}>
						{tour.name}
					</p>
				);
			})}
		</div>
	);
};

export default FetchToursData;
