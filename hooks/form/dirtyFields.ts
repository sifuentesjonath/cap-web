import { DeepMap } from "react-hook-form";

function getDirtyFieldsOnly<FormType> (formData: FormType, dirtyFields: DeepMap<FormType, true>):FormType {
	//@ts-ignore
	const pickedFields:FormType = {};
	const pickDirtyFieldByKey = (field: string) => pickedFields[field] = formData[field];

	const dirtyFieldsKeys = Object.keys(dirtyFields);
	dirtyFieldsKeys.forEach(pickDirtyFieldByKey)

	return pickedFields;
}

export default getDirtyFieldsOnly;