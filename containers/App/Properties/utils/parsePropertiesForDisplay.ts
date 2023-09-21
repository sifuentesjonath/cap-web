import { PropertyAdminType } from '@/service/apiTypes';
import { IProperty } from './types'

const parsePropertiesForDisplay = (propertiesAdmin: PropertyAdminType[]):IProperty[] => {
	const properties: IProperty[] = propertiesAdmin.map(property => {
		const { Id, Address, Name, TitleHolder, Unit, UnitNumber, Rent, LeaseStatus, BuildiumId } = property;
		const { Id: TitleHolderId, FirstName, LastName } = TitleHolder;

		let CurrentTenantOrTenants = '';
		let Contract = '';

		if (property?.Lease) {
			CurrentTenantOrTenants = getCurrentTenants(property); 
			Contract = `${property.Lease.ContractLength.toString()} months`;
		}
		return {
			Id,
			Unit,
			Name,
			Rent,
			UnitNumber,
			LeaseStatus,
			Address,
			TitleHolderId,
			BuildiumId,
			CurrentTenant: CurrentTenantOrTenants,
			TitleHolder: `${FirstName} ${LastName}`,
			Contract,
		}
	});

	return properties;
}

const getCurrentTenants = (property: PropertyAdminType) => {
	if(!property.Lease) return '';

	let CurrentTenantOrTenants = '';

	const { CurrentTenants } = property?.Lease;
	if(CurrentTenants.length == 0) return '';

	const firstCurrentTenant = CurrentTenants.shift();
	const firstCurrentTenantName = `${firstCurrentTenant?.FirstName ?? 'Loading...'} ${firstCurrentTenant?.LastName ?? ''}`;

	CurrentTenantOrTenants = firstCurrentTenantName;

	if (CurrentTenants.length > 1) {
		CurrentTenantOrTenants = CurrentTenants.length == 1 
			? firstCurrentTenantName
			: CurrentTenants.reduce((accumulator, { FirstName, LastName }, index, currentTenants) => {
				const tenantName = `${FirstName} ${LastName}`;
				return accumulator.concat(`, ${tenantName}`);
			}, firstCurrentTenantName)
	}

	return CurrentTenantOrTenants;
}

export default parsePropertiesForDisplay;