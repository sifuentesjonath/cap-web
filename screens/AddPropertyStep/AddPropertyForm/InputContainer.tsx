import React from 'react'

const inputContainerStyle = `h-10 lg:h-10 xl:h-10 w-11/12 mb-3`;
const InputContainer:React.FC = ({ children }) => {
	return (
		<div className={inputContainerStyle}>
			{children}
		</div>
	)
}

export default InputContainer;