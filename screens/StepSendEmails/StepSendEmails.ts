import usePropertyFee from "@/hooks/usePropertyFee";
import { TitleHolderType } from "@/service/apiTypes";

export type EmailType = { 
	Id: string; 
	Name: string; 
	Email: string; 
	PropertyFee: string;
}

export const updateEmails = (
	emails: EmailType[], 
	onChange: {
		titleHolder: TitleHolderType, 
		email: string
	}
):EmailType[] => {
	const { 
		titleHolder: {
			Id: titleHolderId,
			FirstName: titleHolderFirstName,
			LastName: titleHolderLastName,
			PropertiesOwned
		}, 
		email
	} = onChange;

	const isTitleHolderId = ({ Id }: EmailType) => Id === titleHolderId.toString();

	let registeredEmails:EmailType[] = [...emails];

	const registeredEmail = registeredEmails.findIndex(isTitleHolderId);
	const isEmailFound = registeredEmail != -1;

	if(isEmailFound){
		registeredEmails[registeredEmail].Email = email;
		return registeredEmails;
	} 

	const newEmail:EmailType = {
		Id: titleHolderId.toString(),
		Name: `${titleHolderFirstName || ''} ${titleHolderLastName || ''}`,
		Email: email,
		PropertyFee: `${usePropertyFee(PropertiesOwned)}%`,
	}
	registeredEmails.push(newEmail);

	return registeredEmails;
}

export const getEmailableTitleHolders = (titleHolders: TitleHolderType[]) => {
	const haveAtLeastOneProperty = ({ PropertiesOwned }: TitleHolderType) => PropertiesOwned != 0;
	const titleHoldersLength = titleHolders.length;

	const emailableTitleHolders = titleHolders.filter(haveAtLeastOneProperty);
	const isATitleHolderNotEmailable = emailableTitleHolders.length != titleHoldersLength;

	return {
		emailableTitleHolders,
		isATitleHolderNotEmailable
	};
}