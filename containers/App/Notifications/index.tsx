import { FC, useState } from 'react'
// Components
import SelectOnly, { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import wrenchIcon from '@/public/images/notification-wrench-icon.png';
// Hooks
import { usePropertiesData } from '@/service/useApi/Property';
// Helper
import convertPropertyAsOptionItem from '@utils/property/convertAsOptionItem';
// Redux
import { useSelector } from 'react-redux';
// Style
import AppLayout from '@components/layout/AppLayout';
import { NotificationsContainer } from './style';
import StyledLoader from '@components/element/StyledLoader';
import useDateFilter from '@components/block/DateFilterFromTo/useDateFilter';
import NotificationLabel from './NotificationLabel';

export type HomeWithLayout = FC & { layout: typeof AppLayout };
const Notifications = () => {
	const logged = useSelector((state: any) => state.auth.Email);
	const [propertiesOptions, setPropertiesOptions] = useState<IOptionsProps[]>([]);

	const { isFetching: isFetchingProperties } = usePropertiesData(logged, {
		onSuccess: (properties) => {
			const propertiesAsOptions = convertPropertyAsOptionItem(properties);
			setPropertiesOptions(propertiesAsOptions);
		},
		refetchOnWindowFocus: false,
	});

	// better implementation, avoids passing setStates as the previous implementation
	const { fromDateState, toDateState, DatePickers } = useDateFilter(
		// { // TODO: implement onChange in custom hook
		// 	onChange: (fromDate, toDate) => {
		// 		console.log({ fromDate, toDate });
		// 	}
		// }
	);
	console.log({ fromDateState, toDateState });

	// Page actions
	const loaders = [isFetchingProperties];
	return (
		<NotificationsContainer>
			{loaders.includes(true) && <StyledLoader />}

			<div className='notifications-top-panel'>
				<div className='property-filter'>
					<h4>Select Property</h4>
					<SelectOnly
						className='select-input'
						placeholder='Select'
						onChange={(option) => console.log(option)}
						options={propertiesOptions}
						styles={{ width: 261, height: 50 }}
					/>
				</div>
				<div className='name-filter'>
					<h4>Name on Title</h4>
					<SelectOnly
						className='select-input'
						placeholder='Select'
						onChange={(option) => console.log(option)}
						options={[]}
						styles={{ width: 261, height: 50 }}
					/>
				</div>
				<div className='date-filter'>
					<h4>Time Range</h4>
					<div className='inputs'>
						<DatePickers.from />
						<DatePickers.to />
					</div>
				</div>
			</div>
			<div className='page-container'>
				<div className='notifications-container'>
					<h3>february</h3>
					<NotificationLabel
						date={'16:23 · Feb 22'}
						icon={wrenchIcon}
						subject={'Maintenance Approved'}
						propertyName={'123 Maine St, Toronto'}
					/>
					<NotificationLabel
						date={'16:23 · Feb 22'}
						icon={wrenchIcon}
						subject={'Tenant moved in'}
						propertyName={'123 Maine St, Toronto'}
					/>
					<NotificationLabel
						date={'16:23 · Feb 22'}
						icon={wrenchIcon}
						subject={'Tenant vacated'}
						propertyName={'123 Maine St, Toronto'}
					/>
				</div>
			</div>
		</NotificationsContainer>
	)
}


export default Notifications