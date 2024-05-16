import { useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

const TaskComponent = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [value, setValue] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!value) {
			alert('Please provide the task...');
			return;
		}
		
		addTask({
			id: new Date().getTime().toString(),
			description: value.trim(),
			isCompleted: false,
		});
		setValue('');
	};

	const addTask = (task: Task): void => {
		setTasks([...tasks, task]);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<section>
			<h2>Tasks</h2>
			<Form onChange={handleChange} value={value} onSubmit={handleSubmit} />
			<List>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							{task.description}
							<input type='checkbox' />
						</li>
					);
				})}
			</List>
		</section>
	);
};

export default TaskComponent;
