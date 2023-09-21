import { 
	FiltersType,
	getFilterCriterium 
} from "./documentFilteringHandling";

/** Toggle button filter action */
export const handleButtonFilter = (buttonTitle: FiltersType, currentFilter: string[]) => {
	const filterCopy = [...currentFilter];
	// get document names that this criterion should grab
	const documentNames = getFilterCriterium(buttonTitle); 

	const isAppliedInFilter = (criterion: string) => filterCopy.includes(criterion);
	const isFilterAlreadyApplied = documentNames.every((criterion) => isAppliedInFilter(criterion));

	if (isFilterAlreadyApplied) {
		const notInCurrentFilter = (criterion: string) => !documentNames.includes(criterion);
		const newFilterCriterion = filterCopy.filter(notInCurrentFilter);
		const isNewFilterCriterionEmpty = newFilterCriterion.length == 0;

		return {
			isFilterEmpty: isNewFilterCriterionEmpty,
			buttonFilter: [...newFilterCriterion],
		}
	}

	filterCopy.push(...documentNames);
	return {
		isFilterEmpty: false,
		buttonFilter: [...filterCopy],
	};
}