import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';
import { FC } from 'react';
import styled from 'styled-components'
import { IInfoItemProps } from './SetupFinalSucces';

const InfoItem: FC<IInfoItemProps> = ({
	index,
	descriptionMd,
	descriptionSm,
}) => {
	return (
		<div className="flex flex-col md:flex-row md:items-start w-full sm:w-9/12 md:w-full  mb-5 ">
			<div className="flex-1 flex flex-col">
				<div className="flex-1 flex flex-row items-center">
					<div >
						<Description>{descriptionMd}</Description>
					</div>
					{/* <div className="md:hidden text-base md:text-left text-thinGray text-sm flex-1 " >
						{descriptionSm}
					</div> */}
				</div>
			</div>
		</div>
	);
};

const Description = styled.p`
	${TypographyDesktop.Paragraph};
	${FontFamilies.outfitFont};
`;

export default InfoItem;