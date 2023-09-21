import React, { FC, useState } from 'react'
import moment from 'moment';
// Components
import DocumentFileLabel from '@components/block/DocumentFileLabel';
import { downloadDocumentfromAWS } from '@/service/api';
// Helpers
// import { DocumentInFormat } from '../utils/documentTypes';
import { getDocumentName } from '../utils/documentNamesHandling';
import { getDocumentDateAsString } from '../utils/documentDatesHandling';
import { getIcon } from '../utils/buttons';
// Styles
import { DocumentFileLabelContainer, YearTextContainer, Separator } from './styles';
import { CondooDocumentsType } from '@/service/apiTypes';
import sortDocuments from '../utils/sortDocuments';
import StyledLoader from '@components/element/StyledLoader';

export interface IGroupedByYear {
  year: string;
  documents: CondooDocumentsType[];
}
const GroupedDocumentsByYear: FC<IGroupedByYear> = props => {
  // const {agreementImage} = Icons;
  const { year, documents } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDownload = async (key) => {
    setIsLoading(true)
    // console.log('Handling download:', key)
    //  const download = await docusignDownloadDocuments();
    const download = await downloadDocumentfromAWS(key);
    const blob = new Blob([download.data], { type: 'application/pdf' });
    const fileDownloadUrl = URL.createObjectURL(blob);
    // setFileDownloadUrl({fileDownloadUrl: fileDownloadUrl})
    window.open(fileDownloadUrl);
    setIsLoading(false)
    //  saveAs(blob, 'Management-agreement.pdf');
  };
  return (
    <DocumentFileLabelContainer>
      {
        isLoading &&
        <StyledLoader />
      }
      <YearTextContainer>
        <span>{year}</span>
      </YearTextContainer>

      <DocumentFileLabelContainer>
        {sortDocuments(documents).map((document, index) => {
          const { DocType, FileKey, FileType, Property } = document
          return (
            <DocumentFileLabel key={`file_${index}_${FileKey}`}
              fileKey={FileKey}
              fileType={FileType}
              property={Property}
              date={getDocumentDateAsString(document)}
              fileTypeImage={getIcon(DocType)}
              fileName={getDocumentName(document)}
              handleDownload={() => handleDownload(FileKey)}
            />
          )
        })}
      </DocumentFileLabelContainer>
      <Separator />
    </DocumentFileLabelContainer>
  )
}

export default GroupedDocumentsByYear;