import { CondooDocumentsType } from '@/service/apiTypes';
import EmptyDocumentLabel from '@components/block/DocumentFileLabel/EmptyLabel';
import { EmptyLabelContainer } from '@components/block/DocumentFileLabel/style';
import { FC } from 'react'
// Helpers
import { formatDocuments } from '../utils/documentFormatting';
import { getAllDocumentsByYear } from '../utils/documentHandling';
// Components
import GroupedDocumentsByYear from '../GroupedDocumentsByYear';

interface IDocumentsItemsProps {
	documents: CondooDocumentsType[]
}

const DocumentsItems: FC<IDocumentsItemsProps> = ({ documents }) => {
	const { dateKeysByYear, dateValuesByYear } = formatDocuments(documents)

	return (
		<>
			{dateKeysByYear.length != 0
				?
				dateKeysByYear.map((dateKey: string, index) => {
					const currentDocumentValues = Object.values(dateValuesByYear[index])
					const documents: CondooDocumentsType[] = getAllDocumentsByYear(currentDocumentValues);
					const year = dateKey.split('d')[1]; // e.g. d2022
					return (
						<GroupedDocumentsByYear
							key={year}
							year={year}
							documents={documents}
						/>
					)
				})
				:
				<EmptyDocumentLabel />
			}
		</>
	)
}

export default DocumentsItems