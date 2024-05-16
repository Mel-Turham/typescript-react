import { useAppDispatch, useAppSelector } from '../../hook';

import { decrement, increment, reset, setStatus } from './counterSlice';

const ReduxToolkit = () => {
	const { count, status } = useAppSelector((state) => state.counter);

	const dispatch = useAppDispatch();
	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Status:{status}</h2>
			<div className='btn-container'>
				<button className='btn' onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button className='btn' onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button className='btn' onClick={() => dispatch(reset())}>
					Reset
				</button>
			</div>

			<div className='btn-container'>
				<button className='btn' onClick={() => dispatch(setStatus('active'))}>
					Set status to active
				</button>
				<button className='btn' onClick={() => dispatch(setStatus('inactive'))}>
					Set status to inactive
				</button>
			</div>
		</div>
	);
};

export default ReduxToolkit;
