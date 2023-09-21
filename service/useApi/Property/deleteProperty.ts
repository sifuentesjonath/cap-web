import { deleteProperty } from "@/service/api";

const deleteAProperty = async (propertyId: number) => {
	try{
		const propertyResponse = await deleteProperty(propertyId)
		return propertyResponse;
	}
	catch(error){
		console.error('An error ocurred while trying to delete a property', error);
	}
}

export default deleteAProperty;