import { OwnerDrawsType } from "@/service/apiTypes";
import { ChartPaymentsType } from "../types";

const getOwnerDrawsAsChartItems = (ownerDraws: OwnerDrawsType[]) => {
	const isNotAnArrayOrIsEmpty = (!Array.isArray(ownerDraws)) || (ownerDraws.length == 0);
	if(isNotAnArrayOrIsEmpty) return [];
	return ownerDraws.map(parseOwnerDrawAsChartItem);
}

const parseOwnerDrawAsChartItem = ({ TotalAmount, Date }: OwnerDrawsType):ChartPaymentsType => (
	{ amount: TotalAmount, date: Date }
);

export default getOwnerDrawsAsChartItems;