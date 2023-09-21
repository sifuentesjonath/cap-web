import { FC, useState } from 'react'
import Image from 'next/image';
import styled from 'styled-components'
import { FontFamilies } from '@/containers/styles/typography';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface INotificationLabelProps {
	date: string;
	icon: StaticImageData,
	subject: string;
	propertyName: string;
}
const NotificationLabel: FC<INotificationLabelProps> = ({ date, icon, subject, propertyName }) => {
	const [isOpen, setIsOpen] = useState(false);
	const buttonMessage = isOpen ? 'Read Less' : 'Read More'
	return (
		<NotificationLabelContainer isOpen={isOpen}>
			<div className='notification-label'>
				<div className='date-label'>{date}</div>
				<div className='icon-label'>
					<Image src={icon} />
				</div>
				<div className='subject'>{subject}</div>
				<div className='property'>
					<FaMapMarkerAlt width={25} height={25} />
					<p>{propertyName}</p>
				</div>
				<div className='actions'>
					<button onClick={() => setIsOpen(value => !value)}>{buttonMessage}</button>
				</div>
			</div>
			{isOpen &&
				<div className='opened-notification'>
					<div className='opened-notification-content-item'>
						<p>Daniel Welsh</p>
						<p>#102 - 192 Colborne St.</p>
						<p>$3,500</p>
					</div>
					<div className='opened-notification-content-item'>
						<p>1987572 Alberta Ltd.</p>
						<p>#102 - 192 Colborne St.</p>
						<p>$1,695</p>
					</div>
					<div className='opened-notification-content-item'>
						<p>1987572 Alberta Ltd.</p>
						<p>#102 - 192 Colborne St.</p>
						<p>$1,695</p>
					</div>
				</div>
			}
		</NotificationLabelContainer>
	)
}

const NotificationLabelContainer = styled.div`
	${FontFamilies.outfitFont};

	background-color: #F7F8F9;
	border-radius: 16px;
	padding: ${({ isOpen }) => isOpen ? '4px 24px 35px' : '4px 24px'};

	.notification-label {
		display: flex;
		align-items: center;
		height: 60px;
		gap: 20px;
	}
	.icon-label {
		/* max-height: 40px; */
		width: 40px;
	}
	.subject {
		font-weight: 500;
    	flex: 1 1 0%;
		font-size: 20px;
		line-height: 28px;
	}
	.property {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		/* width: 240px; */
		/* width: auto; */
		padding: 0 8px;
		background-color: black;
		color: white;
		border-radius: 16px;
	}
	.actions button {
		width: 98px;
		text-decoration: underline;
	}
	.opened-notification {
		border-top: 2px solid #C1C1C1;;
		padding-top: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
	.opened-notification-content-item {
		width: 640px;
		margin: 0 auto;
		display: inline-grid;
		grid-template-columns: repeat(3, 1fr);
		/* display: flex;
		justify-content: space-around; */
	}
`;

export default NotificationLabel