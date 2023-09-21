import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';

enum UnitBedroom {
	NotSet,
	Studio,
	OneBed,
	TwoBed,
	ThreeBed,
	FourBed,
	FiveBed,
	SixBed,
	SevenBed,
	EightBed,
	NineBedPlus,
}

export const getUnitBedroomOptionByValue = (findValue: string):IOptionsProps => {
	const option = UnitBedroomOptions.findIndex(({ value }) => value === findValue);
	return  UnitBedroomOptions[option];
}

export const UnitBedroomOptions: IOptionsProps[] = [
	{
		label: 'Studio',
		value: UnitBedroom.Studio.toString(),
	},
	{
		label: 'One bed',
		value: UnitBedroom.OneBed.toString(),
	},
	{
		label: 'Two beds',
		value: UnitBedroom.TwoBed.toString(),
	},
	{
		label: 'Three beds',
		value: UnitBedroom.ThreeBed.toString(),
	},
	{
		label: 'Four beds',
		value: UnitBedroom.FourBed.toString(),
	},
	{
		label: 'Five beds',
		value: UnitBedroom.FiveBed.toString(),
	},
	{
		label: 'Six beds',
		value: UnitBedroom.SixBed.toString(),
	},
	{
		label: 'Seven beds',
		value: UnitBedroom.SevenBed.toString(),
	},
	{
		label: 'Eight beds',
		value: UnitBedroom.EightBed.toString(),
	},
	{
		label: 'Nine beds or more',
		value: UnitBedroom.NineBedPlus.toString(),
	},
]