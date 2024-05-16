type FormProps = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	value: string;
};

const Form = (props: FormProps) => {
	return (
		<form className='form task-form' onSubmit={props.onSubmit}>
			<input
				type='text'
				value={props.value}
				onChange={props.onChange}
				className='form-input'
			/>
			<button type='submit' className='btn'>
				Submit
			</button>
		</form>
	);
};
export default Form;
