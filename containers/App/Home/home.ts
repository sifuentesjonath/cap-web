// Helpers
import { ChartPaymentsType } from '@components/block/CondooCharts/chart';
// Types

// NOTE: move these types to types/index.ts once sure is ok

export type PhoneNumberType = {
	createdAt: string;
	id: number;
	number: string;
	type: string;
	updatedAt: string;
}

export type ProfileType = {
	birthday: null;
	createdAt: string;
	firstName: string;
	id: number;
	lastName: string;
	phoneNumber: PhoneNumberType;
	plan: null|any;
	step: string;
	updatedAt: string;
}

export type UserAdminType = {
	createdAt: string;
	email: string;
	firebaseAuthID: string;
	id: number ;
	profile: ProfileType;
	status: string;
	updatedAt: string;
}

export type AddressAdminType = {
	address: string
	addressLine1: null|string;
	addressLine2: null|string;
	addressLine3: null|string;
	city: string;
	country: string;
	createdAt: string;
	id: number; 
	latitude: string;
	longitude: string;
	postalcode: string;
	state: string;
	streetNumber: string;
	updatedAt: string;
}

export type TitleHolderType = {
	BuildiumId: number|null;
	CompanyName: null|any;
	Email: null|any;
	ManagementAgreementEndDate: null|any;
	ManagementAgreementStartDate: null|any;
	address: AddressAdminType;
	comment: null|any;
	createdAt: string;
	envelopeId: string;
	firstName: string;
	id: number;
	isActive: null|any;
	isCompany: null|any;
	lastName: string;
	updatedAt: string;
	user: UserAdminType;
}

export type PropertiesHome = {
	id: number,
	name: string,
	currentTenant: string,
	contract: string,
	titleHolder: string;
	address: AddressAdminType,
	rent: string,
}


export const ToChart = (_ownerDraws) => {
	if(!Array.isArray(_ownerDraws)) return [];
	if(_ownerDraws.length == 0) return [];
	
	const chart:ChartPaymentsType[] = _ownerDraws.map(({TotalAmount, Date}) => {
		return {
			amount: parseInt(TotalAmount),
			date: Date
		}
	})
	
	return chart;
}
