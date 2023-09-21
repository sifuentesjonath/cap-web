import styled from 'styled-components';

export const buttonClassName =`
	hover:bg-gray-200 rounded p-1 text-sm flex align-center justify-center focus:outline-none
`;

const DateSelectorInputDefaultStyle = `
	border-width: 2px;
	border-radius: 1rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
	width: 8rem;
	height: 2.5rem;
	--tw-border-opacity: 1;
	border-color: rgba(106, 194, 75, var(--tw-border-opacity));
	background-color: transparent;
	font-weight: 300;
	font-size: 0.75rem;
	line-height: 1rem;
`

export const DateSelectorInput = styled.input`
	${({className}) => className ? className : DateSelectorInputDefaultStyle}
`;