import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import {TitleHolderType } from '@/service/apiTypes';

export const formatTitleHoldersAsOptions = (titleHolders: TitleHolderType[]) => {
	const titleHolderOptions = titleHolders?.map(createTitleHolderOption);
	return titleHolderOptions;
}

const createTitleHolderOption = ({
	Id,
	FirstName,
	LastName = ''
}: TitleHolderType):IOptionsProps => {
	return {
		value: Id.toString(),
		label: [FirstName, LastName].join(' '),
	}
}