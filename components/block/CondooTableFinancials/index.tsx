import { FC } from 'react';
import MaterialTable, { Column } from '@material-table/core';
import styled from 'styled-components';
// Helpers
import { media } from '@/scss/media';
import formatRowsAsCurrency from '@utils/financialsTable/handleCurrencyFormatting';
// Types
import { FontFamilies } from '@/containers/styles/typography';
import { TableRowType } from './TableFinancials';

interface ICondooTableFinancialsProps {
	tableHeader: Column<TableRowType>[];
	tableBody: TableRowType[];
}
const CondooTableFinancials: FC<ICondooTableFinancialsProps> = ({
	tableHeader,
	tableBody
}) => {
	return (
		<>
			{(tableHeader && tableBody) &&
				<TableContainer>
					<MaterialTable
						columns={tableHeader}
						//@ts-ignore
						data={formatRowsAsCurrency(tableBody)}
						title={''}
						options={{
							fixedColumns: { left: 2, right: 1 },
							defaultOrderByCollection: [],
							headerStyle: {
								backgroundColor: '#F9F9F9',
						
							},
							pageSize: 16,
							draggable: false
						}}
					/>
				</TableContainer>
			}
		</>
	)
}

const TableHead = `
	text-align: left;
	th {
		${FontFamilies.degularFont}
		font-weight: 700;
		font-size: 16px;
		line-height: 36px;
		padding-bottom: 14px;
	}
	tr {
		> * {
			&:last-child {
			${FontFamilies.degularFont}
			text-align: right;
			font-weight: 700;
			width: 10%;
			}
		}
	}
`;

const TableContainer = styled.div`
	width: 100%;
	text-align: center;
	font-size: 14px;
	position: relative;

	${media.desktopSmall} {
		min-width: 80%;
	}
	${media.desktop} {
		min-width: 85%;
	}
	${media.desktopLarge} {
		min-width: 95%;
	}
	.MuiTable-root {
		background-color: #F9F9F9;
	}
	// Scrollbar
	.Component-horizontalScrollContainer-11 ::-webkit-scrollbar-thumb {
     border: 0;
	}
	.MuiToolbar-regular {
		display: none; // Hides the search bar and footer
	}
	.MuiButtonBase-root svg {
		display: none; // Hides arrows next to heading titles 
	}
	.MuiPaper-root {
		background-color: transparent;
		box-shadow: none;
	}
	.MuiTableBody-root{
		background-color: transparent;
		box-shadow: none;
	}
	* {
		background-color: transparent;
		box-shadow: none;
	}
	thead {
		${TableHead}
		.MuiTableCell-root {
			border: none !important;
		}
		.MuiTableCell-root:nth-child(1){
			color: black !important;
			font-size: 16px !important;
			font-family: degular, sans-serif !important;
			font-weight: 700 !important;
			padding-bottom: 21px !important;
		}
		th:last-child {
			text-align: center;
		}
	}
	tbody {
		tr {
			border:none !important;
		}
		.MuiTableCell-root {
			border: none !important;
		}
		// Header Rows
		td[value="Expenses"],
		td[value="Total Expenses"], 
		// td[value="Contribution to reserve"],
		tr:nth-child(4),
		tr:nth-child(14) {
			color: black !important;
			font-size: 16px !important;
			font-family: degular, sans-serif !important;
			font-weight: 700 !important;
			padding-bottom: 21px !important;
		}
		// Content Rows
		td[value="Parking"],
		td[value="Rental"],
		td[value="Other"],
		td[value="Condoo Fees"],
		td[value="Maintenance"],
		td[value="Property Tax"],
		td[value="Management Fees"],
		td[value="Utilities"],
		td[value="Leasing Fees"],
		td[value="Insurance"],
		tr:last-child td {
			text-align: left;
			padding-left:50px;
		}
		// Dividers
		tr:nth-child(4),
		tr:nth-child(14),
		tr:nth-child(13)
		{
			border-top: 2px solid #C1C1C1 !important;
		}
		td[value="Contribution to reserve"]{
			text-align: left;
			padding-left:50px;
			padding-top:0;
		}
	
		td[value="NOI"] {
			color: black !important;
			font-size: 16px !important;
			font-family: degular, sans-serif !important;
			font-weight: 700 !important;
			padding-bottom: 0;
		}
		

		tr:last-child {
			color: #00C092 !important;
			border-top: 4px solid black !important;
			border-bottom: 4px solid black !important;
			font-size: 16px !important;
			font-family: ${FontFamilies.degularFont} !important;
			font-weight: 700 !important;
			.MuiTableCell-root {
				padding: 8px 16px !important;
			}
		}
	}

	.MuiTableFooter-root {
		display: none;
	}
`;

export default CondooTableFinancials