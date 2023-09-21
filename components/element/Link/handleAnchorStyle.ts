import { ButtonAnchor, NormalAnchor } from "./styles/anchorStyles";

export type anchorStylesType = 
	'normal' | 
	'button';

const anchorStyles = {
	normal: NormalAnchor,
	button: ButtonAnchor,
}


export default anchorStyles;