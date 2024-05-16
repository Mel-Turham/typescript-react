import { useTheme, ThemeProvider } from './context';

const ParentComponent = () => {
	return (
		<ThemeProvider>
			<ContextApi />
		</ThemeProvider>
	);
};

const ContextApi = () => {
	const context = useTheme();
	console.log(context);
	return (
		<div>
			<h2>React & Typescript</h2>
			<button
				onClick={() => {
					if (context.theme === 'dark') {
						context.setTheme('system');
						return;
					}
					context.setTheme('dark');
				}}
				className='btn btn-center'
			>
				Toggle theme
			</button>
		</div>
	);
};

export default ParentComponent;
