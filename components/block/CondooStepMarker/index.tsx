import { FC } from 'react'
import Button from '../Button';
import {
	StepMarkerContainer,
	SubContainer,
	Part,
	Title,
	Description,
} from './style'

interface ICondooStepMarkerProps {
	partIndicator: string;
	title: string;
	description: string;
	onClick: () => void;
	buttonMessage?: string;
}
const CondooStepMarker:FC<ICondooStepMarkerProps> = (props) => {
	const { partIndicator, title, description, onClick, buttonMessage='Continue' } = props;
	return (
		<StepMarkerContainer>
			<SubContainer>
				<Part>{partIndicator}</Part>
				<Title>{title}</Title>

				<Description>{description}</Description>

				<Button onClick={onClick}>{buttonMessage}</Button>
			</SubContainer>
		</StepMarkerContainer>
	)
}

export default CondooStepMarker