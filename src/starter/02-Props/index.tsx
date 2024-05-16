import { type PropsWithChildren } from 'react';

type ComponentProps = PropsWithChildren<{
	name: string;
	id?: number;
	// type of children props in react/ts
	// children?: React.ReactNode;
}>;



// interface PropsTypes {
// 	name: string;
// 	id?: number;
// }


const PropsComponent = ({ name, id, children }: ComponentProps) => {
	return (
		<div>
			<h2>Name:{name}</h2>
			<h2>Id: {id}</h2>
			{children}
		</div>
	);
};
export default PropsComponent;
