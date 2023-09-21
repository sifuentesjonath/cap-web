import { TitleHolderType } from "@/service/apiTypes";
import { IOptionsProps } from "@/src/components/StyledSelect/SelectOnly";

export interface ITitleHolderOption extends IOptionsProps {
	email?: string;
}
/** Returns title holders as an array of selectable options with their `Email` */
const useTitleHoldersAsOptions = (titleHolders: TitleHolderType[]): ITitleHolderOption[] => {
	if (titleHolders.length == 0) return [];

	const titleHoldersOptions: ITitleHolderOption[] = titleHolders.map(({ Id, FirstName, LastName, Email }) => {
		const newOption: ITitleHolderOption = {
			value: Id.toString(),
			label: `${FirstName} ${LastName}`,
			email: Email
		}
		return newOption;
	})

	return titleHoldersOptions;
}

export default useTitleHoldersAsOptions;