import { CSSProperties } from "react";
import styled, { css } from 'styled-components';

const marginTop = '28px';

export const cookieConsentStyle:CSSProperties = {
	background: "#00BF92",
	fontFamily: 'outfit, sans-serif',
	paddingTop: marginTop,
	padding: `28px 16px`,
	alignItems: 'center',
}

export const cookieConsentButtonStyle:CSSProperties = {
	background: "white",
	color: 'black',
	borderRadius: '180px',
	minWidth: '160px',
	marginTop: 'auto',
	marginBottom: 'auto',
	height: '44px'
}

export const cookieConsentContentStyle:CSSProperties = {
	background: "inherit",
	color: 'white',
	maxWidth: '750px',
	fontWeight: 'bold',
	fontSize: '14px',
}
