import { FC, ReactElement } from 'react'
import {
	FrameContainer,
} from './style'

interface ICondooFrameProps {
	leftChild: ReactElement;
	rightChild: ReactElement;
}
/** Reusable component that behaves as a frame, can align two components and treat them responsively */
const CondooFrame: FC<ICondooFrameProps> = ({ leftChild: LeftChild, rightChild: RightChild }) => {
	return (
		<FrameContainer>
			{LeftChild}
			{RightChild}
		</FrameContainer>
	)
}


export default CondooFrame