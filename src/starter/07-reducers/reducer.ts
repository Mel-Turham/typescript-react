const initialState: CounterState = {
	count: 0,
	status: 'Pending',
};

type CounterState = {
	count: number;
	status: string;
};

type UpdateCountAction = {
	type: 'Increment' | 'Decrement' | 'Reset';
};

type SteStatusAction = {
	type: 'setStatus';
	payload: 'active' | 'inactive';
};

type CounterAction = UpdateCountAction | SteStatusAction;
const counterReducer = (
	state: CounterState,
	action: CounterAction,
): CounterState => {
	switch (action.type) {
		case 'Increment':
			return { ...state, count: state.count + 1 };
		case 'Decrement':
			return {
				...state,
				count: state.count === 0 ? state.count : state.count - 1,
			};
		case 'Reset':
			return { ...state, count: (state.count = 0) };

		case 'setStatus':
			return { ...state, status: action.payload };
		default:
			return state;
	}
};

export { initialState, counterReducer };
