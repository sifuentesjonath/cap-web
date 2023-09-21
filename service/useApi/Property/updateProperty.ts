import { updateProperty } from "@/service/api";
import { UpdatePropertyParamsType } from "@/service/apiTypes";

const updateAProperty = async (updatePropertyParams: UpdatePropertyParamsType) => {
	const { Id } = updatePropertyParams;
	const propertyResponse = await updateProperty(Id, updatePropertyParams)
	if(!propertyResponse?.Id) throw(propertyResponse);
	return propertyResponse;
}

export default updateAProperty;