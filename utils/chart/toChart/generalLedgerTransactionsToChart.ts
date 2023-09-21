import { GeneralLedgerPaymentType } from "@/service/apiTypes";
import { ChartPaymentsType } from "../types";

const getGeneralLedgerTransactionsToChart = (generalLedgerTransactions: GeneralLedgerPaymentType[]) => {
	const isNotAnArrayOrIsEmpty = (!Array.isArray(generalLedgerTransactions)) || (generalLedgerTransactions.length == 0);
	if(isNotAnArrayOrIsEmpty) return [];
	return generalLedgerTransactions.map(parseGeneralLedgerTransactionsAsChartItem);
}

const parseGeneralLedgerTransactionsAsChartItem = ({ Amount, Date }: GeneralLedgerPaymentType):ChartPaymentsType => (
	{ amount: Amount, date: Date }
);

export default getGeneralLedgerTransactionsToChart;