import { useReducer } from 'react';
import { initialState, counterReducer } from './reducer';
const Reducers = () => {
	const [state, dispatch] = useReducer(counterReducer, initialState);
	return (
		<div>
			<h2>Count:{state.count}</h2>
			<h2>Status:{state.status}</h2>

			<div className='btn-container'>
				<button className='btn' onClick={() => dispatch({ type: 'Increment' })}>
					Increment
				</button>
				<button className='btn' onClick={() => dispatch({ type: 'Decrement' })}>
					Decrement
				</button>
				<button className='btn' onClick={() => dispatch({ type: 'Reset' })}>
					Reset
				</button>
			</div>
			<div className='btn-container'>
				<button
					className='btn'
					onClick={() => dispatch({ type: 'setStatus', payload: 'active' })}
				>
					Set status active
				</button>

				<button
					className='btn'
					onClick={() => dispatch({ type: 'setStatus', payload: 'inactive' })}
				>
					Set status inactive
				</button>
			</div>
		</div>
	);
};

export default Reducers;
