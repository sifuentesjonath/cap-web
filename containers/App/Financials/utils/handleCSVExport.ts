export const createFileName = (propertyName: string, dateViewName: string) => {
	const propertyNameUnderscored = propertyName.replace(/ /g, "_");
	const fileName = `${propertyNameUnderscored}_${dateViewName}_payments`;
	return fileName;
}