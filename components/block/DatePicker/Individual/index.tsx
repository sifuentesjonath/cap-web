import { FC, useState, useEffect } from 'react';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

import styled from 'styled-components';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

type dateObject = {
	year: number;
	month: number;
	day: number;
}

interface IDatePickerProps {
	defaultValue?: Date;
	onDateSelected: (date: Date) => void;
}
const DatePicker: FC<IDatePickerProps> = ({ onDateSelected, defaultValue }) => {
	const [date, setDate] = useState<dateObject>({
		year: undefined,
		month: undefined,
		day: undefined,
	});

	const asDate = ({ year, month, day }: dateObject): Date => new Date(year, month, day);
	const isDate = (date: Date): boolean => {
		//@ts-ignore
		return !isNaN(Date.parse(date));
	}

	useEffect(() => {
		const newDate = asDate(date);
		if (!isDate(newDate)) return
		onDateSelected(newDate);
	}, [date])

	const defaultYearValue = defaultValue ? defaultValue.getFullYear().toString() : 'YYYY';
	const defaultMonthValue = defaultValue ? (defaultValue.getMonth() + 1).toString() : 'MM';
	const defaultDayValue = defaultValue ? defaultValue.getDate().toString() : 'DD';

	return (
		// you can remove this div and leave it as a fragment if you don't want them in a single row
		<StyledDatePicker>
			<YearPicker reverse start={1930} value={date.year}
				id={'birthday-year'}
				defaultValue={defaultYearValue}
				onChange={year => setDate({ ...date, year: parseInt(year) })}
				classes='default main' />

			<MonthPicker numeric value={date.month} year={date.year}
				id={'birthday-month'}
				defaultValue={defaultMonthValue}
				onChange={month => setDate({ ...date, month: parseInt(month) })}
				classes='default' />

			<DayPicker value={date.day} year={date.year} month={date.month}
				id={'birth-day'}
				defaultValue={defaultDayValue}
				onChange={day => setDate({ ...date, day: parseInt(day) })}
				classes='default' />
		</StyledDatePicker>
	)
}

const StyledDatePicker = styled.div`
	// default styles can be overwritten by copying these styles 
	display: flex;
	gap: 4px;
	justify-content: space-between;
	${TypographyDesktop.InputLabel};
	${FontFamilies.outfitFont};
	.default {
		height: 52px;
		border: 1px solid #E1E1E1;
		border-radius: 8px;
		box-shadow: unset;
		background-color: white;
		justify-content: center;
		min-height: 35px;
		&:focus {
			box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
					0px 10px 20px -15px rgba(22, 23, 24, 0.2);
		}
	}
	.main {
		width: 45%;
	}
`;

export default DatePicker