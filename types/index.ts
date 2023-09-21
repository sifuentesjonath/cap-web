import { NextPage } from 'next';

import AppLayout from '@components/layout/AppLayout';

export type PageWithLayout = NextPage & { layout: typeof AppLayout | null };

export type UserProfileType = {
  id: number,
  birthday: string|null,
  firstName: string,
  lastName: string,
  phoneNumber: PhoneNumberType,
  plan: string|null,
  step: string|null,
  createdAt: string,
  updatedAt: string|null,
}

export type UserType = {
  id: number,
  createdAt: string,
  email: string,
  firebaseAuthID: string,
  profile: UserProfileType
}

export type SignInputs = {
  Email: string;
  Password: string;
  ConfirmPassword: string;
};

export interface AddressType {
  Id?: number;
  StreetNumber: string;
  AddressLine1: string;
  NumberUnits: number;
  City: string;
  State: string;
  Country: string;
  PostalCode: string;
}

export interface ProfileInputs {
  firstName: string;
  lastName: string;
}

export type PhoneNumberType = {
  // id: number,
  // createdAt: string,
  Number: string,
  Type: string,
};

export type GovernmentType = {
  file: string,
  fileKey: string,
};

export type TitleHolderType = {
  Id: string,
  FirstName: string,
  LastName: string,
  IsActive: number
  // id: string,
  // BuildiumId: number|null,
  // isActive: number|null,
  // isCompany: number|null,

  // firstName: string,
  // lastName: string,
  // CompanyName: string|null;
  // Email: string|null;
  // address: AddressType,
  // comment: string|null,

  // createdAt: string,
  // updatedAt: string,
  // ManagementAgreementEndDate: string|null,
  // ManagementAgreementStartDate: string|null,
};

export type ProfileType = {
  FirstName: string,
  LastName: string,
  PhoneNumber: PhoneNumberType,
  Government: GovernmentType,
  Birthday: string,
  PlaidDetail: any,
  TitleHolder: TitleHolderType,
  Step: string,
};

export type ProfileInformationType = { // For Profile Editing
  FirstName: string;
  LastName: string;
  Password: string;
  ConfirmPassword: string;
  Email: string;
  PhoneNumber: string;
  StreetAddress: string;
  Unit: string;
  City: string;
  State: string;
  Country: string;
  PostalCode: string;
}
