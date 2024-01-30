import classnames from 'classnames';

type Props = {
	children?: React.ReactNode;
	className?: string;
};

export const Container = ({ children, className }: Props) => {
	return (
		<div className={classnames('w-full border-2 border-black p-4', className)}>{children}</div>
	);
};
