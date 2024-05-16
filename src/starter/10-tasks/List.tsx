type ChildrenProps = {
	children: React.ReactNode;
};

const List = (props: ChildrenProps) => {
	return <ul className='list'>{props.children}</ul>;
};
export default List;
