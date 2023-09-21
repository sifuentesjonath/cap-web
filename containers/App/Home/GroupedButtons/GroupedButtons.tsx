import { FC } from 'react'
import ToggleGroupActiveItem, { IToggleGroupActiveOption } from '@components/block/ToggleGroupActiveChange';
// Style
import styles from '../index.module.scss';
import { GroupedButtonsContainer } from '../style'
import { ChartStyleType } from '@/hooks/useChartView';

interface IGroupedButtonsProps {
	dateOptions: IToggleGroupActiveOption[],
	chartStyle: ChartStyleType,
	dateView: string,
	onViewChange: (value) => string,
	isMobile?: boolean;
}
const GroupedButtons: FC<IGroupedButtonsProps> = (
	{ dateOptions, chartStyle, dateView, onViewChange, isMobile }
) => {
	return (
		<GroupedButtonsContainer isMobile={isMobile}>
			<ToggleGroupActiveItem
				options={dateOptions}
				onValueChange={(value) => onViewChange(value)}
				className={``}
				itemClassName={`${styles[chartStyle.toggleItem]}`}
				itemClassNameActive={`${styles[chartStyle.toggleItemActive]}`}
				currentActive={`${dateView}`}
			/>
		</GroupedButtonsContainer>
	)
}

export default GroupedButtons