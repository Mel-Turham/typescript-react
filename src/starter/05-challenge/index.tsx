type BasicProfileCardProps = {
	name: string;
	type: 'basic';
};
type AdvancedProfileCardProps = {
	name: string;
	email: string;
	type: 'advanced';
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

const Challenge = (props: ProfileCardProps) => {
	const { name, type, email } = props;

	if (type === 'basic') {
		return (
			<article className='alert alert-success'>
				<h2>user: {name}</h2>
			</article>
		);
	}

	return (
		<article className='alert alert-danger'>
			<h2>user: {name}</h2>
			<h2>email: {email}</h2>
		</article>
	);
};

export default Challenge;
