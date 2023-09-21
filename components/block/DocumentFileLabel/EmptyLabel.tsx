import React, { FC } from 'react'
// Styles
import { EmptyLabelContainer } from './style'

interface IEmptyDocumentLabel {
}
const EmptyDocumentLabel: FC<IEmptyDocumentLabel> = props => {
	return (
		<EmptyLabelContainer>
			<p className="message">
				No documents to show at this time.
			</p>
		</EmptyLabelContainer>
	)
}

export default EmptyDocumentLabel;