import { useState } from 'react';
const Events = () => {
	const [email, setEmail] = useState('');
	const [text, setText] = useState('');

	type Person = {
		name: string;
	};

	const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		// const formData = new FormData(e.target as HTMLFormElement);
		console.log(data);
 
		const text = formData.get('text') as string;
		// const person: Person = { name: text };

    const person:Person = {name: data.text as string}
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	return (
		<section>
			<h2>events example</h2>
			<form className='form' onSubmit={handleOnsubmit}>
				<input
					type='text'
					name='text'
					className='form-input mb-1'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<input
					type='email'
					name='email'
					className='form-input mb-1'
					value={email}
					onChange={handleChange}
				/>
				<button type='submit' className='btn btn-block '>
					Submit
				</button>
			</form>
		</section>
	);
};

export default Events;
