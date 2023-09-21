import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';

enum UnitBathRoom {
	NotSet,
	OneBath,
	OnePointFiveBath,
	TwoBath,
	TwoPointFiveBath,
	ThreeBath,
	FourBath,
	FiveBath,
	FivePlusBath,
	ThreePointFiveBasth,
	FourPointFiveBath,
}

export const getUnitBathroomOptionByValue = (findValue: string):IOptionsProps => {
	const option = UnitBathroomOptions.findIndex(({ value }) => value === findValue);
	return  UnitBathroomOptions[option];
}

export const UnitBathroomOptions: IOptionsProps[] = [
	{
		label: 'One bath',
		value: UnitBathRoom.OneBath.toString(),
	},
	{
		label: 'One bath and a half',
		value: UnitBathRoom.OnePointFiveBath.toString(),
	},
	{
		label: 'Two baths',
		value: UnitBathRoom.TwoBath.toString(),
	},
	{
		label: 'Two baths and a half',
		value: UnitBathRoom.TwoPointFiveBath.toString(),
	},
	{
		label: 'Three baths',
		value: UnitBathRoom.ThreeBath.toString(),
	},
	{
		label: 'Three baths and a half',
		value: UnitBathRoom.ThreePointFiveBasth.toString(),
	},
	{
		label: 'Four baths',
		value: UnitBathRoom.FourBath.toString(),
	},
	{
		label: 'Four baths and a half',
		value: UnitBathRoom.FourPointFiveBath.toString(),
	},
	{
		label: 'Five baths',
		value: UnitBathRoom.FiveBath.toString(),
	},
]