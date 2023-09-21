import React from 'react'

const dobuleInputContainerStyle = `flex items-center w-11/12 justify-between mb-3`;

const DoubleInputContainer:React.FC = ({ children }) => {
	return (
		<div className={dobuleInputContainerStyle}>
			{children}
		</div>
	)
}

export default DoubleInputContainer