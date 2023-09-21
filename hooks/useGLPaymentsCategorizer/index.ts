// Filter {

const incomeCategoriesFilter = {
	'Parking':[
		'parking',
		'42000'
	],
	'Rent': [
		'rent',
		'41000'
	],
	'Other':[
		'other',
		'43000', '44000', '45000', '46000', '49000'
	]
}

const expenseCategoriesFilter = {
	'CondooFees':[
		'fee',
		'58000',
	],
	'Maintenance':[
		'maintenance',
		'54100',
	],
	'Ptaxes':[
		'tax',
		'51000',
	],
	'Management_Fees:': [
		'53100'
	],
	'Utilities': [
		'55000'
	],
	'Leasing_Fees:': [
		'53200'
	],
	'Insurance': [
		'52000'
	]
}

const incomeCategories = Object.keys(incomeCategoriesFilter);
const expenseCategories = Object.keys(expenseCategoriesFilter);

const incomeOtherCategory = incomeCategories[incomeCategories.length-1]
const expenseOtherCategory = expenseCategories[expenseCategories.length-1]

const getIncomeCategory = (paymentName: string) => {
	const isInCategory = (category) => paymentName.search(category) != -1;

	for(let i = 0; i < incomeCategories.length; i++){
		const incomeCategory = incomeCategories[i];
		const incomeCategoryIds = incomeCategoriesFilter[incomeCategory];

		const isCategory = incomeCategoryIds.find(isInCategory);
		// console.log('income category', {incomeCategoryIds, paymentName, isCategory})
		if(isCategory) return incomeCategory
	}

	return incomeOtherCategory;
}

const getExpenseCategory = (paymentName: string) => {
	const isInCategory = (category) => paymentName.search(category) != -1;

	for(let i = 0; i < expenseCategories.length; i++){
		const expenseCategory = expenseCategories[i];
		const expenseCategoryIds = expenseCategoriesFilter[expenseCategory];

		const isCategory = expenseCategoryIds.find(isInCategory);
		// console.log('expense category', {expenseCategoryIds, paymentName, isCategory})
		if(isCategory) return expenseCategory;
	}

	return 'not supported';
}

const paymentCategoriesGetters = {
	'income': getIncomeCategory,
	'expense': getExpenseCategory,
}
const GLAccountTypes = Object.keys(paymentCategoriesGetters);

// }

// use filter {

const getPaymentsCategorization = (type: string, GLAPaymentName: string) => {
	// e.g. type -> 'Income', GLAPaymentName: '49000 - Interest Income'
	const categoryGetter = paymentCategoriesGetters[type];
	return categoryGetter(GLAPaymentName);
}

/** Returns category of the given payment General Ledger Account specifications, send arguments as lower case */
const useGLPaymentsCategorizer = (GLAccountType: string, GLAPaymentName: string) => {
	const [ type, name ] = [GLAccountType.toLowerCase(), GLAPaymentName.toLowerCase()];

	if(!GLAccountTypes.includes(type)) return 'not supported';

	const paymentCategory = getPaymentsCategorization(type, name);
	return paymentCategory;
}

export default useGLPaymentsCategorizer;

// }

/** Buildium Payments Information:

=== Condoo Table ===

Income:
	Rent:
		41000
	Parking:
		42000
	Other Income:
		43000, 44000, 45000, 46000

Expenses:
	Condoo Fees:
		58000
	Maintenance:
		54100 
	Property Tax:
		51000
	Condoo Fee:
		58000
	Management Fees:
		53100
	Utilities:
		55000
	Leasing Fees:
		53200
	Insurance:
		52000

=== Buildium IDs description ===

== Income Accounts ==

Rental Income: 41000
Parking Income: 42000
Other Income:
Additional Rent: 43000
Utility Income: 44000
Admin Fees: 45000
Late Fee Income: 46000
NSF Income: 47000
Cleaning and Maintenance Income: 48000
Interest Income: 49000

== Expense Accounts ==

Property Taxes: 51000
Insurance: 52000
Utilities: 55000
Telecome: 56000
Yard Care and Snow: 57000
Condo Fee: 58000
Bank Fees: 59100
Legal and Professional Fees: 59200
Licenses and Permits: 59300
Postage and Delivery: 59400
Supplies: 59500
Property Management Fees: 53000
Repairs and Maintenance: 53400
*/