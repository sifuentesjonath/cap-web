import { FC, useEffect, useRef } from 'react'
// Helpers
import { getRandomThumbnail, ThumbNailType } from '@components/block/PropertyDisplay/properties';
// Components
import CondooModal from '../../index'
import UpdatePropertyForm from './UpdatePropertyForm';
import { InformationContent } from './style'
// Types
import { IProperty } from '@/containers/App/Properties/utils/types';
import PropertyInformation from './PropertyInformation';
import parsePropertyName from '@utils/property/parsePropertyName';

interface IUpdatePropertyModalProps {
	property: IProperty
	toggle: boolean;
	onClose: () => void;
}
const UpdatePropertyModal: FC<IUpdatePropertyModalProps> = ({
	property,
	toggle,
	onClose
}) => {
	const thumbNail = useRef<ThumbNailType>(getRandomThumbnail());
	const propertyName = parsePropertyName(property);

	useEffect(() => { thumbNail.current = getRandomThumbnail(); }, []);
	return (
		<CondooModal
			title={propertyName}
			toggle={toggle}
			onClose={onClose}
			modalImageBackground={thumbNail.current.background}
			modalImage={thumbNail.current.icon}
			aboveChildren={
				<InformationContent>
					<PropertyInformation
						topLabel='Address' topValue={propertyName}
						bottomLabel='Title Holder' bottomValue={property.TitleHolder}
					/>
					<PropertyInformation
						topLabel='Current Tenant' topValue={property.CurrentTenant}
						bottomLabel='Contract' bottomValue={property.Contract}
					/>
				</InformationContent>
			}
		>
			<UpdatePropertyForm property={property} onCloseModal={onClose} />
		</CondooModal>
	)
}

export default UpdatePropertyModal