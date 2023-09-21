import styled from 'styled-components';

export const InstitutionDetailsContainer = styled.div`
	.institution-logo {
		width: 6%;
	}
`;

const inputContainerWidth = `48`;
const fontFamily = `font-family: outfit, sans-serif;`
export const InputStyle = styled.div`
	width: ${inputContainerWidth}%;
	display: flex;
	gap: 16px;

	label {
		${fontFamily}
		font-weight: 400;
		font-size: 14px;
		line-height: 18px;
	}
	input {
		text-align: right;
	}
	.my-input {
		width: 100%;
		height: 50px;
		border-width: 0px;
		border-radius: 10px;
		box-shadow: unset;
		background-color: white;
		justify-content: center;
		padding: 0px 14px;
		min-height: 35px;
	}
	.input-style {
		--tw-placeholder-opacity: 1;
		color: rgba(169, 169, 169, var(--tw-placeholder-opacity));
		--tw-text-opacity: 1;
		color: rgba(0, 0, 0, var(--tw-text-opacity))
	}
`;