import { FC } from 'react'

interface IExplanationParagraphProps {
	title: string;
}
const ExplanationParagraph: FC<IExplanationParagraphProps> = (props) => {
	const { title, children } = props;
	return (
		<>
			{/* native jsx to be styled like you want using a styled component */}
			<h2>{title}</h2>
			{children}
		</>
	)
}

export default ExplanationParagraph