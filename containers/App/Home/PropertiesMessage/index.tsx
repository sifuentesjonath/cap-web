import { FC } from 'react'
import Link from 'next/link';
import { SubTitle } from '../style';
import { getYouHaveActivePropertiesMessage } from '@utils/handleUserMessages/propertyMessages';

interface IPropertiesMessageProps {
	propertyLength: number;
}
const PropertiesMessage: FC<IPropertiesMessageProps> = ({ propertyLength }) => {
	const activePropertiesMessage = getYouHaveActivePropertiesMessage(propertyLength);
	return (
		<>
			{propertyLength != 0 ?
				<>
					<SubTitle>{activePropertiesMessage}</SubTitle>
					<div style={{ marginLeft: 30 }}>
						<Link href="app/properties">
							<a>View properties</a>
						</Link>
					</div>
				</>
				:
				<SubTitle>You have no active properties</SubTitle>
			}
		</>
	)
}


export default PropertiesMessage