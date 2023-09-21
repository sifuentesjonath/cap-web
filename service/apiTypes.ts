// import { AddressType } from '@types';
import { PlaidLinkOnSuccessMetadata } from 'react-plaid-link';

// Get

export interface AddressType {
	Id: number;
	AddressLine1: string;
	AddressLine2: string;
	AddressLine3: string;
	City: string;
	State: string;
	StreetNumber: string;
	NumberUnits:number;
	Country: string;
	PostalCode: string;
	Latitude: string;
	Longitude: string;
	CreatedAt: string;
	UpdatedAt: string;
}
export type TitleHolderType = {
	Id: number;
	IsCompany: number;
	IsActive: number;
	FirstName: string;
	LastName: string;
	Email: string;
	AlternateEmail?: string;
	Comment: string;
	ManagementAgreementStartDate: null|string;
	ManagementAgreementEndDate: null|string;
	CompanyName?: string;
	CreatedAt: string; //"2022-08-13T02:51:20.233Z"
	UpdatedAt: string; //"2022-08-15T06:07:02.000Z"
	EnvelopeId: null|string;
	BuildiumId: null|number;
	PropertiesOwned: number;
	Address: null|AddressType;
	User: UserType
	Plaid: PlaidDetailsType;
}
export type PropertyType = {
	Id: number;
	Name: string;
	StructureDescription?: string;
	UnitNumber: number;
	IsActive?: number;
	YearBuilt?: string;
	RentalType?: string;
	RentalSubType?: string;
	RollNumber?: number;
	LegalDescription?: string;
	CreatedAt: string;
	UpdatedAt: string;
	LockProgrammingCode?: string;
	Rent: string;
	BuildiumId: number;
	LeaseStatus: 'Leased' | 'Vacant';
	Address: AddressType;
	TitleHolder: TitleHolderType;
	User: UserProfileType;
	Unit: UnitType;
	Bathrooms?: number;
	Bedrooms?: number;
}
export type CreatedPropertyBuildiumIdsResponse = {
	Property?: number,
	TitleHolder?: number, 
	Unit?: number
}
export interface PropertyAdminType extends PropertyType {
	Lease: {
		BuildiumPropertyId: number;
		LeaseFromDate: string;
		LeaseToDate: string;
		CurrentTenants: CurrentTenant[];
		ContractLength: number;
	}
}
export type CurrentTenant = {
	Id: number;
	FirstName: string;
	LastName: string;
	Email: string;
	AlternateEmail: string;
	PhoneNumbers: any;
	CreatedDateTime: Date;
	EmergencyContact: any;
	DateOfBirth: Date;
	SMSOptInStatus: string;
	Address: any;
	AlternateAddress: any;
	MailingPreference: string;
	Leases: any[];
	Comment: string;
	TaxId: string;
}
export type UserType = {
	Id: number,
	FirebaseAuthId: string,
	BuildiumId?: number,
	Name: string,
	Email: string,
	Password: string,
	CreatedAt: string, //"2022-08-13T02:51:20.233Z"
	UpdatedAt: string, //"2022-08-13T02:51:20.233Z"
	Status: "Not verified"| "Verified"
}
export type PhoneNumberType = {
	Id: number;
	Number: string;
	Type: string;
	CreatedAt: string; //"2022-08-13T02:51:20.233Z"
	UpdatedAt: string; //"2022-08-15T06:07:02.000Z"
}
export type UserProfileType = {
	Id:           number;
	FirstName:    string;
	LastName:     string;
	ZendeskId:    number;
	Birthday:     string;
	Plan:         any; // comes null for now
	Step:         string;
	CreatedAt:    Date;
	UpdatedAt:    Date;
	GovernmentId: any; // comes null for now
	PhoneNumber?: PhoneNumberType[];
	Address?:      AddressType;
}
export type PlaidDetailsType = {
	Id: number;
	AccessToken: string;
	Profile: UserProfileType;
	CreatedAt: Date;
	UpdatedAt: Date;
}
export type PlaidInstitutionDetailsType = {
	country_codes: string[];
	logo: string; // base64 image
	name: string;
	primary_color: string;
}
export type CondooDocumentsType = {
	Id: number;
	Date: string;
	DocType: string;
	DocUrl: string;
	FileKey: string;
	FileType: string;
	Year: string;
	Month: string|null;
	CreatedAt: string;
	UpdatedAt: string;
	Property?: PropertyType;
}
export interface UnitType {
	Id:                                     number;
	BuildiumId:                             number;
	BuildingName:                           null;
	UnitNumber:                             string;
	Description:                            null;
	MarketRent:                             null;
	UnitBedrooms:                           null;
	UnitBathrooms:                          null;
	NumberBedrooms:                         number;
	NumberBathrooms:                        number;
	UnitSize:                               null;
	IsUnitListed:                           null;
	IsUnitOccupied:                         null;
	UnitType:                               null;
	UnitMarketingName:                      null;
	UnitName:                               null;
	MatterportURL:                          null;
	FloorPlanURL:                           null;
	ShortDescription:                       null;
	ParkingDetails:                         null;
	LeaseParkingDescription:                null;
	LocationShortDescription:               null;
	LocationLongDescription:                null;
	IsWillBeRenovated:                      null;
	IsHeatingForcedAir:                     null;
	IsHeatingElectricRadiant:               null;
	IsHeatingWaterRadiant:                  null;
	IsAC:                                   null;
	IsGas:                                  null;
	IsElectricity:                          null;
	IsWaterSewer:                           null;
	IsHotWater:                             null;
	IsHeatingForcedAirIncluded:             null;
	IsHeatingElectricRadiantIncluded:       null;
	IsHeatingWaterRadiantIncluded:          null;
	IsACIncluded:                           null;
	IsGasIncluded:                          null;
	IsElectricityIncluded:                  null;
	IsWaterSewerIncluded:                   null;
	IsHotWaterIncluded:                     null;
	UtilitiesInformationDescription:        null;
	UtilitiesTwelveMonthAverage:            null;
	GarageDetails:                          null;
	IsHouseHoldCleaningEssentialsIncluded:  null;
	HouseHoldCleaningEssentailsDetails:     null;
	IsElectricCarChargingStationIncluded:   null;
	ElectricCarChargingStationDetails:      null;
	IsAccessToPublicTransportationIncluded: null;
	AccessToPublicTransportationDetails:    null;
	IsBikeStorageIncluded:                  null;
	BikeStorageDetails:                     null;
	IsPackageDeliveryIncluded:              null;
	PackageDeliveryDetails:                 null;
	IsConciergeIncluded:                    null;
	ConciergDetails:                        null;
	IsLinensIncluded:                       null;
	LinensDetails:                          null;
	IsMicrowaveIncluded:                    null;
	MicrowaveDetails:                       null;
	IsDishwasherIncluded:                   null;
	DishwasherDetails:                      null;
	IsFridgeIncluded:                       null;
	FridgeDetails:                          null;
	IsFreezerIncluded:                      null;
	FreezerDetails:                         null;
	IsStoveIncluded:                        null;
	StoveDetails:                           null;
	IsWasherIncluded:                       null;
	WasherDetails:                          null;
	IsDryerIncluded:                        null;
	IsCableIncluded:                        null;
	CableDetails:                           null;
	TvDetails:                              null;
	IsWifiIncluded:                         null;
	WifiDetails:                            null;
	IsPoolIncluded:                         null;
	PoolDetails:                            null;
	IsHotTubIncluded:                       null;
	HotTubDetails:                          null;
	IsPatioBalconyIncluded:                 null;
	PatioBalconyDetails:                    null;
	IsYardIncluded:                         null;
	YardDetails:                            null;
	IsFitnessRoomIncluded:                  null;
	FitnessRoomDetails:                     null;
	IsMediaRoomIncluded:                    null;
	MediaRoomDetails:                       null;
	IsGameRoomIncluded:                     null;
	GameRoomDetails:                        null;
	IsGarageIncluded:                       null;
	DryerDetails:                           null;
	IsOvenIncluded:                         null;
	OvenDetails:                            null;
	IsTvIncluded:                           null;
	IsDishesSilverwareIncluded:             null;
	DishesSilverwareDetails:                null;
	IsCookingBasicsIncluded:                null;
	CookingBasicsDetails:                   null;
	DoorLockCode:                           null;
	SmokingRules:                           null;
	IsFireExtinguisher:                     null;
	FireExtinguisherDetails:                null;
	IsSmokeAlarm:                           null;
	SmokeAlarmDetails:                      null;
	IsCarbonMonoxideAlarm:                  null;
	CarbonMonoxideDetails:                  null;
	IsWheelChairAccessible:                 null;
	WheelChairAccessibleDetails:            null;
	IsWalkInTubs:                           null;
	WalkInTubsDetails:                      null;
	IsLaundryInUnit:                        null;
	IsLaundryInUnitIncluded:                null;
	IsLaundryInBuildingCoinOperated:        null;
	IsAdditionalStorageSpaceIncluded:       null;
	IsGuestParkingFree:                     boolean;
	IsGuestParkingPaid:                     boolean;
	LastMonthsRentDeposit:                  number;
	IsKeyDepositRequired:                   null;
	KeyDepositPerKey:                       number;
	KeyDepositTotal:                        number;
	KeyDepositDescription:                  null;
	IsParkingPassDepositRequired:           null;
	ParkingPassDepositPerPass:              number;
	UtilitiesLeaseDescription:              null;
	AvailableLeaseTerms:                    null;
	NextAvailableLeaseDate:                 null;
	IsAvailableForLease:                    null;
	IsDisplayedPublicly:                    boolean;
	IsShowingsFull:                         boolean;
	UpdatedAt:                              string;
	CreatedAt:                              string;
	LockProgrammingCode:                    null;
	CleanerLockCode:                        null;
	BuildingLockCode:                       null;
}
// Owner Draws
export interface OwnerDrawsType {
    Date:        string;
    Id:          number;
    TotalAmount: number;
    Memo:        string;
    Payee:       PayeeType;
}
export interface PayeeType {
    Id:   number;
    Name: string;
    Type: string;
    Href: string;
}
// General Ledger Transactions
export interface GeneralLedgerPaymentType {
    GLAccount:        GLAccount;
    Amount:           number;
    IsCashPosting:    boolean;
    ReferenceNumber:  null;
    Memo:             string;
    AccountingEntity: AccountingEntity;
    Date:             string;
    transactionID:    number;
}
export interface AccountingEntity {
    Id:                   number;
    AccountingEntityType: string;
    Href:                 string;
}
export interface GLAccount {
    Id:                      number;
    AccountNumber:           string;
    Name:                    string;
    Description:             string;
    Type:                    string;
    SubType:                 string;
    IsDefaultGLAccount:      boolean;
    DefaultAccountName:      null;
    IsContraAccount:         boolean;
    IsBankAccount:           boolean;
    CashFlowClassification:  string;
    ExcludeFromCashBalances: boolean;
    SubAccounts:             null;
    IsActive:                boolean;
    ParentGLAccountId:       number;
}



// Create

export type CreatePropertyParamsType = {
	Name: string;
	TitleHolderId: string;
	Rent: string;
	NumberUnits: string;
	Country: string;
	State: string;
	City: string;
	PostalCode: string;
	AddressLine1: string
	LeaseStatus: string
	Bedrooms: string;
	Bathrooms: string;
	Longitude: number;
	Latitude: number;
	isCreationInApp?: boolean;
	LoggedUser ?: string;
};

export type CreatePlaidDetailsTitleHolderParamsType = {
	TitleHolderId: string;
	PublicToken: string;
}

export type CreatePlaidDetailsProfileParamsType = {
	ProfileId: string;
	AccessToken: string;
}

export type CreateTitleHolderParamsType = {
	FirstName: string,
	LastName: string;
	IsCompany?: number;
	Email?: string;
	Country?: string;
	State?: string;
	City?: string;
	Province?: string;
	PostalCode?: string;
	StreetNumber?: string;
	isCreationInSetup?: boolean;
}

export type CreatePlaidParamsType = {
	public_token: string;
	metadata: PlaidLinkOnSuccessMetadata;
};

export type CreateTitleHolderBuildiumType = {
	FirstName?:                    string;
	LastName?:                     string;
	IsCompany:                    boolean;
	CompanyName?:                  string; // Cannot be more than 100 long
	DateOfBirth?:                  string;
	ManagementAgreementStartDate?: string;
	ManagementAgreementEndDate?:   string;
	Email?:                        string;
	AlternateEmail?:               string;
	PhoneNumbers?:{
		AddressLine1: string,
		AddressLine2: string,
		AddressLine3: string,
		City: string,
		State: string,
		PostalCode: string,
		Country: ['UnitedStates' | 'Canada'];
	};
	Address: {

	};
	Comment?:                      string;
	PropertyIds:                  number[]; // buildiumPropertyIds
}

// Update

export type UpdateUserProfileParamsType = {
	FirstName?: string;
	LastName?: string;
	Password?: string;
	Email?: string;
	Birthday?: Date;
	PhoneNumber?: string;
	PhoneNumberId?: number;
	NumberUnits?: string;
	// From Address
	StreetAddress?: string;
	State?: string;
	PostalCode?: string;
	Country?: string;
	City?: string;
	// can include AddressLines now, might want to change to use AddressType once its fully implemented
}

export type UpdateTitleHoldersEmailsParamsType = {
	TitleHolderId: string;
	Email: string;
};

export type SetBillingAddressToTitleHolderParamsType = {
	Id: string;
	AddressLine1?: string;
	City: string;
	State: string;
	PostalCode: string;
	Latitude: string;
	Longitude: string;
	Country: string;
	StreetNumber: string;
	IsCompany: number;
}

export type UpdatePropertyParamsType = {
	Id?: number;
	AddressId?: number;
	Name?: string;
	Country?: string;
	State?: string;
	City?: string;
	LeaseStatus?: string
	Rent?: string;
	PostalCode?: string;
	AddressLine1?: string;
	NumberUnits?: string;
	Province?: string;
	Bathrooms?: number;
	Bedrooms?: number;
	Longitude?: number;
	Latitude?: number;
}

export type UpdateTitleHolderParamsType = {
	FirstName: string;
	LastName: string;
	StreetNumber: string;
	City: string;
	State: string;
	Country: string;
	PostalCode: string;
	Email: string;
}

export type SetBillingAddressParamsType = {
	Id: string;
	AddressLine1?: string;
	City: string;
	State: string;
	PostalCode: string;
	Latitude: string;
	Longitude: string;
	Country: string;
	StreetNumber: string;
	IsCompany: number;
}
// Document Sign

export type DocumentSignParamsType = {
	TitleHolders: {
		Id: string;
		Name: string;
		Email: string;
		PropertyFee: string;
	}[],
	LoggedUser: string;
}
export type CreatePlaidDetailsParamsType = {
	TitleHolderId: string;
	PublicToken: string;
 }

 export type CreateZendeskUserParamsType = {
	email: string;
    username: string;
    sign: string; 
 }
