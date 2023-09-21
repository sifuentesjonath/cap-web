/** You have `${number}` active `propert{ies/y}` */
export const getYouHaveActivePropertiesMessage = (numberOfProperties: number) => {
	const isSingular = numberOfProperties == 1;
	const message = [
		"You have",
		`${numberOfProperties}`,
		"active",
		isSingular ?  "property" : "properties"
	]
	return message.join(" ");
}