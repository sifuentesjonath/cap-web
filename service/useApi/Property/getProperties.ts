import { getPropertyByEmail } from "@/service/api";

const getProperties = async (email: string) => {
	try{
		const propertyResponse = await getPropertyByEmail(email)
		return propertyResponse;
	}
	catch(error){
		console.error('An error ocurred while trying to get the properties', error);
	}
}

export default getProperties;