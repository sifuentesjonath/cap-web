import ToggleGroupActive, { IToggleGroupActiveOption } from '@components/block/ToggleGroupActiveChange';
import { StyledActiveToggle } from './style';

const ItemsWithScroll = ({ itemOptions, onValueChange, defaultActive, }) => {

	const onItemIsSelected = (itemId: string): string => {
		onValueChange(itemId);
		return itemId;
	}

	return (
		<StyledActiveToggle>

			{itemOptions && defaultActive &&
				<ToggleGroupActive
					options={itemOptions}
					onValueChange={(value) => onItemIsSelected(value)}
					className={`toggle-item-container`}
					itemClassName={`toggle-item`}
					itemClassNameActive={`toggle-item-active`}
					currentActive={defaultActive}
				/>
			}

		</StyledActiveToggle>
	)
}

export default ItemsWithScroll;