import CurrencyFormatter from "@utils/CurrencyFormatter";
import { TableRowType } from "./types";

export default function formatRowsAsCurrency (rows: TableRowType[]){
	const formatter = new CurrencyFormatter();
	return rows.map(row => ({
		...row,
		total: formatter.format(row.total),
		values: row.values.map(value => formatter.format(value))
	}));
}