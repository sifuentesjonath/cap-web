import { AddressType } from '@/service/apiTypes';

export interface IProperty {
  Id: number;
  Name: string,
  CurrentTenant: string,
  Contract: string,
  TitleHolder: any,
  UnitNumber: any;
  Unit: any;
  Address: AddressType,
  Rent: string;
  LeaseStatus: string;
  TitleHolderId: number;
  BuildiumId: number;
}
