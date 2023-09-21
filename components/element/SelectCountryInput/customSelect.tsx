import { FC } from 'react'
import Select, { components } from 'react-select'

const placementStyle = {
	display: 'flex',
	gap: '12px'
}
const imageStyle = {
	width: '32px',
	borderRadius: '3px'
}

const { Option } = components;
const OptionIcon = (props) => {
	return (
		<Option {...props}>
			<div style={placementStyle}>
				<img src={props.data.icon} alt={props.data.label}
					style={imageStyle}
				/>
				<p>{props.data.label}</p>
			</div>
		</Option>
	)
}

const { SingleValue } = components;
const SingleValueIcon = (props) => {
	return (
		<SingleValue {...props}>
			<div style={placementStyle}>
				<img src={props.data.icon} alt={props.data.label}
					style={imageStyle}
				/>
				<p>{props.data.label}</p>
			</div>
		</SingleValue>
	)
}

export {
	OptionIcon,
	SingleValueIcon,
}