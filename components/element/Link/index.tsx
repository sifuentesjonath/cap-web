import { forwardRef } from 'react'
import ToLink from 'next/link'
import anchorStyles, { anchorStylesType } from './handleAnchorStyle'

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string;
	type?: anchorStylesType;
	disabled?: boolean;
}
const Link = forwardRef(({ to, type, ...props }: ILinkProps, ref: any) => {
	const StyledAnchor = anchorStyles[type] ?? anchorStyles.normal;

	if (props.disabled) return <StyledAnchor {...props} ref={ref} />;

	return (
		<ToLink href={to} passHref>
			<StyledAnchor {...props} ref={ref} />
		</ToLink>
	)
})

Link.displayName = 'Link';
export default Link;