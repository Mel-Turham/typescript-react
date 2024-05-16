import { useState } from 'react';

type Link = {
	id: number;
	url: string;
	text: string;
};

const navLinks:Link[]= [
	{
		id: 1,
		url: 'some url',
		text: 'text 1',
	},
	{
		id: 2,
		url: 'some url',
		text: 'text 2',
	},
	{
		id: 3,
		url: 'some url',
		text: 'text 3',
	},
	{
		id: 4,
		url: 'some url',
		text: 'text 4',
	},
];

const ComponentState = () => {
	const [list, setlist] = useState<Link[]>(navLinks);

	return (
		<div>
			<h2 className='mb-1'>React and typescript</h2>
			<button className='btn btn-center'>Click me</button>
		</div>
	);
};

export default ComponentState;
